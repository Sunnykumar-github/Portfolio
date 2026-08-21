import React from 'react';

export default function Certifications() {
  return (
    <div id="certifications">
      <div className="flex flex-col w-full">
        {/*  Header Section  */}
        <section data-aos="fade-up" className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-stack-lg relative overflow-hidden flex flex-col justify-center min-h-[40vh]">
          <div className="absolute inset-0 pointer-events-none opacity-30 z-0 flex items-center justify-end overflow-hidden">
            <svg className="text-tertiary-fixed-dim/20 translate-x-1/4 -translate-y-1/4" fill="none" height="600" viewBox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="299" stroke="currentColor" strokeDasharray="10 20" strokeWidth="2" />
              <circle cx="300" cy="300" r="200" stroke="currentColor" stroke-opacity="0.5" strokeWidth="1" />
              <path d="M100 300 H500 M300 100 V500" stroke="currentColor" stroke-opacity="0.3" strokeWidth="1" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Verified Credentials</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Continuous<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Learning</span> Path</h1>
            A chronological overview of specialized professional certifications and technical skill acquisitions.
          </div>
        </section>

        {/*  Technical Certifications Grid  */}
        <section data-aos="fade-up" className="w-full py-stack-lg relative">
          <div className="absolute inset-0 bg-surface z-0"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-4 mb-stack-md">
              <span className="material-symbols-outlined text-[40px] text-tertiary">workspace_premium</span>
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/*  Cloud Cert  */}
              <div className="bg-surface-container-high rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[80px]">cloud_done</span>
                </div>
                <div className="w-16 h-16 shrink-0 rounded-lg bg-surface flex items-center justify-center shadow-inner relative z-10">
                  <img className="w-10 h-10 object-contain opacity-80 mix-blend-screen" data-alt="AWS Certified Solutions Architect logo icon minimal modern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-oJQGxGs5mal_LvBwwC8j98Fpl8lTzrsfo9vdPD0RbMpWJSh7Sd-Glb4N_8fEM5rm2RvUzEeauf57jTNYZ3MPiqC7fCBbBKoE82O5v2Wj32whKSTfZxSCQMNQwbej06V5NPu43QYroEq97PELk0iO6GBxmiSngqnsaaKH6Q2g6tql3yNyZtpwHqK5p3giRZ5ha8t-sjHC3Mxc3MgQDzDFFUa0ivItyiYxC1TC_oLmQfEO5S4ZEQK" />
                </div>
                <div className="relative z-10 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight">AWS Certified Solutions Architect<br /><span className="text-on-surface-variant font-body-md text-body-md font-normal">Associate</span></h3>
                    <span className="px-2 py-1 bg-surface rounded text-label-caps font-label-caps text-on-surface-variant shadow-sm">2023</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Demonstrates knowledge of how to architect and deploy secure and robust applications on AWS technologies.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-surface text-on-surface font-label-caps text-label-caps text-[10px]">Cloud Architecture</span>
                    <span className="px-2 py-1 rounded bg-surface text-on-surface font-label-caps text-label-caps text-[10px]">Security</span>
                    <span className="px-2 py-1 rounded bg-surface text-on-surface font-label-caps text-label-caps text-[10px]">Compute</span>
                  </div>
                  <a className="inline-flex items-center gap-1 text-primary hover:text-primary-fixed transition-colors font-label-caps text-label-caps" href="#">
                    Verify Credential <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
              {/*  ML Cert  */}
              <div className="bg-surface-container-high rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[80px]">psychology</span>
                </div>
                <div className="w-16 h-16 shrink-0 rounded-lg bg-surface flex items-center justify-center shadow-inner relative z-10">
                  <img className="w-10 h-10 object-contain opacity-80 mix-blend-screen" data-alt="DeepLearning.AI logo icon minimal modern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Jpq57SLqMoMdu2tM5JB_-FYK-fAB8o6LqXLi-bVOig0YCrDGDsPQ_Y4rB_MoWdOQSJmtxJ2fGdJMXrG28rDzUhREvIKvZ15ZnmgOa2t1yijLB6ADx7prGgQ8XWIbfX_9UfyDNMcOUiT8s-q1ApQF2QO7ABGegOF2pT4SLqjRndipoKKUyCf9YarjAvtdwV-SzE9PjUKl8j3egTo2phmsUuxb-Dnk3ZDsepx4PtOisDMQqHkrYiNm" />
                </div>
                <div className="relative z-10 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight">Deep Learning Specialization<br /><span className="text-on-surface-variant font-body-md text-body-md font-normal">Coursera / DeepLearning.AI</span></h3>
                    <span className="px-2 py-1 bg-surface rounded text-label-caps font-label-caps text-on-surface-variant shadow-sm">2022</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Comprehensive five-course program covering neural networks, hyperparameter tuning, convolutional networks, and sequence models.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-surface text-on-surface font-label-caps text-label-caps text-[10px]">Neural Networks</span>
                    <span className="px-2 py-1 rounded bg-surface text-on-surface font-label-caps text-label-caps text-[10px]">TensorFlow</span>
                    <span className="px-2 py-1 rounded bg-surface text-on-surface font-label-caps text-label-caps text-[10px]">CNNs &amp; RNNs</span>
                  </div>
                  <a className="inline-flex items-center gap-1 text-primary hover:text-primary-fixed transition-colors font-label-caps text-label-caps" href="#">
                    Verify Credential <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
