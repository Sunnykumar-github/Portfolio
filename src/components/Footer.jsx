import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-surface-container-lowest border-t border-white/5 py-stack-lg mt-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center gap-stack-md">

            {/* Left side: Avatar + Copyright */}
            <div className="flex flex-row items-center gap-3">
              <img
                alt="Logo"
                className="h-7 w-7 object-cover rounded-full opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYnMkrLThq4R7ghTnr85mUTY3pRlsI3oN4md-d00PeDV8nsaOOUabfyTuacXTopb-UeWrmVULoKOJ_C9Vo_xWkrOsi1VcS0_xB6-zobuVzZq1wj7-weYVaABGGT5FzlAUZzjTZQNF3GbMijoP0Vg-IrNzJKHjwI3Ohoktr1oIJKcfYP1W1GyeKw26XY2M0qULtSAbJm9OqPy6dEKfhd2znY48QR2zkea6ue4n44XTsOm1sjYBOKbe9jwOxqRSnOGKBjA"
              />
              <p className="text-on-surface-variant font-body-md text-[14px]">
                © 2024 Sunny Kumar. Crafted with precision.
              </p>
            </div>

            {/* Right side: Links */}
            <div className="flex items-center gap-stack-md">
              <a className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-[14px]" href="https://www.linkedin.com/in/sunny-kumar3005" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[20px]">link</span>LinkedIn
              </a>
              <a className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-[14px]" href="https://github.com/Sunnykumar-github" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[20px]">code</span>GitHub
              </a>
              <a className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-[14px]" href="mailto:oneplussunny01@gmail.com">
                <span className="material-symbols-outlined text-[20px]">mail</span>Connect
              </a>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
