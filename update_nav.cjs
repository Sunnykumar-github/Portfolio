const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// 1. Get RHS logo src
let rhsSrcMatch = navbar.match(/<img[^>]+src="([^"]+)"[^>]*><\/div><\/div><\/div><\/header>/);
let rhsSrc = rhsSrcMatch ? rhsSrcMatch[1] : '';

// 2. Remove RHS entirely
navbar = navbar.replace(/<div className="flex items-center gap-4">[\s\S]*?<\/div><\/div><\/div><\/header>/, '</div></div></header>');

// 3. Put RHS src into LHS logo if found
if (rhsSrc) {
    navbar = navbar.replace(/<img[^>]+src="https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXuAWqj[^"]+"/, `<img alt="Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-110 rounded-full" src="${rhsSrc}"`);
}

// 4. Update Nav Links
let newNav = `
<nav className="hidden xl:flex flex-1 justify-center items-center gap-4 text-[13px]" data-active-classes="text-primary font-medium">
  <a className="transition-colors duration-300 text-primary font-medium" href="#home">Home</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#about">About</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#experience">Experience</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#skills">Skills</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#education">Education</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#projects">Projects</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#leadership">Leadership</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#certifications">Certifications</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#whyhireme">Why Hire</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#testimonials">Testimonials</a>
  <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#contact">Contact</a>
</nav>`;

navbar = navbar.replace(/<nav className="hidden md:flex [^>]+>[\s\S]*?<\/nav>/, newNav);

fs.writeFileSync('src/components/Navbar.jsx', navbar);
