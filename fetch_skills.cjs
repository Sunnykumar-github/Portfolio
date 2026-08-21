const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OTYzZGZjZTdlYzkwMzgzOWE3OWVlM2JlOTUzEgsSBxDw05To2x0YAZIBIwoKcHJvamVjdF9pZBIVQhMyOTExMzAyNTYyNjcyMTkxOTIw&filename=&opi=89354086";

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const $ = cheerio.load(data);
        let mainContent = $.html($('main').children());

        // basic converts
        mainContent = mainContent.replace(/class=/g, 'className=')
            .replace(/stroke-width=/g, 'strokeWidth=')
            .replace(/stroke-linecap=/g, 'strokeLinecap=')
            .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
            .replace(/<style>([\s\S]*?)<\/style>/gi, (m, inner) => {
                let safe = inner.replace(/`/g, '\\`').replace(/\\/g, '\\\\').replace(/\$/g, '\\$');
                return `<style dangerouslySetInnerHTML={{__html: \`${safe}\`}} />`;
            })
            .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
            .replace(/<img([^>]*)>/g, '<img$1 />')
            .replace(/<br([^>]*)>/g, '<br$1 />')
            .replace(/<hr([^>]*)>/g, '<hr$1 />')
            .replace(/<input([^>]*)>/g, '<input$1 />')
            .replace(/<path([^>]*)><\/path>/g, '<path$1 />')
            .replace(/style="font-variation-settings: 'FILL' 1;"/gi, 'style={{fontVariationSettings: "\'FILL\' 1"}}');

        // leftover closing tags
        mainContent = mainContent.replace(/<\/img>/g, '')
            .replace(/<\/br>/g, '')
            .replace(/<\/hr>/g, '')
            .replace(/<\/input>/g, '');

        // add AOS
        mainContent = mainContent.replace(/<section /g, '<section data-aos="fade-up" ');

        const componentCode = `import React from 'react';\n\nexport default function Skills() {\n  return (\n    <div id="skills">\n      ${mainContent}\n    </div>\n  );\n}\n`;
        fs.writeFileSync('./src/components/Skills.jsx', componentCode);
        console.log("Skills component updated.");
    });
});
