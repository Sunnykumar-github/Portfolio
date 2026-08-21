import React from 'react';

const educationData = [
  {
    degree: 'B.Tech, Chemical Engineering',
    institution: 'Birla Institute of Technology, Mesra',
    period: '2022 – 2026',
    score: '7.37',
    scoreLabel: 'CGPA',
    scoreMax: 10,
    color: 'primary',
    glowColor: 'rgba(100,180,255,0.25)',
    accentFrom: 'from-primary/60',
    accentTo: 'to-tertiary/60',
    icon: 'school',
    image: '/BIT%20Mesra.png',
    semesters: [
      { term: "Semester I", courses: ["Programming for Problem Solving", "Programming for Problem Solving Lab", "Basic Electrical Engineering", "Mathematics - I", "NSS", "Workshop Practice", "Physics", "Physics Lab", "Biological Science for Engineers", "Communication Skills I"] },
      { term: "Semester II", courses: ["Environmental Science", "Chemistry", "Chemistry Lab", "Basics of Electronics & Communication", "Electronics & Communication Lab", "Mathematics - II", "NSS", "Basics of Mechanical Engineering", "Engineering Graphics"] },
      { term: "Semester III", courses: ["Thermodynamics", "NSS", "Fluid Mechanics", "Chemical Process Calculations", "Heat Transfer Operations", "Numerical Methods", "UHV2: Understanding Harmony", "Numerical Methods Laboratory"] },
      { term: "Semester IV", courses: ["NSS", "MOOC: Education for Sustainable Development", "Mechanical Operations", "Mass Transfer Operation - I", "Chemical Reaction Engineering - I", "Material Science & Engineering", "Electrical Engineering Lab", "Chemical Engineering Lab -I", "Waste Management"] },
      { term: "Semester V", courses: ["MOOC: Psychology of Learning", "Mass Transfer Operation-II", "Chemical Reaction Engineering-II", "Project Engineering & Economics", "Chemical Process Technology", "Fluid Solid Operation", "Computer Aided Process Engineering Lab", "Chemical Engineering Lab -II", "Communications Skills - II"] },
      { term: "Semester VI", courses: ["MOOC: Conservation Economics", "Transport Phenomena", "Process Control & Instrumentation", "Petrochemicals Technology", "Computational Fluid Dynamics", "Summer Training", "Design Lab", "Chemical Engineering Lab - III"] },
      { term: "Semester VII", courses: ["MOOC: Wild Life Ecology", "Process Modeling, Simulation & Optimization", "Chemical Process Intensification", "Polymer Composite", "Constitution of India", "Minor Project", "Process Control & Instrumentation Lab", "Plant Design"] },
      { term: "Semester VIII", courses: ["Industry Internship: Business Development Associate at Urban Company"] }
    ],
    context: 'Specializing at the intersection of chemical engineering and data-driven solutions — from simulation to deployment.',
    badge: 'In Progress',
    badgeColor: 'text-primary bg-primary/10',
    highlight: true,
  },
  {
    degree: 'BS in Data Science and Applications',
    institution: 'Indian Institute of Technology Madras',
    period: 'Dec 2023',
    score: '7.88',
    scoreLabel: 'CGPA',
    scoreMax: 10,
    color: 'secondary',
    glowColor: 'rgba(173,198,255,0.2)',
    accentFrom: 'from-secondary/60',
    accentTo: 'to-tertiary/60',
    icon: 'data_object',
    image: '/IIT%20Madras.png',
    coursework: ['Computational Thinking', 'Programming in Python', 'English I & II', 'Mathematics for Data Science I & II', 'Statistics for Data Science I & II', 'DSA'],
    context: 'Successfully completed the Foundational Level in Programming and Data Science.',
    badge: 'Foundational Level',
    badgeColor: 'text-secondary bg-secondary/10',
    highlight: true,
  },
  {
    degree: 'Senior School Certificate Examination - Class XII, CBSE',
    institution: 'DAV Public School',
    period: '2020 – 2022',
    score: '95.4',
    scoreLabel: 'Percentage',
    scoreMax: 100,
    color: 'tertiary',
    glowColor: 'rgba(79,219,200,0.2)',
    accentFrom: 'from-tertiary/60',
    accentTo: 'to-secondary/60',
    icon: 'import_contacts',
    image: '/DAV.png',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Informatics Practices'],
    context: 'Graduated with distinction. Strong foundation in sciences with early exposure to programming.',
  },
  {
    degree: 'Secondary School Examination - Class X, CBSE',
    institution: 'DAV Public School',
    period: '2018 – 2020',
    score: '96.0',
    scoreLabel: 'Percentage',
    scoreMax: 100,
    color: 'secondary',
    glowColor: 'rgba(173,198,255,0.2)',
    accentFrom: 'from-secondary/60',
    accentTo: 'to-primary/60',
    icon: 'menu_book',
    image: '/DAV.png',
    coursework: ['Mathematics', 'Science', 'Social Studies', 'Computer Science'],
    context: 'Developed analytical thinking and a curiosity for problem-solving from an early age.',
  },
];

