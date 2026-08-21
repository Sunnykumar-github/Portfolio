const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir);

for (const file of files) {
    if (!file.endsWith('.jsx')) continue;
    let code = fs.readFileSync(path.join(dir, file), 'utf8');

    // Fix literal <style>...
    code = code.replace(/<style>([\s\S]*?)<\/style>/gi, (match, inner) => {
        const safeInner = inner.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        return `<style dangerouslySetInnerHTML={{__html: \`${safeInner}\`}} />`;
    });

    // Fix literal <script>...
    code = code.replace(/<script(?![^>]*src)([^>]*)>([\s\S]*?)<\/script>/gi, (match, attrs, inner) => {
        const safeInner = inner.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        return `<script${attrs} dangerouslySetInnerHTML={{__html: \`${safeInner}\`}} />`;
    });

    code = code.replace(/stroke-linecap=/g, 'strokeLinecap=')
        .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
        .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');

    fs.writeFileSync(path.join(dir, file), code);
}
