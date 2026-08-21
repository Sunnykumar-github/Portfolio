import React from 'react';

const skillGroups = [
  {
    id: 'data',
    label: 'Languages & Data',
    icon: 'database',
    color: 'primary',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
      { name: 'BigQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics & BI',
    icon: 'analytics',
    color: 'tertiary',
    skills: [
      { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'Tableau', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png' },
      { name: 'Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
      { name: 'Looker', logo: 'https://cdn.worldvectorlogo.com/logos/looker-1.svg' },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    icon: 'account_tree',
    color: 'secondary',
    skills: [
      { name: 'PySpark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
      { name: 'Supabase', logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
      { name: 'n8n', logo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy & Execution',
    icon: 'psychology',
    color: 'on-surface',
    skills: [
      { name: 'A/B Testing', emoji: '🧪' },
      { name: 'Predictive Modeling', emoji: '📈' },
      { name: 'Growth Analytics', emoji: '🚀' },
      { name: 'Product Strategy', emoji: '🧭' },
      { name: 'Market Research', emoji: '🔍' },
      { name: 'Stakeholder Management', emoji: '🤝' },
    ],
  },
  {
    id: 'languages',
    label: 'Spoken Languages',
    icon: 'translate',
    color: 'primary',
    skills: [
      { name: 'English', level: 'Advanced', flag: '🇬🇧' },
      { name: 'Hindi', level: 'Advanced', flag: '🇮🇳' },
      { name: 'Sanskrit', level: 'Beginner', flag: '🕉️' },
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills">
      <div className="flex flex-col w-full">
        {/* Skills Header Section */}
        <section className="w-full bg-surface border-b border-outline-variant/20">
          {/* Banner image */}
          <div className="relative w-full h-56 md:h-72 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80"
              alt="Tech skills background"
              className="w-full h-full object-cover object-center"
              style={{ opacity: 0.45 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/50 to-surface pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-label-caps text-label-caps text-tertiary tracking-[0.3em] uppercase bg-black/30 px-6 py-2 rounded-full border border-tertiary/20 backdrop-blur-md text-sm">
                Technical Arsenal
              </span>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-12">
            <div className="flex flex-col items-start gap-stack-sm max-w-3xl">
              <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Expertise</p>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Skills &amp; Capabilities</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">A comprehensive overview of technical proficiencies across data engineering, analytics, strategic execution, and languages.</p>
            </div>
          </div>
        </section>

        {/* Skills Visualization Grid */}
        <section data-aos="fade-up" className="w-full bg-surface-container py-24 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="lines" patternUnits="userSpaceOnUse" width="40" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" className="text-primary" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect fill="url(#lines)" height="100%" width="100%" />
              <circle className="text-secondary blur-[120px] opacity-20 animate-pulse" cx="10%" cy="10%" fill="currentColor" r="250" />
              <circle className="text-tertiary-fixed blur-[130px] opacity-30 animate-pulse" cx="90%" cy="80%" fill="currentColor" r="200" style={{ animationDelay: '2s' }} />
            </svg>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
            <div className="flex flex-col gap-8 lg:gap-10">
              {skillGroups.map((group) => (
                <div key={group.id} data-aos="fade-up" className="flex flex-col gap-6 p-8 lg:p-10 bg-surface-container-highest/40 rounded-2xl border border-white/5 backdrop-blur-sm w-full">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${group.color}/10 flex items-center justify-center border border-${group.color}/20`}>
                      <span className={`material-symbols-outlined text-${group.color} text-[24px]`}>{group.icon}</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-md text-on-surface">{group.label}</h3>
                  </div>

                  {/* Language badges */}
                  {group.id === 'languages' ? (
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((s) => (
                        <span key={s.name} className="px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-on-surface font-body-md flex items-center gap-2.5 text-sm">
                          <span className="text-lg">{s.flag}</span>
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-[10px] font-bold text-primary tracking-wider uppercase ml-1">{s.level}</span>
                        </span>
                      ))}
                    </div>
                  ) : group.id === 'strategy' ? (
                    /* Strategy: emoji pills */
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((s) => (
                        <span key={s.name} className="px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-on-surface font-body-md flex items-center gap-2 text-sm hover:border-on-surface/20 hover:bg-surface-container transition-colors duration-200">
                          <span className="text-base">{s.emoji}</span>
                          {s.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    /* Tech skills: logo pills */
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((s) => (
                        <span key={s.name} className="px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-on-surface font-body-md flex items-center gap-2.5 text-sm hover:border-white/20 hover:bg-surface-container transition-all duration-200 group/pill">
                          <img
                            src={s.logo}
                            alt={s.name}
                            className="w-5 h-5 object-contain group-hover/pill:scale-110 transition-transform duration-200"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          {s.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
