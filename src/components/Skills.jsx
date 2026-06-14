import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const MotionDiv = m.div;
import {
    Cpu, WifiHigh, Lightning, ChartBar,
    Globe, TerminalWindow, CaretDown, Network, Shield, Lock, Database, Speedometer
} from '@phosphor-icons/react';
import { cn } from '../lib/utils';
import { skillGroups } from '../data/profileData';

const skillIconMap = {
    router: <Network size={16} weight="duotone" />,
    ip: <Globe size={16} weight="duotone" />,
    shield: <Shield size={16} weight="duotone" />,
    route: <ChartBar size={16} weight="duotone" />,
    server: <Database size={16} weight="duotone" />,
    lock: <Lock size={16} weight="duotone" />,
    net: <WifiHigh size={16} weight="duotone" />,
    vpn: <Globe size={16} weight="duotone" />,
    speed: <Speedometer size={16} weight="duotone" />,
    ha: <Lightning size={16} weight="duotone" />,
    lab: <Cpu size={16} weight="duotone" />,
    vm: <TerminalWindow size={16} weight="duotone" />,
    design: <Lightning size={16} weight="duotone" />,
};

const Skills = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleService = (id) => {
        setExpandedService(prev => prev === id ? null : id);
    };

    return (
        <section className="py-16 px-6 min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/4 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-[1100px] relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/15 bg-primary/5 font-mono text-xs mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    <span className="text-accent-green">~/$</span>
                    <span className="text-text-tertiary">systemctl list-units --type=capability</span>
                </MotionDiv>

                <div className="mb-10">
                    <h1 className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-[1.1]">
                        Capability <span className="text-gradient-cyan">Registry</span>
                    </h1>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mt-2"></div>
                    <p className="text-text-secondary text-sm mt-3 font-mono flex items-center gap-2">
                        <span className="text-accent-green">{skillGroups.length}</span> service groups registered
                        <span className="text-text-muted">·</span>
                        <span className="text-primary">{skillGroups.reduce((a, g) => a + g.skills.length, 0)}</span> capabilities loaded
                    </p>
                </div>

                <div className="space-y-6">
                    {skillGroups.map((group, groupIdx) => {
                        const unitName = group.title
                            .toLowerCase()
                            .replace(/[&,()]/g, '')
                            .replace(/\s+/g, '-')
                            .replace(/--+/g, '-')
                            .replace(/^-|-$/g, '') + '.service';

                        return (
                            <div key={groupIdx}>
                                {/* Service Group Header */}
                                <MotionDiv
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg border mb-3 font-mono text-xs",
                                        group.iconBg, group.accentColor, `border-current/15`
                                    )}
                                >
                                    <span className="w-2 h-2 rounded-full bg-accent-green shrink-0"></span>
                                    <span className="text-accent-green font-semibold">●</span>
                                    <span className="text-text-tertiary">{unitName}</span>
                                    <span className="text-text-muted">—</span>
                                    <span className={group.accentColor}>{group.title}</span>
                                    <span className="ml-auto text-[9px] text-text-muted">
                                        {group.skills.length} capability{group.skills.length > 1 ? 'ies' : 'y'}
                                    </span>
                                </MotionDiv>

                                {/* Skills as service lines */}
                                <div className="space-y-0.5">
                                    {group.skills.map((skill, skillIdx) => {
                                        const serviceId = `${groupIdx}-${skillIdx}`;
                                        const isExpanded = expandedService === serviceId;

                                        return (
                                            <MotionDiv
                                                key={serviceId}
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: groupIdx * 0.1 + skillIdx * 0.02 }}
                                            >
                                                <div
                                                    onClick={() => toggleService(serviceId)}
                                                    className={cn(
                                                        "flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all duration-150 cursor-pointer font-mono text-xs",
                                                        isExpanded
                                                            ? "border-primary/25 bg-primary/5"
                                                            : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.02]"
                                                    )}
                                                >
                                                    {/* Status dots */}
                                                    <div className="flex items-center gap-1.5 w-10 shrink-0">
                                                        <span className={cn(
                                                            "w-2 h-2 rounded-full",
                                                            isExpanded ? "bg-accent-green animate-pulse" : "bg-accent-green/50"
                                                        )}></span>
                                                        <span className={cn(
                                                            "text-[9px]",
                                                            isExpanded ? "text-accent-green" : "text-text-muted"
                                                        )}>●</span>
                                                    </div>

                                                    {/* Load/Active columns */}
                                                    <span className="text-text-muted w-16 shrink-0 hidden sm:inline">loaded</span>
                                                    <span className={cn(
                                                        "w-14 shrink-0 hidden md:inline",
                                                        isExpanded ? "text-accent-green" : "text-text-tertiary"
                                                    )}>
                                                        active
                                                    </span>
                                                    <span className={cn(
                                                        "w-20 shrink-0 hidden md:inline",
                                                        isExpanded ? "text-accent-green" : "text-text-tertiary"
                                                    )}>
                                                        running
                                                    </span>

                                                    {/* Skill name + icon */}
                                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                                        <span className={cn("shrink-0", group.accentColor)}>
                                                            {skillIconMap[skill.icon] || <Cpu size={16} weight="duotone" />}
                                                        </span>
                                                        <span className="text-foreground truncate">{skill.name}</span>
                                                    </div>

                                                    {/* Expand indicator */}
                                                    <CaretDown
                                                        size={10}
                                                        className={cn(
                                                            "text-text-muted shrink-0 transition-transform duration-200",
                                                            isExpanded && "rotate-180"
                                                        )}
                                                        weight="bold"
                                                    />
                                                </div>

                                                {/* Expanded detail — journalctl style */}
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <MotionDiv
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-0 md:ml-[168px] mr-4 pb-3">
                                                                <div className={cn(
                                                                    "rounded-lg border p-3 space-y-2 font-mono text-xs",
                                                                    group.iconBg, `border-current/10`
                                                                )}>
                                                                    {/* Description line */}
                                                                    <div className="flex items-start gap-2">
                                                                        <span className="text-text-muted shrink-0">├─</span>
                                                                        <span className="text-text-tertiary leading-relaxed">
                                                                            {skill.context}
                                                                        </span>
                                                                    </div>

                                                                    {/* Project reference */}
                                                                    {skill.project && (
                                                                        <div className="flex items-start gap-2">
                                                                            <span className="text-text-muted shrink-0">└─</span>
                                                                            <span className={cn("leading-relaxed", group.accentColor)}>
                                                                                {skill.project}
                                                                            </span>
                                                                        </div>
                                                                    )}

                                                                    {/* Status footer */}
                                                                    <div className="flex items-center gap-3 pt-1.5 border-t border-white/[0.04] text-[9px] text-text-muted flex-wrap">
                                                                        <span>● active</span>
                                                                        <span>uptime: certified</span>
                                                                        <span className="ml-auto">capability.service</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </MotionDiv>
                                                    )}
                                                </AnimatePresence>
                                            </MotionDiv>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Summary footer */}
                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 p-4 rounded-xl border border-white/[0.06] bg-surface/30 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-2 text-[10px] font-mono text-text-tertiary">
                        <TerminalWindow size={12} weight="bold" className="text-primary" />
                        <span>systemctl status</span>
                        <span className="text-text-muted">—</span>
                        <span className="text-accent-green font-semibold">● All services running</span>
                        <span className="text-text-muted ml-auto">Last updated: 2025</span>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default Skills;
