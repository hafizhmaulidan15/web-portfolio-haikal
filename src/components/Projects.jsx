import { motion as m } from 'framer-motion';

const MotionDiv = m.div;
import {
    BookOpen, ArrowUpRight, TerminalWindow, Clock, Certificate, Eye
} from '@phosphor-icons/react';
import { projects } from '../data/profileData';
import { cn } from '../lib/utils';
import { GlassPanel } from './ui/GlassPanel';

const Projects = () => {
    const featured = projects[0];
    const rest = projects.slice(1);

    return (
        <section className="py-16 px-6 min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent-purple/4 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-accent-green/4 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-[1200px] relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/15 bg-primary/5 font-mono text-xs mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    <span className="text-accent-green">~/$</span>
                    <span className="text-text-tertiary">dpkg -l | grep publication</span>
                </MotionDiv>

                <div className="mb-10">
                    <h1 className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-[1.1]">
                        Published <span className="text-gradient-warm">Works</span>
                    </h1>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mt-2"></div>
                    <p className="text-text-secondary text-sm mt-3 max-w-[55ch]">
                        Technical books on networking, security, and cloud infrastructure.
                    </p>
                </div>

                {/* Featured — Hero book */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <GlassPanel
                        overflowVisible
                        className="relative overflow-hidden border-white/[0.08] hover:border-primary/25 transition-all group"
                    >
                        {/* Accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent-purple to-accent-green"></div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                            {/* Left: Info */}
                            <div className="md:col-span-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                        <BookOpen size={22} weight="duotone" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest">
                                            Featured Publication
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary text-[9px] font-mono uppercase tracking-widest">
                                                {featured.role}
                                            </span>
                                            {featured.status === 'ongoing' && (
                                                <span className="px-2 py-0.5 rounded bg-accent-amber/10 border border-accent-amber/30 text-accent-amber text-[9px] font-mono uppercase tracking-widest">
                                                    Ongoing
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                                    {featured.title}
                                </h2>

                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {featured.description}
                                </p>

                                {/* Impact */}
                                <div className="flex items-start gap-2 p-3 rounded-lg bg-accent-green/5 border border-accent-green/10">
                                    <Certificate size={14} weight="duotone" className="text-accent-green shrink-0 mt-0.5" />
                                    <p className="text-xs text-text-secondary font-mono leading-relaxed">
                                        {featured.impact}
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {featured.skills.map((skill) => (
                                        <span key={skill} className="text-[9px] font-mono text-text-tertiary border border-white/[0.06] px-2 py-0.5 rounded-full bg-white/[0.02]">
                                            #{skill.replace(/\s+/g, '-').toLowerCase()}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 text-[10px] font-mono text-text-tertiary pt-1">
                                    <span className="flex items-center gap-1">
                                        <Clock size={10} weight="bold" />
                                        {featured.period}
                                    </span>
                                    <span className="px-2 py-0.5 rounded bg-black/30 border border-white/[0.04]">
                                        {featured.association}
                                    </span>
                                </div>
                            </div>

                            {/* Right: Metadata block */}
                            <div className="md:col-span-4 p-4 rounded-xl bg-black/30 border border-white/[0.04] space-y-3">
                                <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Package Info</div>
                                <div className="space-y-2 text-[10px] font-mono">
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Package:</span>
                                        <span className="text-foreground">{featured.title.slice(0, 15)}..</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Version:</span>
                                        <span className="text-accent-green">1.0.0</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Status:</span>
                                        <span className={featured.status === 'ongoing' ? 'text-accent-amber' : 'text-accent-green'}>
                                            {featured.status === 'ongoing' ? 'building' : 'published'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Section:</span>
                                        <span className="text-primary">networking</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Arch:</span>
                                        <span className="text-text-tertiary">all</span>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-white/[0.04]">
                                    <div className="flex items-center gap-1 text-accent-cyan text-[9px]">
                                        <Eye size={10} weight="bold" />
                                        dpkg — view details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassPanel>
                </MotionDiv>

                {/* Remaining books — compact package list */}
                <div className="space-y-2">
                    {rest.map((project, idx) => (
                        <MotionDiv
                            key={project.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.04 }}
                        >
                            <GlassPanel
                                className={cn(
                                    "border-white/[0.04] hover:border-white/15 transition-all group",
                                    project.status === 'ongoing' && "border-accent-amber/10"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Icon */}
                                    <div className={cn(
                                        "p-2 rounded-lg shrink-0 bg-black/30",
                                        project.color
                                    )}>
                                        <BookOpen size={16} weight="duotone" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                                            <span className="px-1.5 py-0.5 rounded bg-black/30 border border-white/[0.04] text-[8px] font-mono text-text-muted">
                                                {project.role}
                                            </span>
                                            {project.status === 'ongoing' && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse shrink-0"></span>
                                            )}
                                        </div>
                                        <p className="text-[10px] font-mono text-text-tertiary mt-0.5 line-clamp-1">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Meta */}
                                    <div className="hidden sm:flex items-center gap-3 text-[9px] font-mono text-text-tertiary shrink-0">
                                        <span className="flex items-center gap-1">
                                            <Clock size={9} />
                                            {project.period}
                                        </span>
                                    </div>

                                    {/* Skills preview */}
                                    <div className="hidden lg:flex items-center gap-1.5 shrink-0">
                                        {project.skills.slice(0, 3).map((s) => (
                                            <span key={s} className="text-[8px] px-1.5 py-0.5 rounded-full bg-black/30 text-text-muted border border-white/[0.03]">
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Arrow */}
                                    <ArrowUpRight size={12} className="text-text-muted group-hover:text-primary transition-colors shrink-0" />
                                </div>
                            </GlassPanel>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
