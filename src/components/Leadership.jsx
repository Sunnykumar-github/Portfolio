import React from 'react';

const roles = [
  {
    id: 1,
    period: '2025 – 2026',
    role: 'President',
    org: 'Team Aveon Racing',
    orgColor: 'text-tertiary',
    periodColor: 'text-tertiary bg-tertiary/10 border-tertiary/20',
    accentFrom: 'from-tertiary/30',
    accentTo: 'to-primary/30',
    icon: 'engineering',
    iconColor: 'text-tertiary',
    description: [
      'Led the team to E-BAJA 2024-25 successfully.',
      'Successfully organized ChargeX’24, a 3-day college flagship event concerning automobile industry.',
      'Arranged sponsorship amount of Rupees 4 lakh+ from multiple companies for the season.',
      'Secured 1st Rank in E-BAJA, 2025 for "Technology Innovation"'
    ],
    highlights: ['Team of 40+', 'Formula Student', 'Motorsport'],
    tags: ['Project Management', 'Engineering Leadership', 'Automotive Design', 'Cross-functional Teams'],
    img: '/Team%20Aveon%20Racing.jpg',
    number: '01',
  },
  {
    id: 2,
    period: '2020 – 2023',
    role: 'President',
    org: 'Village Micro-Finance Gram Samiti',
    orgColor: 'text-secondary',
    periodColor: 'text-secondary bg-secondary/10 border-secondary/20',
    accentFrom: 'from-secondary/30',
    accentTo: 'to-primary/30',
    icon: 'groups',
    iconColor: 'text-secondary',
    description: [
      'Led a village-level banking initiative, growing membership from 10 to 40 through community onboarding.',
      'Managed end-to-end operations, increasing the capital pool by 50% and maintaining financial records.'
    ],
    highlights: ['50+ Households', 'Ramgarh, JH', 'Social Impact'],
    tags: ['Micro-finance', 'Community Leadership', 'Financial Literacy', 'Social Impact'],
    img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80',
    number: '02',
  },
  {
    id: 3,
    period: '2019 – 2020',
    role: 'Head Boy',
    org: 'DAV Public School',
    orgColor: 'text-primary',
    periodColor: 'text-primary bg-primary/10 border-primary/20',
    accentFrom: 'from-primary/30',
    accentTo: 'to-secondary/30',
    icon: 'school',
    iconColor: 'text-primary',
    description: [
      'Led the core student council, fostering discipline and orchestrating major intra-school events.',
      'Represented a student body of over 1,000 students in administrative discussions, championing student welfare.',
      'Spearheaded annual school functions and community service drives, ensuring seamless cross-department coordination.'
    ],
    highlights: ['Student Council', 'Event Management', '1000+ Students'],
    tags: ['Public Speaking', 'Team Coordination', 'Administrative Leadership'],
    img: '/DAV.png',
    number: '03',
  },
];

export default function Leadership() {
  return (
    <div id="leadership">
      <div className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tertiary/[0.03] to-transparent pointer-events-none" />

        <div className="px-margin-mobile lg:px-margin-desktop py-24 max-w-container-max mx-auto w-full">
          {/* Header */}
          <div data-aos="fade-up" className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-tertiary block" />
              <span className="text-[11px] font-bold text-tertiary uppercase tracking-[0.2em]">Leadership &amp; Impact</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-tight mb-4">
              Driving Impact,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-primary">
                One Role at a Time.
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              A chronicle of leadership and responsibility — bridging high-performance engineering with grassroots community empowerment.
            </p>
          </div>

          {/* Stacked role cards */}
          <div className="flex flex-col gap-8">
            {roles.map((r, i) => (
              <div
                key={r.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`group relative flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-white/[0.15]
                  ${r.featured
                    ? 'border-primary/20 bg-gradient-to-br from-surface-container-high/80 to-surface-container/80'
                    : 'border-white/[0.07] bg-surface-container/70'
                  }
                  backdrop-blur-2xl`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${r.accentFrom} ${r.accentTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Number */}
                <div className="absolute top-6 right-6 text-7xl font-extrabold text-white/[0.04] leading-none select-none pointer-events-none z-0">
                  {r.number}
                </div>

                {/* Visual panel */}
                <div className={`lg:w-64 xl:w-72 shrink-0 flex items-center justify-center bg-gradient-to-br ${r.accentFrom} ${r.accentTo} h-48 lg:h-auto relative overflow-hidden group/panel`}>
                  {r.img ? (
                    <>
                      <img src={r.img} alt={r.org} className="absolute inset-0 w-full h-full object-cover group-hover/panel:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none" />
                      <div className="absolute bottom-6 z-10 w-full flex justify-center">
                        <span className={`text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md shadow-lg`}>
                          {r.period}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center justify-center gap-4 z-10 w-full h-full p-6">
                        <div className={`w-20 h-20 rounded-2xl bg-surface-container/70 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                          <span className={`material-symbols-outlined text-[40px] ${r.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{r.icon}</span>
                        </div>
                        <span className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full border ${r.periodColor} backdrop-blur-md shadow-sm`}>
                          {r.period}
                        </span>
                      </div>
                      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent to-surface-container/60`} />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between z-10 relative">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-on-surface leading-tight mb-1">{r.role}</h3>
                    <h4 className={`text-lg font-semibold ${r.orgColor} mb-4`}>{r.org}</h4>

                    {Array.isArray(r.description) ? (
                      <ul className="list-disc list-outside ml-4 mb-6 text-base text-on-surface-variant space-y-2">
                        {r.description.map((item, index) => (
                          <li key={index} className="leading-relaxed pl-1">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-base text-on-surface-variant leading-relaxed mb-6">{r.description}</p>
                    )}

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {r.highlights.map(h => (
                        <span key={h} className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${r.periodColor}`}>{h}</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                    {r.tags.map(t => (
                      <span key={t} className="text-[11px] font-medium bg-surface px-3 py-1.5 rounded-md text-on-surface-variant border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
