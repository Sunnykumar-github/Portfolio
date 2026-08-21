import React from 'react';

export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col w-full">
        <section data-aos="fade-up" className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-container-low opacity-50 -z-10"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center py-stack-lg">
            <div className="lg:col-span-7 flex flex-col gap-stack-md z-10">
              <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-unit mb-unit">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">The Genesis</span>
              </div>
              <h1 data-aos="fade-up" data-aos-delay="200" className="font-display-lg text-display-lg text-on-surface text-balance">
                Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed to-primary">raw data</span> and strategic vision.
              </h1>
              <p data-aos="fade-up" data-aos-delay="400" className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance">
                I am a Data Scientist &amp; Strategist who views data not just as numbers, but as the raw material for building better products, optimizing growth, and streamlining operations.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
                <img alt="Sunny Kumar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYnMkrLThq4R7ghTnr85mUTY3pRlsI3oN4md-d00PeDV8nsaOOUabfyTuacXTopb-UeWrmVULoKOJ_C9Vo_xWkrOsi1VcS0_xB6-zobuVzZq1wj7-weYVaABGGT5FzlAUZzjTZQNF3GbMijoP0Vg-IrNzJKHjwI3Ohoktr1oIJKcfYP1W1GyeKw26XY2M0qULtSAbJm9OqPy6dEKfhd2znY48QR2zkea6ue4n44XTsOm1sjYBOKbe9jwOxqRSnOGKBjA" />
                <div className="absolute bottom-6 left-6 right-6 z-20 p-4 bg-surface-container/60 backdrop-blur-xl rounded-xl border border-white/10">
                  <p className="font-label-caps text-label-caps text-primary mb-1">Current Focus</p>
                  <p className="font-body-md text-body-md text-on-surface">Building predictive models for scalable growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
<section data-aos="fade-up" className="w-full bg-surface-container-low relative py-stack-lg"><div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mb-stack-lg">
<div className="lg:col-span-8">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">The Philosophy</span>
<h2 className="font-display-lg text-display-lg text-on-surface leading-tight">
        Data is <span className="italic font-serif">agnostic</span>. It is the interpretation that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary-fixed">drives value</span>.
      </h2>
</div>
<div className="lg:col-span-4 pb-unit">
<p className="font-body-lg text-body-lg text-on-surface-variant border-l border-primary/30 pl-6">
        Viewing numbers as the raw material for building resilient products and optimizing growth.
      </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="group p-stack-md rounded-2xl bg-surface-container-highest/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary">architecture</span>
</div>
<h3 className="font-bold text-on-surface text-[20px] mb-2">Architectural Thinking</h3>
<p className="text-body-md text-on-surface-variant">Scalable, adaptive solutions built for long-term resilience.</p>
</div>
<div className="group p-stack-md rounded-2xl bg-surface-container-highest/40 backdrop-blur-xl border border-white/5 hover:border-tertiary-fixed/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-tertiary-fixed">query_stats</span>
</div>
<h3 className="font-bold text-on-surface text-[20px] mb-2">Actionable Insights</h3>
<p className="text-body-md text-on-surface-variant">Metrics that drive strategic decisions, not just reports.</p>
</div>
<div className="group p-stack-md rounded-2xl bg-surface-container-highest/40 backdrop-blur-xl border border-white/5 hover:border-secondary/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary">psychology</span>
</div>
<h3 className="font-bold text-on-surface text-[20px] mb-2">Continuous Iteration</h3>
<p className="text-body-md text-on-surface-variant">Rapid model evolution through tight feedback loops.</p>
</div>
</div>
</div></section>

<section data-aos="fade-up" className="w-full bg-surface relative overflow-hidden py-stack-lg"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(190,198,224,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
<div className="flex flex-col items-center text-center gap-unit mb-stack-lg">
<span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Expertise</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Versatility in Action</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Delivering holistic solutions at the intersection of diverse disciplines.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="flex flex-col gap-stack-sm p-stack-md rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:bg-white/[0.04] hover:border-primary/40 transition-all duration-500 group">
<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary">rocket_launch</span>
</div>
<h4 className="font-headline-md text-on-surface text-[24px]">Product</h4>
<p className="font-body-md text-on-surface-variant">Optimizing UX with A/B testing and predictive models.</p>
<div className="mt-auto pt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full font-label-caps text-[10px] text-primary">A/B Testing</span>
<span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full font-label-caps text-[10px] text-primary">UX Analytics</span>
</div>
</div>
<div className="flex flex-col gap-stack-sm p-stack-md rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:bg-white/[0.04] hover:border-tertiary-fixed/40 transition-all duration-500 group">
<div className="w-12 h-12 bg-tertiary-fixed/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-tertiary-fixed">trending_up</span>
</div>
<h4 className="font-headline-md text-on-surface text-[24px]">Growth</h4>
<p className="font-body-md text-on-surface-variant">Scaling acquisition via advanced attribution and cohort analysis.</p>
<div className="mt-auto pt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-tertiary-fixed/5 border border-tertiary-fixed/10 rounded-full font-label-caps text-[10px] text-tertiary-fixed">Attribution</span>
<span className="px-3 py-1 bg-tertiary-fixed/5 border border-tertiary-fixed/10 rounded-full font-label-caps text-[10px] text-tertiary-fixed">Cohort Analysis</span>
</div>
</div>
<div className="flex flex-col gap-stack-sm p-stack-md rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:bg-white/[0.04] hover:border-secondary/40 transition-all duration-500 group">
<div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary">settings_suggest</span>
</div>
<h4 className="font-headline-md text-on-surface text-[24px]">Operations</h4>
<p className="font-body-md text-on-surface-variant">Automating reporting and streamlining workflows with ML.</p>
<div className="mt-auto pt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full font-label-caps text-[10px] text-secondary">Automation</span>
<span className="px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full font-label-caps text-[10px] text-secondary">Resource Mgt</span>
</div>
</div>
</div>
</div></section>
*/}
      </div><style dangerouslySetInnerHTML={{
        __html: `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
`}} />
    </div>
  );
}
