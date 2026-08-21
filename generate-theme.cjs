const fs = require('fs');

const colors = {
    'background': '#051424', 'error': '#ffb4ab', 'surface': '#051424', 'surface-tint': '#bec6e0',
    'outline': '#909097', 'on-secondary-container': '#e6ecff', 'on-tertiary-fixed': '#00201c',
    'inverse-on-surface': '#233143', 'surface-container-highest': '#273647', 'secondary-fixed': '#d8e2ff',
    'on-tertiary': '#003731', 'on-primary-container': '#798098', 'primary-container': '#0f172a',
    'on-error-container': '#ffdad6', 'primary-fixed': '#dae2fd', 'error-container': '#93000a',
    'inverse-primary': '#565e74', 'tertiary-fixed-dim': '#4fdbc8', 'surface-variant': '#273647',
    'on-surface': '#d4e4fa', 'outline-variant': '#45464d', 'on-background': '#d4e4fa',
    'on-secondary-fixed': '#001a42', 'primary': '#bec6e0', 'on-tertiary-fixed-variant': '#005048',
    'tertiary-fixed': '#71f8e4', 'secondary': '#adc6ff', 'secondary-fixed-dim': '#adc6ff',
    'surface-bright': '#2c3a4c', 'on-tertiary-container': '#009182', 'surface-container': '#122131',
    'on-primary': '#283044', 'on-error': '#690005', 'secondary-container': '#0566d9',
    'tertiary-container': '#001c18', 'surface-container-high': '#1c2b3c', 'on-secondary-fixed-variant': '#004395',
    'inverse-surface': '#d4e4fa', 'on-surface-variant': '#c6c6cd', 'surface-container-lowest': '#010f1f',
    'on-primary-fixed': '#131b2e', 'surface-container-low': '#0d1c2d', 'primary-fixed-dim': '#bec6e0',
    'surface-dim': '#051424', 'tertiary': '#4fdbc8', 'on-primary-fixed-variant': '#3f465c',
    'on-secondary': '#002e6a'
};

const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`;
};

const lightColors = {
    'background': '#fdfbff', 'surface': '#fdfbff', 'surface-dim': '#ded8e1',
    'surface-bright': '#fdfbff', 'surface-container-lowest': '#ffffff', 'surface-container-low': '#f7f2fa',
    'surface-container': '#f3edf7', 'surface-container-high': '#ece6f0', 'surface-container-highest': '#e6e0e9',
    'on-surface': '#1a1b1f', 'on-background': '#1a1b1f', 'on-surface-variant': '#44474f',
    'surface-variant': '#e1e2ec', 'inverse-surface': '#2f3033', 'inverse-on-surface': '#f1f0f4',
    'primary': '#005ac1', 'on-primary': '#ffffff', 'primary-container': '#d8e2ff', 'on-primary-container': '#001a41',
    'primary-fixed': '#d8e2ff', 'primary-fixed-dim': '#bac6ea', 'on-primary-fixed': '#001a41', 'on-primary-fixed-variant': '#004297',
    'secondary': '#535e78', 'on-secondary': '#ffffff', 'secondary-container': '#d8e2ff', 'on-secondary-container': '#0f1b32',
    'secondary-fixed': '#d8e2ff', 'secondary-fixed-dim': '#bbc6ea', 'on-secondary-fixed': '#0f1b32', 'on-secondary-fixed-variant': '#3b465f',
    'tertiary': '#006a60', 'on-tertiary': '#ffffff', 'tertiary-container': '#74f8e5', 'on-tertiary-container': '#00201c',
    'tertiary-fixed': '#74f8e5', 'tertiary-fixed-dim': '#53dbc8', 'on-tertiary-fixed': '#00201c', 'on-tertiary-fixed-variant': '#005048',
    'error': '#ba1a1a', 'on-error': '#ffffff', 'error-container': '#ffdad6', 'on-error-container': '#410002',
    'outline': '#74777f', 'outline-variant': '#c4c6d0', 'inverse-primary': '#adc6ff', 'surface-tint': '#005ac1'
};

const tailwindColorsObj = {};
let cssCode = ':root, .light {\n';
for (const [k, v] of Object.entries(lightColors)) {
    cssCode += `  --color-${k}: ${hexToRgb(v)};\n`;
    tailwindColorsObj[k] = `rgb(var(--color-${k}) / <alpha-value>)`;
}
cssCode += '}\n\n.dark {\n';
for (const [k, v] of Object.entries(colors)) {
    cssCode += `  --color-${k}: ${hexToRgb(v)};\n`;
    if (!tailwindColorsObj[k]) {
        tailwindColorsObj[k] = `rgb(var(--color-${k}) / <alpha-value>)`;
    }
}
cssCode += '}\n';

fs.writeFileSync('theme-out.txt', cssCode);
fs.writeFileSync('tailwind-out.txt', JSON.stringify(tailwindColorsObj, null, 2));
