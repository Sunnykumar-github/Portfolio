import React, { useState } from 'react';

const achievements = [
    {
        id: 1,
        year: '2018',
        title: 'State Rank 5',
        organization: 'National Science Olympiad (NSO)',
        description: 'Secured 5th Rank in State at the National Science Olympiad 2018.',
        icon: 'emoji_events',
        color: 'primary',
        accentFrom: 'from-primary/30',
        accentTo: 'to-tertiary/30',
        tags: ['Science Olympiad', 'STEM', 'State Rank'],
        highlight: true,
    },
    {
        id: 2,
        year: '2020',
        title: 'State Rank 11',
        organization: 'Hindustan Olympiad (Class X)',
        description: 'Secured 11th Rank at the State Level in Hindustan Olympiad (Class X).',
        icon: 'military_tech',
        color: 'secondary',
        accentFrom: 'from-secondary/30',
        accentTo: 'to-primary/30',
        tags: ['Hindustan Olympiad', 'Academic Excellence', 'State Level'],
        highlight: false,
    }
];

export default function Achievements() {
    const [hovered, setHovered] = useState(null);

    return (
        <div id="achievements">
            <div className="relative w-full overflow-hidden py-stack-lg">
                {/* Ambient SVG Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern height="50" id="plus" patternUnits="userSpaceOnUse" width="50">
                                <path d="M25 20 L25 30 M20 25 L30 25" fill="none" className="text-secondary" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                            </pattern>
                        </defs>
                        <rect fill="url(#plus)" height="100%" width="100%" />
                        <circle className="text-primary blur-[140px] opacity-20 animate-pulse" cx="50%" cy="50%" fill="currentColor" r="220" style={{ "animationDelay": "1.5s" }} />
                        <circle className="text-tertiary blur-[100px] opacity-30 animate-pulse" cx="10%" cy="80%" fill="currentColor" r="150" />
                    </svg>
                </div>

                <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
                    <div data-aos="fade-up" className="mb-stack-md flex flex-col items-center text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-[2px] bg-primary block" />
                            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Recognition</span>
                            <span className="w-12 h-[2px] bg-primary block" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                            Milestones & Achievements
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                        {achievements.map((item, i) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                onMouseEnter={() => setHovered(item.id)}
                                onMouseLeave={() => setHovered(null)}
                                className={`group relative flex flex-col justify-between rounded-xl overflow-hidden border transition-all duration-500 shadow-lg p-5 w-full md:w-[calc(50%-1.5rem)] lg:w-[400px]
                  ${item.highlight
                                        ? 'border-primary/20 bg-gradient-to-br from-surface-container-high/80 to-surface-container/80'
                                        : 'border-white/[0.07] bg-surface-container/70'
                                    }
                  backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 hover:border-white/[0.15]`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}/10 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 ${hovered === item.id ? 'opacity-100' : 'opacity-0'}`} />

                                <div className="flex gap-4">
                                    <div className={`shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-${item.color}/10`}>
                                        <span className={`material-symbols-outlined text-[24px] text-${item.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-lg font-bold text-on-surface leading-tight">{item.title}</h3>
                                            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mt-1">{item.year}</span>
                                        </div>
                                        <h4 className={`text-[13px] font-semibold text-${item.color} mb-2`}>{item.organization}</h4>
                                        <p className="text-[13px] text-on-surface-variant leading-relaxed">{item.description}</p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-bold tracking-widest px-2 py-1 rounded border border-white/[0.05] bg-surface-container text-on-surface-variant opacity-80 uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
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
