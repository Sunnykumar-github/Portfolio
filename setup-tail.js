const fs = require('fs');

let html = fs.readFileSync('test_stitch_home.html', 'utf8');
let match = html.match(/tailwind\.config=({[\s\S]*?})<\/script>/);

if (match) {
    let configObjStr = match[1];
    // Replace content array into the config
    configObjStr = configObjStr.replace('{darkMode', '{content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], darkMode');

    let fileStr = '/** @type {import(\\'tailwindcss\\').Config} */\nexport default ' + configObjStr + ';';
    fs.writeFileSync('tailwind.config.js', fileStr);
}

const css = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html,body{margin:0;padding:0;}
  body{overscroll-behavior:none;}
  main>:first-child{margin-top:0!important;}
  main>:last-child{margin-bottom:0!important;}
}
::-webkit-scrollbar{display:none;}
`;
fs.writeFileSync('src/index.css', css);

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '');
indexHtml = indexHtml.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/, '');
fs.writeFileSync('index.html', indexHtml);
