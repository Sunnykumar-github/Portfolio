import React from 'react';

export default function Experience() {
  return (
    <div id="experience">
      <div className="flex flex-col w-full relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="60" id="dots" patternUnits="userSpaceOnUse" width="60">
                <circle cx="2" cy="2" r="1.5" className="text-secondary" fill="currentColor" opacity="0.4" />
              </pattern>
            </defs>
            <rect fill="url(#dots)" height="100%" width="100%" />
            <circle className="text-primary blur-[120px] opacity-30 animate-pulse" cx="10%" cy="40%" fill="currentColor" r="200" />
            <circle className="text-tertiary blur-[100px] opacity-20 animate-pulse" cx="80%" cy="90%" fill="currentColor" r="150" style={{ "animationDelay": "1.5s" }} />
          </svg>
        </div>
        <section data-aos="fade-up" className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-stack-lg relative z-10">
          <div className="mb-stack-lg max-w-3xl">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm drop-shadow-md">Professional Trajectory</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">A timeline of data-driven impact, operational scaling, and analytical problem-solving across diverse industries.</p>
          </div>
          <div className="relative border-l-2 border-surface-tint/20 ml-4 md:ml-8 lg:ml-[120px] space-y-stack-lg pb-stack-lg">
            {/*  Experience 1: Urban Company  */}
            <div className="relative pl-8 md:pl-stack-md group">
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-white/10 p-[2px]">
                <img src="/Urban%20Company.png" alt="Urban Company" className="w-full h-full object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="material-symbols-outlined text-[16px] text-primary hidden" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
              </div>
              <div className="hidden lg:flex absolute -left-[160px] top-2 w-[120px] justify-end">
                <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 font-label-caps text-[11px] text-primary uppercase tracking-widest shadow-sm whitespace-nowrap shadow-primary/5">Feb 2026 - Aug 2026</span>
              </div>
              <div className="bg-surface-container/60 backdrop-blur-2xl rounded-xl p-stack-md shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <img src="/Urban%20Company.png" alt="" className="absolute -bottom-8 -right-8 w-64 h-64 object-contain opacity-[0.02] group-hover/card:opacity-[0.06] group-hover/card:scale-110 group-hover/card:-rotate-3 transition-all duration-700 pointer-events-none z-0 grayscale blur-[2px]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-stack-sm mb-stack-sm relative z-10">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Business Development Associate</h2>
                    <div className="flex items-center gap-2 text-primary font-body-md text-body-md">
                      <span className="font-semibold">Urban Company</span>
                      <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                      <span>Data &amp; Operations</span>
                    </div>
                  </div>
                  <span className="lg:hidden mt-2 md:mt-0 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 font-label-caps text-[11px] text-primary uppercase tracking-widest shadow-sm whitespace-nowrap inline-block self-start">Feb 2026 - Aug 2026</span>
                </div>

                <h4 className="font-label-caps text-primary uppercase tracking-widest mb-3 mt-6">Native – Modern Trade (Bangalore)</h4>
                <ul className="space-y-3 relative z-10 mb-6 border-l-2 border-primary/20 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Built a Lead Management System for Native RO and engineered automated workflows for Promoter Attendance, daily reporting, and MT request creation reminders.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Accelerated Modern Trade (MT) fulfillment workflows using Apps Script, SQL, and advanced analytics, significantly reducing installation TAT.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Directed daily operations across 60+ stores in major hubs (Bangalore, Chennai, Nashik, Pune) while providing essential operational support for other cities.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Helped streamline Sales Operations, managed a team of 60+ field promoters, and actively supported cross-functional teams to achieve sales target fulfillment.</p>
                  </li>
                </ul>

                <h4 className="font-label-caps text-primary uppercase tracking-widest mb-3">Salon Category (Pune)</h4>
                <ul className="space-y-3 relative z-10 border-l-2 border-primary/20 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Improved reporting efficiency using Advanced Excel (Pivot Tables, XLOOKUP) to analyze daily KPIs and cancellations.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Drove an increase in service fulfillment rates by optimizing regional hub assignments.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary/70 mt-1">arrow_right</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Slashed escalation rates by RCA on recurring issues and overhauling response protocols to accelerate customer TAT.</p>
                  </li>
                </ul>
                <div className="mt-stack-sm pt-stack-sm border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">Apps Script</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">SQL</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">Advanced Excel</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">Operations</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">RCA</span>
                </div>
              </div>
            </div>

            {/*  Experience 2: JurixAI  */}
            <div className="relative pl-8 md:pl-stack-md group">
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-white/10 p-[2px]">
                <img src="/JurixAI.png" alt="JurixAI" className="w-full h-full object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="material-symbols-outlined text-[16px] text-secondary hidden" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <div className="hidden lg:flex absolute -left-[160px] top-2 w-[120px] justify-end">
                <span className="px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 font-label-caps text-[11px] text-secondary uppercase tracking-widest shadow-sm whitespace-nowrap shadow-secondary/5">Aug 2025 - Jan 2026</span>
              </div>
              <div className="bg-surface-container/60 backdrop-blur-2xl rounded-xl p-stack-md shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <img src="/JurixAI.png" alt="" className="absolute -bottom-8 -right-8 w-64 h-64 object-contain opacity-[0.02] group-hover/card:opacity-[0.06] group-hover/card:scale-110 group-hover/card:-rotate-3 transition-all duration-700 pointer-events-none z-0 grayscale blur-[2px]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-stack-sm mb-stack-sm relative z-10">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Founder's Office</h2>
                    <div className="flex items-center gap-2 text-secondary font-body-md text-body-md">
                      <span className="font-semibold">JurixAI</span>
                    </div>
                  </div>
                  <span className="lg:hidden mt-2 md:mt-0 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 font-label-caps text-[11px] text-secondary uppercase tracking-widest shadow-sm whitespace-nowrap inline-block self-start">Aug 2025 - Jan 2026</span>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-secondary/70 mt-0.5">analytics</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Maintained engagement dashboards for beta users, compiling regular performance reports that assisted the founders in executing a targeted UI/UX redesign.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-secondary/70 mt-0.5">terminal</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Executed data processing operations using Python and SQL, formatting and cleaning 50+ years of raw legal data to maintain the quality of the core RAG pipeline.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-secondary/70 mt-0.5">fact_check</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Supported platform quality assurance by conducting routine “Ground Truth” audits on AI summaries and verifying logs for document security.</p>
                  </li>
                </ul>
                <div className="mt-stack-sm pt-stack-sm border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                  <span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-[11px] font-label-caps text-secondary tracking-wide uppercase">Python</span>
                  <span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-[11px] font-label-caps text-secondary tracking-wide uppercase">SQL</span>
                  <span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-[11px] font-label-caps text-secondary tracking-wide uppercase">RAG Pipelines</span>
                  <span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-[11px] font-label-caps text-secondary tracking-wide uppercase">QA</span>
                  <span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-[11px] font-label-caps text-secondary tracking-wide uppercase">UI/UX Analytics</span>
                </div>
              </div>
            </div>

            {/*  Experience 3: Fractal Analytics  */}
            <div className="relative pl-8 md:pl-stack-md group">
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-white/10 p-[2px]">
                <img src="/Fractal%20Analytics.png" alt="Fractal Analytics" className="w-full h-full object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="material-symbols-outlined text-[16px] text-tertiary hidden" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              </div>
              <div className="hidden lg:flex absolute -left-[160px] top-2 w-[120px] justify-end">
                <span className="px-3 py-1 rounded-full border border-tertiary/20 bg-tertiary/10 font-label-caps text-[11px] text-tertiary uppercase tracking-widest shadow-sm whitespace-nowrap shadow-tertiary/5">May 2025 - Jul 2025</span>
              </div>
              <div className="bg-surface-container/60 backdrop-blur-2xl rounded-xl p-stack-md shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <img src="/Fractal%20Analytics.png" alt="" className="absolute -bottom-8 -right-8 w-64 h-64 object-contain opacity-[0.02] group-hover/card:opacity-[0.06] group-hover/card:scale-110 group-hover/card:-rotate-3 transition-all duration-700 pointer-events-none z-0 grayscale blur-[2px]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-stack-sm mb-stack-sm relative z-10">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Project Intern</h2>
                    <div className="flex items-center gap-2 text-tertiary font-body-md text-body-md">
                      <span className="font-semibold">Fractal Analytics</span>
                    </div>
                  </div>
                  <span className="lg:hidden mt-2 md:mt-0 px-3 py-1 rounded-full border border-tertiary/20 bg-tertiary/10 font-label-caps text-[11px] text-tertiary uppercase tracking-widest shadow-sm whitespace-nowrap inline-block self-start">May 2025 - Jul 2025</span>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-tertiary/70 mt-0.5">query_stats</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Optimized data retrieval by executing SQL queries on 100K+ rows, reducing reporting turnaround time (TAT) by 30%.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-tertiary/70 mt-0.5">dashboard</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Developed 10+ Power BI dashboards for a North American beverage client, tracking 50+ KPIs to identify growth drivers across regional outlets.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-tertiary/70 mt-0.5">table_view</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Automated Excel dashboards using Pivot Tables and LOOKUPs to visualize multidimensional business metrics and streamline reporting.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-tertiary/70 mt-0.5">problem</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Conducted (RCA) on 50+ business queries, providing recommendations that drove sales increase in target markets.</p>
                  </li>
                </ul>
                <div className="mt-stack-sm pt-stack-sm border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                  <span className="px-3 py-1 rounded bg-tertiary/10 border border-tertiary/20 text-[11px] font-label-caps text-tertiary tracking-wide uppercase">SQL</span>
                  <span className="px-3 py-1 rounded bg-tertiary/10 border border-tertiary/20 text-[11px] font-label-caps text-tertiary tracking-wide uppercase">Power BI</span>
                  <span className="px-3 py-1 rounded bg-tertiary/10 border border-tertiary/20 text-[11px] font-label-caps text-tertiary tracking-wide uppercase">Advanced Excel</span>
                  <span className="px-3 py-1 rounded bg-tertiary/10 border border-tertiary/20 text-[11px] font-label-caps text-tertiary tracking-wide uppercase">Data Analytics</span>
                  <span className="px-3 py-1 rounded bg-tertiary/10 border border-tertiary/20 text-[11px] font-label-caps text-tertiary tracking-wide uppercase">RCA</span>
                </div>
              </div>
            </div>

            {/*  Experience 4: ISRO  */}
            <div className="relative pl-8 md:pl-stack-md group">
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-white/10 p-[2px]">
                <img src="/ISRO.jpg" alt="ISRO" className="w-full h-full object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant hidden" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
              </div>
              <div className="hidden lg:flex absolute -left-[160px] top-2 w-[120px] justify-end">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest shadow-sm whitespace-nowrap">Jul 2024 - Aug 2024</span>
              </div>
              <div className="bg-surface-container/60 backdrop-blur-2xl rounded-xl p-stack-md shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <img src="/ISRO.jpg" alt="" className="absolute -bottom-8 -right-8 w-64 h-64 object-contain opacity-[0.02] group-hover/card:opacity-[0.06] group-hover/card:scale-110 group-hover/card:-rotate-3 transition-all duration-700 pointer-events-none z-0 grayscale blur-[2px]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-stack-sm mb-stack-sm relative z-10">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Research Intern</h2>
                    <div className="flex items-center gap-2 text-on-surface font-body-md text-body-md">
                      <span className="font-semibold">Indian Space Research Organisation (ISRO)</span>
                    </div>
                  </div>
                  <span className="lg:hidden mt-2 md:mt-0 px-3 py-1 rounded-full border border-white/10 bg-white/5 font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest shadow-sm whitespace-nowrap inline-block self-start">Jul 2024 - Aug 2024</span>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant mt-0.5">design_services</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Design and analysis of 1.5m diameter head expander for 29 ton Shaker System.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant mt-0.5">precision_manufacturing</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Objective is to reduce moving mass while ensuring high stiffness and load capacity for spacecraft testing.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant mt-0.5">view_in_ar</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Performed 3D modelling and FEM analysis in Siemens NX 12.0.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant mt-0.5">verified</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Achieved first natural frequency of 460 Hz and maximum stress of 13.55 MPa, confirming design safety.</p>
                  </li>
                </ul>
                <div className="mt-stack-sm pt-stack-sm border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-label-caps text-on-surface tracking-wide uppercase">Siemens NX</span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-label-caps text-on-surface tracking-wide uppercase">FEM Analysis</span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-label-caps text-on-surface tracking-wide uppercase">3D Modelling</span>
                </div>
              </div>
            </div>

            {/*  Experience 5: ProCapitas  */}
            <div className="relative pl-8 md:pl-stack-md group">
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-white/10 p-[2px]">
                <img src="/ProCapitas.png" alt="ProCapitas" className="w-full h-full object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="material-symbols-outlined text-[16px] text-primary hidden" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              </div>
              <div className="hidden lg:flex absolute -left-[160px] top-2 w-[120px] justify-end">
                <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 font-label-caps text-[11px] text-primary uppercase tracking-widest shadow-sm whitespace-nowrap shadow-primary/5">May 2024 - Jul 2024</span>
              </div>
              <div className="bg-surface-container/60 backdrop-blur-2xl rounded-xl p-stack-md shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <img src="/ProCapitas.png" alt="" className="absolute -bottom-8 -right-8 w-64 h-64 object-contain opacity-[0.02] group-hover/card:opacity-[0.06] group-hover/card:scale-110 group-hover/card:-rotate-3 transition-all duration-700 pointer-events-none z-0 grayscale blur-[2px]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-stack-sm mb-stack-sm relative z-10">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Investment Banking Intern</h2>
                    <div className="flex items-center gap-2 text-primary font-body-md text-body-md">
                      <span className="font-semibold">ProCapitas</span>
                      <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                      <span>Delhi</span>
                    </div>
                  </div>
                  <span className="lg:hidden mt-2 md:mt-0 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 font-label-caps text-[11px] text-primary uppercase tracking-widest shadow-sm whitespace-nowrap inline-block self-start">May 2024 - Jul 2024</span>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-primary/70 mt-0.5">analytics</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Performed financial analysis and built DCF &amp; M&amp;A models in Excel, including FCF forecasting, WACC calculation and terminal value estimation for valuation of listed companies.</p>
                  </li>
                </ul>
                <div className="mt-stack-sm pt-stack-sm border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">Financial Modeling</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">Excel</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">DCF Valuation</span>
                  <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[11px] font-label-caps text-primary tracking-wide uppercase">M&amp;A</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