export default function Education() {
  return (
    <div id="education">
      <div className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="60" id="hex" patternUnits="userSpaceOnUse" width="60" viewBox="0 0 100 100">
                <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" className="text-tertiary" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect fill="url(#hex)" height="100%" width="100%" />
            <circle className="text-secondary blur-[130px] opacity-30 animate-pulse" cx="90%" cy="20%" fill="currentColor" r="200" />
            <circle className="text-primary blur-[150px] opacity-20 animate-pulse" cx="10%" cy="90%" fill="currentColor" r="250" style={{ "animationDelay": "3s" }} />
          </svg>
        </div>

        {/* Header */}
        <section data-aos="fade-up" className="relative pt-32 pb-16 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">Academic Journey</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface mb-4 leading-tight">
            Academic{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-tertiary to-secondary">
              Foundation
            </span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            A progressive educational path shaping engineering expertise and analytical precision.
          </p>
        </section>

        {/* Cards */}
        <section className="pb-24 px-margin-mobile lg:px-margin-desktop max-w-3xl mx-auto w-full">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

            <div className="flex flex-col gap-8">
              {educationData.map((edu, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="relative flex gap-8 group"
                >
                  {/* Timeline dot */}
                  <div className="relative shrink-0 flex flex-col items-center" style={{ width: 48 }}>
                    <div
                      className={`w-12 h-12 rounded-full ${edu.image ? 'bg-white p-[2px]' : 'bg-surface-container'} flex items-center justify-center border border-white/10 z-10 transition-all duration-500 group-hover:scale-110 ${edu.image ? '' : `group-hover:border-${edu.color}/50`}`}
                      style={{ boxShadow: `0 0 0 0 ${edu.glowColor}`, transition: 'box-shadow 0.4s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 18px 4px ${edu.glowColor}`)}
                      onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${edu.glowColor}`)}
                    >
                      {edu.image ? (
                        <>
                          <img src={edu.image} alt={edu.institution} className="w-full h-full object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                          <span className={`material-symbols-outlined text-[20px] text-${edu.color} hidden`} style={{ fontVariationSettings: "'FILL' 1" }}>
                            {edu.icon}
                          </span>
                        </>
                      ) : (
                        <span className={`material-symbols-outlined text-[20px] text-${edu.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          {edu.icon}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0 bg-surface-container/60 backdrop-blur-2xl rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-500 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-2xl shadow-lg relative">
                    {/* Top accent line */}
                    <div className={`h-[2px] w-full bg-gradient-to-r ${edu.accentFrom} ${edu.accentTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {edu.image && (
                      <img src={edu.image} alt="" className="absolute -bottom-8 -right-8 w-64 h-64 object-contain opacity-[0.02] group-hover:opacity-[0.06] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 pointer-events-none z-0 grayscale blur-[2px]" />
                    )}

                    <div className="p-6 md:p-8 relative z-10">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            {edu.highlight && (
                              <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${edu.badgeColor}`}>
                                {edu.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-on-surface leading-tight">{edu.degree}</h3>
                          <p className={`text-sm text-${edu.color} font-medium mt-0.5`}>{edu.institution}</p>
                        </div>
                        <span className="text-[11px] font-bold tracking-widest text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded-full border border-white/5 shrink-0">
                          {edu.period}
                        </span>
                      </div>


                      {/* Score block */}
                      {edu.score && (
                        <div className="inline-flex items-center gap-2 mb-6 py-2 px-4 rounded-xl border border-white/[0.04] bg-surface-container-low/40">
                          <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mr-1">{edu.scoreLabel}</span>
                          <span className={`text-xl font-extrabold text-${edu.color} leading-none tracking-tight`}>{edu.score}</span>
                          <span className="text-[12px] font-bold text-on-surface-variant/60">{edu.scoreMax === 10 ? '/ 10.0' : '%'}</span>
                        </div>
                      )}

                      {/* Coursework Accordion For Semesters */}
                      {edu.semesters && (
                        <div className="mb-5">
                          <details className="group [&_summary::-webkit-details-marker]:hidden border border-white/5 rounded-xl bg-surface-container-low/30 backdrop-blur-sm">
                            <summary className="flex items-center justify-between cursor-pointer text-[11px] font-bold tracking-[0.15em] text-on-surface-variant uppercase p-3 outline-none hover:bg-surface-container/50 transition-colors rounded-xl">
                              View Full B.Tech Curriculum
                              <span className="material-symbols-outlined text-[18px] group-open:-rotate-180 transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="flex flex-col gap-5 p-4 border-t border-white/5 bg-surface-container/20 overflow-y-auto max-h-[300px] rounded-b-xl custom-scrollbar" style={{ scrollbarWidth: 'thin' }}>
                              {edu.semesters.map(sem => (
                                <div key={sem.term}>
                                  <span className={`text-[10px] text-${edu.color} font-bold tracking-widest uppercase block mb-2`}>{sem.term}</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {sem.courses.map(c => (
                                      <span key={c} className={`text-[10px] px-2 py-1 rounded-md border border-${edu.color}/20 text-${edu.color} bg-${edu.color}/5 leading-tight shadow-sm`}>
                                        {c}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </details>
                        </div>
                      )}

                      {/* Standard Coursework chips */}
                      {!edu.semesters && edu.coursework && (
                        <div className="mb-5">
                          <p className="text-[10px] font-bold tracking-[0.15em] text-on-surface-variant uppercase mb-2.5">Relevant Coursework</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map(c => (
                              <span
                                key={c}
                                className={`text-[11px] px-2.5 py-1 rounded-md border border-${edu.color}/20 text-${edu.color} bg-${edu.color}/5`}
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Context */}
                      <p className="text-sm text-on-surface-variant italic border-l-2 border-white/10 pl-3 leading-relaxed">
                        {edu.context}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
