import React, { useEffect, useRef, useState } from 'react';

const TestimonialCards = () => (
  <>
    {/* Card 1: Samaksh Sharma */}
    <div className="w-[320px] md:w-[420px] shrink-0 h-full bg-surface-container-high/50 backdrop-blur-[20px] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-lg">
      <span className="material-symbols-outlined text-4xl text-tertiary/40 mb-6 group-hover:text-tertiary transition-colors">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 flex-grow">
        "An absolute force multiplier on any team. The precision in his technical execution is matched only by the clarity of his strategic thinking. Sunny has a rare ability to dive into complex operational chaos and engineer robust, elegantly simple solutions that drive overall business momentum."
      </p>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
        <img className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg" alt="Samaksh Sharma" src="/Samaksh%20Sharma.jpg" />
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">Samaksh Sharma</h4>
          <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">Senior Manager, Urban Company - NATIVE Modern Trade</span>
        </div>
      </div>
    </div>

    {/* Card 2: Pratik Parakh */}
    <div className="w-[320px] md:w-[420px] shrink-0 h-full bg-surface-container/60 backdrop-blur-[24px] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="material-symbols-outlined text-4xl text-secondary/30 mb-6 group-hover:text-secondary transition-colors">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface mb-8 leading-relaxed">
        "Sunny possesses a rare ability to bridge the gap between hardcore software engineering and high-level business strategy. His technical leadership didn't just optimize our immediate operations; it fundamentally elevated our team culture and reshaped how we continuously approach scale and execution."
      </p>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
        <img className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg" alt="Pratik Parakh" src="/Pratik%20Parakh.jpg" />
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">Pratik Parakh</h4>
          <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">General Manager, Urban Company - NATIVE Modern Trade</span>
        </div>
      </div>
    </div>

    {/* Card 3: Ritik Kumar */}
    <div className="w-[320px] md:w-[420px] shrink-0 h-full bg-primary-container/30 backdrop-blur-[24px] border border-primary/20 rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-xl">
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
      <span className="material-symbols-outlined text-4xl text-primary/50 mb-6 group-hover:text-primary transition-colors">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-primary-container mb-8 relative z-10 flex-grow">
        "A remarkably adaptable problem solver. Whether tackling intricate backend pipelines, steering cross-functional collaboration, or shipping critical features on tight deadlines, Sunny operates with immense ownership. He consistently delivers foundational tools that empower the entire product category."
      </p>
      <div className="flex items-center gap-4 border-t border-primary/20 pt-6 mt-auto relative z-10">
        <img className="w-12 h-12 rounded-full object-cover border border-primary/30 shadow-lg" alt="Ritik Kumar" src="/Ritik%20Kumar.png" />
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">Ritik Kumar</h4>
          <span className="font-label-caps text-label-caps text-primary text-[10px]">Category Manager, Urban Company - Product Business</span>
        </div>
      </div>
    </div>

    {/* Card 4: Komal Rathour */}
    <div className="w-[320px] md:w-[420px] shrink-0 h-full bg-surface-container-low/80 backdrop-blur-[30px] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-tertiary to-transparent opacity-50"></div>
      <span className="material-symbols-outlined text-4xl text-on-surface/20 mb-6 group-hover:text-tertiary transition-colors">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface mb-8 font-light leading-relaxed">
        "A powerhouse of efficiency and technical rigor. Sunny instinctively anticipates edge cases, aligns perfectly with overarching product goals, and delivers scalable infrastructure that never compromises on quality. He is paramount in driving measurable growth across core business metrics."
      </p>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
        <img className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg" alt="Komal Rathour" src="/Komal%20Rathour.jpg" />
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">Komal Rathour</h4>
          <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">Category Manager, Urban Company - Product Business</span>
        </div>
      </div>
    </div>

    {/* Card 5: Jitendra Kumar Mandal */}
    <div className="w-[320px] md:w-[420px] shrink-0 h-full bg-surface-container/40 backdrop-blur-[24px] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-lg">
      <span className="material-symbols-outlined text-4xl text-secondary/40 mb-6 group-hover:text-secondary transition-colors">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 flex-grow">
        "Incredibly sharp, reliable, and deeply committed to excellence. Sunny’s command over modern engineering practices sets a high benchmark for everyone around him. He brings incredible clarity to ambiguous projects and accelerates team velocity at every level."
      </p>
      <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
        <img className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg" alt="Jitendra Kumar Mandal" src="/Jitendra%20Kumar%20Mandal.jpg" />
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">Jitendra Kumar Mandal</h4>
          <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">Decision Analytics Associate, ZS Associates</span>
        </div>
      </div>
    </div>

    {/* Card 6: Himanshu Kumar */}
    <div className="w-[320px] md:w-[420px] shrink-0 h-full bg-surface-container-high/60 backdrop-blur-[24px] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>
      <span className="material-symbols-outlined text-4xl text-tertiary/50 mb-6 group-hover:text-tertiary transition-colors">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface mb-8 leading-relaxed relative z-10">
        "Sunny seamlessly balances deep technical mastery with an innate drive for innovation. His architectural foresight is remarkable—always building for reliability and scale. You can count on him to remain calm under pressure and consistently deliver brilliant software under the most demanding timelines."
      </p>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto relative z-10">
        <img className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg" alt="Himanshu Kumar" src="/Himanshu%20Kumar.jpg" />
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">Himanshu Kumar</h4>
          <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">R & I Engineer, Adrosonic</span>
        </div>
      </div>
    </div>
  </>
);

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Auto-scroll logic
  useEffect(() => {
    let animationId;
    const scroll = () => {
      if (scrollRef.current && !isPaused && !isDragging.current) {
        scrollRef.current.scrollLeft += 1; // Animation speed

        // Seamless loop: when scrolled past the first set, instantly reset
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationId = window.requestAnimationFrame(scroll);
    };

    animationId = window.requestAnimationFrame(scroll);
    return () => window.cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Manual Drag-to-Scroll Handlers for Desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none'; // Prevent text highlighting while dragging
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = 'auto';
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const dragDistance = (x - startX.current) * 2; // Scroll speed multiplier for drag
    scrollRef.current.scrollLeft = scrollLeft.current - dragDistance;
  };

  return (
    <div id="testimonials">
      <div className="flex flex-col w-full relative">
        {/*  Decorative Ambient Blur  */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>
        {/*  Hero Section  */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-stack-lg pb-stack-lg relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-stack-md">
            <div className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest block mb-unit [writing-mode:vertical-rl] absolute -left-8 top-stack-lg hidden xl:block">References</span>
              <h1 className="font-display-lg text-display-lg text-on-background mb-stack-sm mix-blend-difference">Voices of <br className="hidden md:block" /><span className="text-secondary italic font-light">Collaboration</span></h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Insights from peers, mentors, and leaders on the impact of analytical rigor paired with strategic vision. A record of trust and transformative problem-solving.
              </p>
            </div>
            {/*  Micro-interaction Data visualization  */}
            <div className="hidden lg:flex flex-col gap-4 bg-surface-container/40 p-6 rounded-2xl backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Trust Index</span>
              </div>
              <div className="flex items-end gap-2 h-16">
                <div className="w-2 bg-primary/20 rounded-t-sm h-full relative overflow-hidden"><div className="absolute bottom-0 left-0 w-full bg-primary h-[85%]"></div></div>
                <div className="w-2 bg-primary/20 rounded-t-sm h-full relative overflow-hidden"><div className="absolute bottom-0 left-0 w-full bg-primary h-[92%]"></div></div>
                <div className="w-2 bg-primary/20 rounded-t-sm h-full relative overflow-hidden"><div className="absolute bottom-0 left-0 w-full bg-primary h-[78%]"></div></div>
                <div className="w-2 bg-primary/20 rounded-t-sm h-full relative overflow-hidden"><div className="absolute bottom-0 left-0 w-full bg-primary h-[95%]"></div></div>
                <div className="w-2 bg-primary/20 rounded-t-sm h-full relative overflow-hidden"><div className="absolute bottom-0 left-0 w-full bg-secondary h-[100%] shadow-[0_0_8px_rgba(173,198,255,0.5)]"></div></div>
              </div>
            </div>
          </div>
        </section>
        {/*  Interactive Marquee Testimonials  */}
        <section className="w-full relative z-10 pb-stack-lg">
          {/* Gradient Edges for fade effect */}
          <div className="absolute top-0 left-0 w-[50px] md:w-[150px] h-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[50px] md:w-[150px] h-full bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

          {/* Draggable & Auto-scrolling track */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex w-full overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pr-6 items-stretch w-max" style={{ minWidth: "max-content" }}>
              <div className="flex gap-6 items-stretch pl-margin-mobile md:pl-margin-desktop">
                <TestimonialCards />
              </div>
              <div className="flex gap-6 items-stretch pr-margin-mobile md:pr-margin-desktop" aria-hidden="true">
                <TestimonialCards />
              </div>
            </div>
          </div>
        </section>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
