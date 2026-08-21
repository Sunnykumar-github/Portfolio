import React, { useState } from 'react';

// Array updated to use arrays for description items
const projects = [
  {
    id: 1,
    category: 'Data Engineering',
    categoryColor: 'text-primary bg-primary/10 border border-primary/20',
    icon: 'schema',
    iconColor: 'text-tertiary',
    title: 'Automated Supply Chain Analytics',
    subtitle: 'ETL Pipeline & Supabase DB',
    description: [
      'Engineered an automated workflow using n8n to extract CSV data from email attachments, transform formats, and ingest sales records into a PostgreSQL database hosted on Supabase.',
      'Utilized Quadratic to query the database via SQL, leveraging Python for data cleaning, date standardization, and star schema modeling.',
      'Calculated and visualized critical domain metrics including OTIF, Line Fill Rate, and Volume Fill Rate.'
    ],
    highlights: ['Supabase DB', 'Python / SQL', 'OTIF & KPI Tracking'],
    tags: ['ETL Pipeline', 'Data Modeling', 'Supply Chain Analytics', 'Python'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    accentFrom: 'from-primary/30',
    accentTo: 'to-tertiary/30',
    number: '01',
  },
  {
    id: 2,
    category: 'Data Analytics',
    categoryColor: 'text-secondary bg-secondary/10 border border-secondary/20',
    icon: 'account_balance',
    iconColor: 'text-secondary',
    title: 'Financial Bank Loan Analysis',
    subtitle: 'BI Dashboards & Risk Assessment',
    description: [
      'Developed Bank Loan Analysis pipeline using SQL to clean and process 38,000+ records.',
      'Engineered advanced DAX measures to calculate financial KPIs, MoM growth, and loan risk classifications.',
      'Built interactive Power BI dashboards to visualize regional trends and optimize lending strategies.'
    ],
    highlights: ['38,000+ Records', 'Power BI / DAX', 'MoM Growth'],
    tags: ['SQL', 'Data Analytics', 'Finance', 'Dashboarding'],
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    accentFrom: 'from-secondary/30',
    accentTo: 'to-primary/30',
    number: '02',
  },
  {
    id: 3,
    category: 'Operations Analytics',
    categoryColor: 'text-tertiary bg-tertiary/10 border border-tertiary/20',
    icon: 'electric_car',
    iconColor: 'text-tertiary',
    title: 'ElectricPe Sales Dashboard',
    subtitle: 'Funnel Performance & Bottleneck Analysis',
    description: [
      'Developed an interactive Excel dashboard using Pivot Tables to analyze a 1,000-lead sales funnel.',
      'Identified a 0% \'Cold\' lead conversion rate and a 4.53-day \'Booking-to-Delivery\' TAT bottleneck.',
      'Calculated a -53.50% NPS, performed root-cause analysis on 271 cancellations, and presented actionable findings.'
    ],
    highlights: ['1,000-lead Funnel', 'TAT Bottleneck Fix', 'Excel Pivot Tables'],
    tags: ['Sales Ops', 'Root Cause Analysis', 'Excel', 'Reporting'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    accentFrom: 'from-tertiary/30',
    accentTo: 'to-secondary/30',
    number: '03',
  },
  {
    id: 4,
    category: 'Analytical Modeling',
    categoryColor: 'text-primary bg-primary/10 border border-primary/20',
    icon: 'scatter_plot',
    iconColor: 'text-primary',
    title: '2D Point Source Diffusion',
    subtitle: 'FDM Simulation in Python',
    description: [
      'Derived exact analytical solutions for 2D transient diffusion using Fourier Transforms.',
      'Developed a Python simulation using Finite Difference Method (FDM) to solve partial differential equations for mass transfer.',
      'Validated numerical accuracy against analytical models and analyzed system dynamics.'
    ],
    highlights: ['Fourier Transforms', 'FDM Simulation', 'Python PDEs'],
    tags: ['Python', 'Mathematical Modeling', 'Numerical Methods'],
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    accentFrom: 'from-primary/30',
    accentTo: 'to-tertiary/30',
    number: '04',
  },
  {
    id: 5,
    category: 'Data Architecture',
    categoryColor: 'text-secondary bg-secondary/10 border border-secondary/20',
    icon: 'database',
    iconColor: 'text-secondary',
    title: 'Medallion Data Warehouse',
    subtitle: 'SQL Server ETL Pipeline Design',
    description: [
      'Developed an end-to-end data warehouse using Medallion architecture (Bronze, Silver, Gold) and modeled data with a Star Schema for efficient querying.',
      'Wrote and optimized SQL Server queries for data cleaning, transformation, and aggregation.',
      'Created data flow diagrams, maintained Notion documentation, and version-controlled via GitHub.'
    ],
    highlights: ['Star Schema', 'SQL Server ETL', 'Medallion Architecture'],
    tags: ['Data Warehouse', 'SQL Server', 'Data Modeling', 'ETL'],
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
    accentFrom: 'from-secondary/30',
    accentTo: 'to-primary/30',
    number: '05',
  },
  {
    id: 6,
    category: 'Marketing Intelligence',
    categoryColor: 'text-tertiary bg-tertiary/10 border border-tertiary/20',
    icon: 'campaign',
    iconColor: 'text-tertiary',
    title: 'Marketing Analytics Dashboard',
    subtitle: 'Customer Behavior BI Dashboards',
    description: [
      'Designed 4 interactive dashboards (Overview, Conversion Details, Social Media, Customer Reviews) in Power BI to analyze marketing performance and customer behavior.',
      'Wrote custom DAX measures for complex KPIs.',
      'Delivered insights identifying peak conversion months and product-specific improvement opportunities.'
    ],
    highlights: ['4 Power BI Views', 'Complex DAX KPIs', 'Conversion Trends'],
    tags: ['Power BI', 'Marketing Analytics', 'DAX', 'Customer Behavior'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    accentFrom: 'from-tertiary/30',
    accentTo: 'to-secondary/30',
    number: '06',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="projects">
      <div className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.03] to-transparent pointer-events-none" />

        <div className="px-margin-mobile lg:px-margin-desktop py-24 max-w-container-max mx-auto w-full">
          {/* Header */}
          <div data-aos="fade-up" className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Selected Work</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-tight mb-4">
              Projects &amp;{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary">
                Initiatives.
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              A curated selection of entrepreneurial ventures, data-driven solutions, and workflow automation systems built for scale and impact.
            </p>
          </div>

          {/* Stacked project rows */}
          <div className="flex flex-col gap-8">
            {projects.map((p, i) => (
              <div
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border transition-all duration-500 shadow-lg
                  ${hovered === p.id
                    ? 'border-white/[0.15] shadow-2xl -translate-y-1'
                    : 'border-white/[0.07] hover:-translate-y-1'
                  }
                  bg-surface-container/70 backdrop-blur-2xl`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.accentFrom} ${p.accentTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Number */}
                <div className="absolute top-6 right-6 text-7xl font-extrabold text-white/[0.04] leading-none select-none pointer-events-none z-0">
                  {p.number}
                </div>

                {/* Image panel */}
                {p.img ? (
                  <div className="lg:w-80 xl:w-96 shrink-0 h-56 lg:h-auto relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/0 to-surface-container/80 lg:from-transparent lg:to-surface-container pointer-events-none" />
                    <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${p.categoryColor}`}>
                      {p.category}
                    </span>
                  </div>
                ) : (
                  <div className={`lg:w-80 xl:w-96 shrink-0 h-56 lg:h-auto flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${p.accentFrom} ${p.accentTo}`}>
                    <span className={`material-symbols-outlined text-[80px] opacity-30 ${p.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container pointer-events-none" />
                    <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${p.categoryColor}`}>
                      {p.category}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between z-10 relative">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-white/10 shadow-sm ${p.iconColor}`}>
                        <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-on-surface leading-tight">{p.title}</h3>
                        <p className="text-sm text-on-surface-variant font-medium mt-1">{p.subtitle}</p>
                      </div>
                    </div>

                    <ul className="text-[14.5px] text-on-surface-variant leading-relaxed mb-6 space-y-2 list-none pl-1">
                      {p.description.map((line, idx) => (
                        <li key={idx} className="relative pl-5">
                          <span className="absolute left-0 top-2 w-[4px] h-[4px] rounded-full bg-primary/60"></span>
                          {line}
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.highlights.map(h => (
                        <span key={h} className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${p.categoryColor}`}>{h}</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                    {p.tags.map(t => (
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
