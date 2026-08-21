const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const urls = JSON.parse(fs.readFileSync('./urls.json', 'utf8'));

// Converts HTML payload to JSX
function htmlToJSX(html) {
    return html
        .replace(/class=/g, 'className=')
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-dasharray=/g, 'strokeDasharray=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/font-variation-settings=/g, 'style={{ fontVariationSettings: ')
        .replace(/style="([^"]*)"/g, (match, styleAttr) => {
            // basic style parsing
            if (styleAttr.includes('font-variation-settings')) return match; // Handled above, kinda hacky but fine for specific usecase
            const st = styleAttr.split(';').filter(x => x.trim()).map(x => {
                const [k, v] = x.split(':');
                if (!k || !v) return '';
                const key = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                return `"${key}": "${v.trim()}"`;
            }).join(',');
            return `style={{${st}}}`;
        })
        .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
        .replace(/<img([^>]*)>/g, '<img$1 />')
        .replace(/<input([^>]*)>/g, '<input$1 />')
        .replace(/<hr([^>]*)>/g, '<hr$1 />')
        .replace(/<br([^>]*)>/g, '<br$1 />')
        .replace(/<circle([^>]*)>/g, '<circle$1 />')
        .replace(/<rect([^>]*)>/g, '<rect$1 />')
        .replace(/<path([^>]*)><\/path>/g, '<path$1 />'); // simplify empty paths
}

async function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function processAll() {
    for (const [name, url] of Object.entries(urls)) {
        console.log(`Processing ${name}...`);
        const htmlString = await fetchHtml(url);
        const $ = cheerio.load(htmlString);

        // Stitch exports usually have everything in <main> for the sections (except Navbar/Footer)
        let componentHtml = '';

        if (name === 'Home') {
            // Home also contains the Navbar and Footer in the full page.
            // Let's extract the header as Navbar
            const headerHtml = $('header').parent().html();
            // Actually cheerio $('header') outerHTML...
            const headerOuter = $.html($('header'));
            const parsedHeader = htmlToJSX(headerOuter).replace(/style=\{\{ fontVariationSettings: 'FILL' 1; \}\}/g, "style={{fontVariationSettings: \"'FILL' 1\"}}");
            fs.writeFileSync('./src/components/Navbar.jsx', `import React from 'react';\n\nexport default function Navbar() {\n  return (\n    <>\n${parsedHeader}\n    </>\n  );\n}\n`);

            const footerOuter = $.html($('footer'));
            const parsedFooter = htmlToJSX(footerOuter);
            fs.writeFileSync('./src/components/Footer.jsx', `import React from 'react';\n\nexport default function Footer() {\n  return (\n    <>\n${parsedFooter}\n    </>\n  );\n}\n`);
        }

        // Usually, the specific section content is inside the main tag's first section, 
        // or just main contents for specific screen.
        // If it's a specific screen exported, we just get <main> contents.
        const mainContent = $.html($('main').children());

        // Convert to JSX
        let jsx = htmlToJSX(mainContent);
        // Fix up fontVariationSettings which gets messed up easily
        jsx = jsx.replace(/style=\{\{ fontVariationSettings: 'FILL' 1; \}\}/g, "style={{fontVariationSettings: \"'FILL' 1\"}}");

        const componentCode = `import React from 'react';\n\nexport default function ${name}() {\n  return (\n    <div id="${name.toLowerCase()}">\n      ${jsx}\n    </div>\n  );\n}\n`;

        fs.writeFileSync(`./src/components/${name}.jsx`, componentCode);
    }

    // Rewrite App.jsx
    const appCode = `import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      <Navbar />
      <main className="pt-20 w-full min-h-screen">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Leadership />
        <Certifications />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
`;
    fs.writeFileSync('./src/App.jsx', appCode);

    // Extract Tailwind config and CSS
    const sampleHtml = await fetchHtml(urls['Home']);
    const $sample = cheerio.load(sampleHtml);

    // Tailwind config script 
    const twConfig = $sample('#tailwind-config').html();
    const twScript = `<script src="https://cdn.tailwindcss.com"></script>\n<script id="tailwind-config">${twConfig}</script>`;

    // Rewrite index.html to inject Tailwind
    let indexHtml = fs.readFileSync('./index.html', 'utf8');
    indexHtml = indexHtml.replace('</head>', `  ${twScript}\n  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Plus+Jakarta+Sans:wght@100..900&display=swap" rel="stylesheet">\n  </head>`);
    fs.writeFileSync('./index.html', indexHtml);

    // Create index.css with just the base layer from the head
    const baseCss = $sample('style').html();
    fs.writeFileSync('./src/index.css', baseCss);

    console.log('Conversion complete!');
}

processAll().catch(console.error);
