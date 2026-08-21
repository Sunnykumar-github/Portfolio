import React from 'react';

export default function Home() {
  return (
    <div id="home">
      <div className="flex flex-col w-full">
        {/*  Hero Section  */}
        <section className="relative min-h-[100vh] flex items-center justify-center px-margin-mobile lg:px-margin-desktop overflow-hidden">
          {/*  Abstract Background Pattern  */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path className="text-primary" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%" />
              {/*  Animated glowing orbs  */}
              <circle className="text-tertiary blur-[100px] opacity-30 animate-pulse" cx="20%" cy="30%" fill="currentColor" r="150" />
              <circle className="text-secondary blur-[120px] opacity-20 animate-pulse" cx="80%" cy="70%" fill="currentColor" r="200" style={{ "animationDelay": "2s" }} />
            </svg>
          </div>

          {/* Shooting Stars Animation */}
          <div className="shooting-star-container">
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
          </div>

          <div className="relative z-10 w-full max-w-container-max mx-auto text-center">
            <div className="animate-hero animate-hero-delay-1 inline-block mb-stack-md">
              <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase bg-tertiary/10 px-4 py-2 rounded-full border border-tertiary/20 backdrop-blur-md inline-flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                Available for Work
              </span>
            </div>
            <h1 className="animate-hero animate-hero-delay-2 font-display-lg text-display-lg text-on-surface mb-stack-md bg-clip-text text-transparent bg-gradient-to-r from-on-surface via-primary to-secondary max-w-4xl mx-auto leading-tight drop-shadow-lg">
              Turning Data into Impact.
            </h1>
            <p className="animate-hero animate-hero-delay-3 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
              Product <span className="mx-2 text-primary/50">•</span> Operations <span className="mx-2 text-primary/50">•</span> Data <span className="mx-2 text-primary/50">•</span> Category
              <br />
              Building intelligent systems at the intersection of analytics and execution.
            </p>
            <div className="animate-hero animate-hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-stack-sm">
              <a className="group relative px-8 py-4 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps tracking-wider uppercase rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/20" href="#experience">
                <span className="relative z-10 flex items-center gap-2">
                  View Experience
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </a>
              <a className="px-8 py-4 bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps tracking-wider uppercase rounded-lg hover:bg-surface-variant hover:text-on-surface-variant transition-all hover:-translate-y-1 shadow-sm" href="#contact">
                Get in Touch
              </a>
              <a
                className="relative group px-8 py-4 bg-tertiary/10 backdrop-blur-md border border-tertiary/30 text-tertiary font-label-caps text-label-caps tracking-wider uppercase rounded-lg hover:bg-tertiary hover:text-on-tertiary hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-[0_0_15px_rgba(200,160,255,0.1)] hover:shadow-[0_0_30px_rgba(200,160,255,0.3)] flex items-center gap-2 overflow-hidden"
                href="https://drive.google.com/file/d/1f2nsXNvcBesPfchp2UQa8jy4E9J4mMEw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Update this link to your actual Google Drive or Dropbox resume link"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300">download</span>
                <span className="relative z-10 font-bold">Resume</span>
              </a>
            </div>
          </div>
        </section>
        {/*  About Section (The Journey) - Hidden for now  */}
        {/* 
        <section data-aos="fade-up" className="py-stack-lg px-margin-mobile lg:px-margin-desktop relative">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              ... Text Content ...
              <div className="lg:col-span-5 flex flex-col gap-stack-md">
                <h2 className="font-headline-lg text-headline-lg text-on-surface drop-shadow-md">The Journey.</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  From the academic rigor of <strong className="text-on-surface">BIT Mesra</strong> (B.Tech) to navigating the complex data landscapes of industry leaders. My approach blends analytical precision with strategic vision, ensuring every data point translates into actionable growth.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-tertiary to-transparent rounded-full shadow-sm"></div>
              </div>
              ... Glassy Timeline/Cards ...
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-stack-sm relative">
                ... Connection Lines (Desktop only visual) ...
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ "zIndex": "0" }}>
                  <path className="text-outline-variant opacity-30" d="M 25% 20% C 50% 50%, 50% 50%, 75% 80%" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
                </svg>
                ... Card 1 ...
                <div className="group relative z-10 p-8 rounded-xl bg-surface-container/60 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
                  <div className="flex items-center gap-4 mb-stack-sm">
                    <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-sm border border-white/5 bg-white overflow-hidden p-[2px]">
                      <img src="/ISRO.jpg" alt="ISRO" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface text-[20px] leading-none break-words">ISRO</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant text-[14px]">Foundational analytical frameworks and high-stakes problem solving.</p>
                </div>
                ... Card 2 - JurixAI ...
                <div className="group relative z-10 p-8 rounded-xl bg-surface-container/60 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg md:mt-12">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
                  <div className="flex items-center gap-4 mb-stack-sm">
                    <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-sm border border-white/5 bg-white overflow-hidden p-[2px]">
                      <img src="/JurixAI.png" alt="JurixAI" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface text-[20px] leading-none break-words">JurixAI</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant text-[14px]">Leading product growth and shaping intelligent AI solutions.</p>
                </div>
                ... Card 3 - Urban Company (Current) ...
                <div className="group relative z-10 p-8 rounded-xl bg-surface-container/60 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg md:col-span-2 md:w-2/3 md:mx-auto">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
                  <div className="flex items-center gap-4 mb-stack-sm">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-white/5 bg-white overflow-hidden p-[2px]">
                      <img src="/Urban%20Company.png" alt="Urban Company" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface text-[20px] leading-none">Urban Company</h3>
                      <span className="font-label-caps text-label-caps text-tertiary block mt-1">Current</span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant text-[14px]">Scaling operations through data-driven strategic insights.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
      </div>
    </div>
  );
}
