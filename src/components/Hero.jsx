import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MotionDiv = m.div;
import { Network, WifiHigh, BookOpen, Certificate, ArrowUpRight, TerminalWindow, MapPin, Envelope } from '@phosphor-icons/react';
import { profileData } from '../data/profileData';

const typewriterText = [
    "> Initializing network engineer profile...",
    "> Loading certifications: CCNA, MTCRE, MTCNA, FCF/FCA, DCAIE",
    "> Established connection to node: haikal-network-engineer",
    "> Ready.",
];

const MotionContainer = ({ children, delay = 0 }) => (
    <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </MotionDiv>
);

const Hero = () => {
    const [visibleLines, setVisibleLines] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timers = [];
        typewriterText.forEach((_, idx) => {
            timers.push(setTimeout(() => {
                setVisibleLines(idx + 1);
            }, 300 + idx * 600));
        });
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => {
            timers.forEach(t => clearTimeout(t));
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-14 md:pt-16">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,0.04)_0%,transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.03)_0%,transparent_50%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/3 blur-[250px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-5 max-w-[1300px] relative z-10 w-full">
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-14 xl:gap-20">

                    {/* Left: Name + Stats + CTAs */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center gap-8 lg:gap-10">
                        {/* Name */}
                        <MotionContainer delay={0}>
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary font-mono text-xs md:text-sm tracking-widest uppercase">
                                    <Network size={16} weight="bold" />
                                    Network Engineer &middot; CCNA &middot; MTCRE
                                </div>
                                <h1 className="text-[36px] md:text-[52px] lg:text-[64px] xl:text-[76px] font-bold tracking-tighter leading-[1.02]">
                                    <span className="text-foreground">MUHAMMAD</span>
                                    <br />
                                    <span className="text-gradient-cyan">HAIKAL</span>{' '}
                                    <span className="text-text-tertiary">RAMADHIKA</span>
                                </h1>
                                <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                                    NOC &amp; Network Security professional specializing in{' '}
                                    <span className="text-foreground font-medium">routing, switching, and network security</span>.
                                    Certified in Cisco, MikroTik, and Fortinet technologies.
                                </p>
                                <div className="flex items-center gap-4 md:gap-5 text-sm md:text-base font-mono text-text-tertiary flex-wrap">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin size={16} weight="bold" className="text-primary" />
                                        Bogor, Indonesia
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                                    <span className="flex items-center gap-1.5">
                                        <Envelope size={16} weight="bold" className="text-accent-green" />
                                        mhaikramadhika5@gmail.com
                                    </span>
                                </div>
                            </div>
                        </MotionContainer>

                        {/* Stats Row */}
                        <MotionContainer delay={0.3}>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                                {[
                                    { label: 'CERTIFICATIONS', value: '7+', color: 'text-primary', icon: Certificate, desc: 'Cisco, MikroTik, Fortinet' },
                                    { label: 'BOOKS PUBLISHED', value: '5+', color: 'text-accent-green', icon: BookOpen, desc: 'CCNA, MTCNA, AWS' },
                                    { label: 'STUDENTS TRAINED', value: '70+', color: 'text-accent-purple', icon: WifiHigh, desc: 'Indonesia & Malaysia' },
                                    { label: 'CREDLY BADGES', value: '15+', color: 'text-accent-cyan', icon: Certificate, desc: 'CCNA, MTCRE, FCA, NSE & more' },
                                    { label: 'YEARS ACTIVE', value: '3+', color: 'text-accent-amber', icon: TerminalWindow, desc: 'NOC & Training' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="p-3 md:p-5 rounded-xl border border-white/[0.06] bg-surface/40 backdrop-blur-sm text-center group hover:border-primary/20 transition-all">
                                        <div className={`${stat.color} mb-2 flex justify-center`}>
                                            <stat.icon size={20} weight="duotone" />
                                        </div>
                                        <div className={`text-xl md:text-3xl font-bold font-mono tracking-tight ${stat.color}`}>{stat.value}</div>
                                        <div className="text-[9px] md:text-xs font-mono text-text-tertiary uppercase tracking-wider mt-1">{stat.label}</div>
                                        <div className="text-[8px] md:text-[10px] font-mono text-text-muted mt-0.5">{stat.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <a
                                href={profileData.credlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-tertiary hover:text-primary transition-colors mt-3"
                            >
                                <Certificate size={10} weight="bold" />
                                Verify all certifications on Credly
                                <ArrowUpRight size={10} weight="bold" />
                            </a>
                        </MotionContainer>

                        {/* CTA */}
                        <MotionContainer delay={0.5}>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="px-6 py-3.5 bg-primary text-background font-semibold font-sans text-sm rounded-lg border border-primary hover:bg-primary-hover transition-all flex items-center gap-2 shadow-neon"
                                >
                                    <TerminalWindow size={16} weight="bold" />
                                    connect --now
                                </Link>
                                <Link
                                    to="/projects"
                                    className="px-6 py-3.5 bg-interactive-button border border-white/[0.1] text-foreground font-sans text-sm rounded-lg hover:bg-white/[0.08] transition-all flex items-center gap-2"
                                >
                                    view projects
                                    <ArrowUpRight size={14} weight="bold" />
                                </Link>
                                <Link
                                    to="/experience"
                                    className="px-6 py-3.5 bg-interactive-button border border-white/[0.1] text-foreground font-sans text-sm rounded-lg hover:bg-white/[0.08] transition-all flex items-center gap-2"
                                >
                                    view experience
                                </Link>
                            </div>
                        </MotionContainer>
                    </div>

                    {/* Right: Terminal Panel */}
                    <div className="lg:w-[420px] xl:w-[480px] flex">
                        <div className="flex-1 mt-12 lg:mt-16">
                            <MotionContainer delay={0.6}>
                                <div className="rounded-xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-black/20">
                                        <span className="w-3 h-3 rounded-full bg-error/80"></span>
                                        <span className="w-3 h-3 rounded-full bg-warning/80"></span>
                                        <span className="w-3 h-3 rounded-full bg-accent-green/80"></span>
                                        <span className="ml-3 text-[11px] font-mono text-text-tertiary">Network Engineer:~/portfolio</span>
                                        <span className="ml-auto flex items-center gap-1.5 text-[9px] font-mono text-text-tertiary">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                                            CONNECTED
                                        </span>
                                    </div>
                                    <div className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed space-y-1.5 flex-1 flex flex-col justify-center min-h-[220px] md:min-h-[280px]">
                                        {typewriterText.map((line, idx) => (
                                            <div
                                                key={idx}
                                                className={`transition-opacity duration-300 ${idx < visibleLines ? 'opacity-100' : 'opacity-0'}`}
                                            >
                                                {idx === 0 && <span className="text-accent-green">visitor@terminal</span>}
                                                {idx === 0 && <span className="text-text-tertiary">:</span>}
                                                {idx === 0 && <span className="text-primary">~</span>}
                                                {idx === 0 && <span className="text-text-tertiary">$ </span>}
                                                <span className={idx === 0 ? 'text-text-secondary' : idx === typewriterText.length - 1 ? 'text-accent-green' : 'text-text-tertiary'}>
                                                    {line}
                                                </span>
                                            </div>
                                        ))}
                                        {visibleLines >= typewriterText.length && (
                                            <div className="flex items-center gap-1.5 pt-2">
                                                <span className="text-accent-green">visitor@terminal</span>
                                                <span className="text-text-tertiary">:</span>
                                                <span className="text-primary">~</span>
                                                <span className="text-text-tertiary">$ </span>
                                                <span className={`text-foreground ${showCursor ? '' : 'invisible'}`}>cat profile.md</span>
                                                <span className={`w-2.5 h-5 bg-primary/70 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </MotionContainer>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
