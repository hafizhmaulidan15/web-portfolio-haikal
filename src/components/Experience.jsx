import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Briefcase, MapPin, Calendar, TerminalWindow, Trophy, BookOpen, ChalkboardTeacher, DotsNine, CaretDown, Circle, Clock } from '@phosphor-icons/react';

const MotionDiv = m.div;

import { experiences } from '../data/profileData';
import { cn } from '../lib/utils';

const categoryConfig = {
    work: { label: 'Kerja & Magang', icon: Briefcase, color: 'text-primary', border: 'border-primary/30', bg: 'bg-primary/8', subnet: 'VLAN-10', device: 'NOC' },
    trainer: { label: 'Trainer & Mengajar', icon: ChalkboardTeacher, color: 'text-accent-green', border: 'border-accent-green/30', bg: 'bg-accent-green/8', subnet: 'VLAN-20', device: 'LAB' },
    competition: { label: 'Lomba & Prestasi', icon: Trophy, color: 'text-accent-amber', border: 'border-accent-amber/30', bg: 'bg-accent-amber/8', subnet: 'VLAN-30', device: 'TOURNEY' },
    project: { label: 'Proyek Buku', icon: BookOpen, color: 'text-accent-purple', border: 'border-accent-purple/30', bg: 'bg-accent-purple/8', subnet: 'VLAN-40', device: 'PUB' },
};

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null);

    const grouped = experiences.reduce((acc, exp) => {
        const cat = exp.category || 'other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(exp);
        return acc;
    }, {});

    return (
        <section className="py-16 px-6 min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-40 w-96 h-96 bg-accent-purple/4 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent-green/4 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-[1100px] relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/15 bg-primary/5 font-mono text-xs mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    <span className="text-accent-green">~/$</span>
                    <span className="text-text-tertiary">ifconfig -a</span>
                </MotionDiv>

                <div className="mb-10">
                    <h1 className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-[1.1]">
                        Career <span className="text-gradient-cyan">Topology</span>
                    </h1>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mt-2"></div>
                    <p className="text-text-secondary text-xs md:text-sm font-mono mt-3 flex items-center gap-2">
                        <span className="flex items-center gap-1"><Circle size={6} weight="fill" className="text-accent-green" /> active</span>
                        <span className="text-text-muted">|</span>
                        <span className="flex items-center gap-1"><Circle size={6} weight="fill" className="text-text-muted" /> completed</span>
                        <span className="text-text-muted">|</span>
                        <span><DotsNine size={12} className="text-primary" /> {experiences.length} nodes</span>
                    </p>
                </div>

                <div className="space-y-10">
                    {Object.entries(grouped).map(([category, items]) => {
                        const config = categoryConfig[category] || { label: category, icon: DotsNine, color: 'text-text-secondary', border: 'border-white/10', bg: 'bg-white/5', subnet: 'VLAN-99', device: 'NODE' };
                        const CatIcon = config.icon;
                        return (
                            <div key={category}>
                                {/* Subnet Header */}
                                <MotionDiv
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={cn(
                                        "inline-flex items-center gap-3 px-4 py-2 rounded-lg border font-mono text-[11px] mb-5",
                                        config.border, config.bg, config.color
                                    )}
                                >
                                    <CatIcon size={14} weight="duotone" />
                                    <span className="font-semibold">{config.subnet}</span>
                                    <span className="text-text-muted">—</span>
                                    <span>{config.label}</span>
                                    <span className={cn("px-1.5 py-0.5 rounded text-[9px]", config.bg)}>
                                        {items.length} node{items.length > 1 ? 's' : ''}
                                    </span>
                                </MotionDiv>

                                {/* Nodes */}
                                <div className="space-y-3 relative">
                                    {/* Vertical connection line */}
                                    <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"></div>

                                    {items.map((exp, idx) => {
                                        const isSelected = selectedId === `${category}-${idx}`;
                                        const hostname = `${config.device}-${String(idx + 1).padStart(2, '0')}`;
                                        const isActive = exp.date.toLowerCase().includes('present');

                                        const colors = {
                                            primary: { text: 'text-primary', dot: 'bg-primary', line: 'border-primary/30' },
                                            'accent-green': { text: 'text-accent-green', dot: 'bg-accent-green', line: 'border-accent-green/30' },
                                            'accent-amber': { text: 'text-accent-amber', dot: 'bg-accent-amber', line: 'border-accent-amber/30' },
                                            'accent-purple': { text: 'text-accent-purple', dot: 'bg-accent-purple', line: 'border-accent-purple/30' },
                                        };
                                        const c = colors[exp.color] || colors.primary;

                                        return (
                                            <MotionDiv
                                                key={`${category}-${idx}`}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.04 }}
                                                className="relative pl-10"
                                            >
                                                {/* Connection dot */}
                                                <div className={cn(
                                                    "absolute left-[11px] top-5 w-[15px] h-[15px] rounded-full border-[3px] z-10 transition-all duration-300",
                                                    isActive ? `${c.dot} border-white/20 shadow-[0_0_8px]` : `${c.dot}/40 border-white/5`,
                                                    isActive && `${c.dot}/30`
                                                )}></div>

                                                {/* Card */}
                                                <div
                                                    onClick={() => setSelectedId(isSelected ? null : `${category}-${idx}`)}
                                                    className={cn(
                                                        "rounded-xl border bg-surface/40 backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden",
                                                        isSelected
                                                            ? "border-primary/30 bg-primary/5"
                                                            : "border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03]"
                                                    )}
                                                >
                                                    {/* Header */}
                                                    <div className="px-4 py-3 flex items-center gap-3">
                                                        <div className={cn(
                                                            "px-2 py-0.5 rounded text-[9px] font-mono border tracking-wider shrink-0",
                                                            c.text, `border-current/20`, `bg-current/5`
                                                        )}>
                                                            [{hostname}]
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <h3 className={cn("text-sm font-semibold", c.text)}>
                                                                    {exp.title}
                                                                </h3>
                                                                <span className={cn(
                                                                    "w-1.5 h-1.5 rounded-full shrink-0",
                                                                    isActive ? "bg-accent-green animate-pulse" : "bg-text-muted"
                                                                )}></span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-[10px] font-mono text-text-tertiary mt-0.5">
                                                                <span>{exp.company}</span>
                                                                <span className="text-text-muted">·</span>
                                                                <span>{exp.location}</span>
                                                            </div>
                                                        </div>
                                                        <div className={cn(
                                                            "transition-transform duration-300 text-text-muted shrink-0",
                                                            isSelected && "rotate-180"
                                                        )}>
                                                            <CaretDown size={12} />
                                                        </div>
                                                    </div>

                                                    {/* Expandable detail */}
                                                    <div className={cn(
                                                        "grid transition-all duration-300",
                                                        isSelected ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                    )}>
                                                        <div className="overflow-hidden">
                                                            <div className="px-4 pb-4 pt-0 border-t border-white/[0.04] space-y-3">
                                                                {/* Interface/IP row */}
                                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono text-text-tertiary pt-3">
                                                                    <span className="flex items-center gap-1">
                                                                        <Calendar size={10} weight="bold" className="text-text-muted" />
                                                                        {exp.date}
                                                                    </span>
                                                                    <span className="flex items-center gap-1">
                                                                        <MapPin size={10} weight="bold" className="text-text-muted" />
                                                                        {exp.location}
                                                                    </span>
                                                                    <span className="flex items-center gap-1">
                                                                        <Briefcase size={10} weight="bold" className="text-text-muted" />
                                                                        {exp.company}
                                                                    </span>
                                                                </div>

                                                                {/* Description */}
                                                                <p className="text-text-secondary text-xs leading-relaxed">
                                                                    {exp.description}
                                                                </p>

                                                                {/* Metrics as interface stats */}
                                                                {exp.metrics && (
                                                                    <div className="flex flex-wrap gap-4">
                                                                        {exp.metrics.map((m, mIdx) => (
                                                                            <div key={mIdx} className="flex items-center gap-2">
                                                                                <span className={cn("text-xs font-bold font-mono", m.color)}>{m.value}</span>
                                                                                <span className="text-[9px] text-text-tertiary font-mono">{m.label}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {/* Pillars as route tags */}
                                                                {exp.pillars && (
                                                                    <div className="flex flex-wrap gap-1">
                                                                        {exp.pillars.map((p, pIdx) => (
                                                                            <span key={pIdx} className="text-[9px] px-2 py-0.5 rounded-full font-mono bg-black/30 text-text-muted border border-white/[0.04]">
                                                                                {p}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MotionDiv>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
