import React from 'react';

export default function WhyHireMe() {
  return (
    <div id="whyhireme">
      <div className="flex flex-col w-full relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-tertiary-fixed/5 blur-[120px]"></div>
          <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-secondary-fixed/5 blur-[80px]"></div>
        </div>
        <section data-aos="fade-up" className="relative z-10 pt-stack-lg pb-stack-lg max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mb-stack-lg">
            <div className="lg:col-span-8 flex flex-col gap-stack-md">
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">[ VALUE PROPOSITION ]</p>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter leading-none">
                The Catalyst <br />
                <span className="text-on-surface-variant">For Growth</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-stack-sm text-right hidden lg:flex">
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm ml-auto">
                I combine the analytical rigor of an engineering background with hands-on experience in business operations and data strategy. I don't just analyze data in a silo—I build systems, automate workflows, and drive ground-level execution to solve real business bottlenecks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-gutter mt-stack-lg lg:grid-cols-1">
            {/* Card 1: Operational Execution */}
            <div className="flex flex-col bg-surface-container rounded-xl p-stack-md relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-white/5 backdrop-blur-xl bg-opacity-60">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-stack-sm"><div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0"><span className="material-symbols-outlined text-[24px]">account_tree</span></div><h3 className="font-headline-md text-headline-md text-on-surface">Operational Execution & Team Leadership</h3></div>

              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md leading-relaxed">
                I understand what it takes to manage real-world operations and distributed teams. At <strong className="text-on-surface">Urban Company</strong>, I directed daily operations across 60+ retail stores and managed a 60-member field promoter team to consistently achieve sales targets. When manual reporting slowed us down, I engineered automated workflows using Google Apps Script and built a custom Lead Management System, significantly reducing installation turnaround times. I also apply an entrepreneurial lens to operations, having founded <strong className="text-on-surface">BIT Cycles</strong> to build a student-sourced rental platform that generated Rs. 20,000 in revenue.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Workflow Automation</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Team Leadership</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Entrepreneurship</span>
              </div>
            </div>

            {/* Card 2: Data-Backed Decision Making */}
            <div className="flex flex-col bg-surface-container rounded-xl p-stack-md relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-white/5 backdrop-blur-xl bg-opacity-60">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-stack-sm"><div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300 flex-shrink-0"><span className="material-symbols-outlined text-[24px]">insights</span></div><h3 className="font-headline-md text-headline-md text-on-surface">Data-Backed Decision Making & KPI Tracking</h3></div>

              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md leading-relaxed">
                I turn raw information into clear, actionable business strategies. During my time as a Project Intern at <strong className="text-on-surface">Fractal Analytics</strong>, I built 10+ Power BI dashboards tracking over 50 KPIs for a North American beverage client, and optimized SQL queries across datasets of 100K+ rows to reduce reporting turnaround time by 30%. Furthermore, while managing the Salon category for Urban Company in Pune, I owned the KPI reporting and increased service fulfillment rates by redesigning regional hub-to-order assignment logic.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Power BI / SQL</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">KPI Architecture</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Strategy</span>
              </div>
            </div>

            {/* Card 3: Root Cause Analysis */}
            <div className="flex flex-col bg-surface-container rounded-xl p-stack-md relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-white/5 backdrop-blur-xl bg-opacity-60 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-stack-sm"><div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300 flex-shrink-0"><span className="material-symbols-outlined text-[24px]">psychology</span></div><h3 className="font-headline-md text-headline-md text-on-surface">First-Principles Problem Solving & RCA</h3></div>

              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md leading-relaxed">
                My engineering background has wired me to break down massive, complex problems into logical steps. Whether I am designing and performing finite element analysis on a 1.5m-diameter head expander for an <strong className="text-on-surface">ISRO</strong> spacecraft shaker system, or conducting root cause analysis (RCA) on customer escalations to overhaul response protocols, I approach every challenge systematically. At Fractal Analytics, conducting RCA on 50+ business queries allowed me to deliver data-backed recommendations that measurably drove sales growth.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Root Cause Analysis</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Systems Engineering</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps">Optimization</span>
              </div>
            </div>
          </div>
          <div className="mt-stack-lg lg:mt-[120px] bg-surface-container-low rounded-2xl p-stack-lg flex flex-col items-center text-center relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-repeat" style={{ "backgroundSize": "20px 20px" }}></div>
            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm tracking-tight">Ready to Build the Future?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
                I thrive at the intersection of analytics, product, and operations, and I am ready to build scalable systems that drive measurable growth across diverse business management roles. Let's discuss how my analytical background and leadership experience can drive immediate value for your team.
              </p>
              <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-body-md font-medium rounded-full hover:bg-primary-fixed transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" href="#contact">
                Start a Conversation
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
