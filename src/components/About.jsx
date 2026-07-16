import { motion as m } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Network, BookOpen, TerminalWindow, WifiHigh, Certificate, Globe } from '@phosphor-icons/react';
import { profileData, achievements } from '../data/profileData';

const MotionDiv = m.div;

const About = () => {
    const systemInfo = [
        { label: 'Name', value: 'Muhammad Haikal Ramadhika' },
        { label: 'Role', value: 'NOC Engineer' },
        { label: 'Location', value: 'Bogor, Indonesia' },
        { label: 'Email', value: profileData.email },
        { label: 'Education', value: 'SMK IDN Boarding School — TKJ' },
        { label: 'Status', value: 'Active · Open to opportunities' },
    ];

    return (
        <section className="py-16 px-6 min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -left-40 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-[1200px] relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/15 bg-primary/5 font-mono text-xs mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    <span className="text-accent-green">~/$</span>
                    <span className="text-text-tertiary">cat ./about.md</span>
                </MotionDiv>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Profile Photo + System Info */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Profile Photo */}
                        <MotionDiv
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm overflow-hidden"
                        >
                            <div className="flex items-center gap-4 p-4">
                                <div className="relative shrink-0">
                                    <img
                                        src="/profile-haikal.jpg"
                                        alt="Muhammad Haikal Ramadhika"
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-2 border-primary/30"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent-green border-2 border-background"></div>
                                </div>
                                <div className="min-w-0">
                                    <div className="text-foreground font-semibold text-sm">Muhammad Haikal Ramadhika</div>
                                    <div className="text-[10px] font-mono text-text-tertiary mt-0.5 flex items-center gap-1">
                                        <TerminalWindow size={10} weight="bold" className="text-primary" />
                                        Network Engineer
                                    </div>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                                        <span className="text-[9px] font-mono text-text-muted">online</span>
                                        <span className="w-0.5 h-0.5 rounded-full bg-text-muted"></span>
                                        <span className="text-[9px] font-mono text-text-muted">NOC Active</span>
                                    </div>
                                </div>
                            </div>
                        </MotionDiv>

                        {/* System Info Panel */}
                        <MotionDiv
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm overflow-hidden"
                        >
                            <div className="px-4 py-3 border-b border-white/[0.06] bg-black/20 flex items-center gap-2">
                                <TerminalWindow size={14} weight="bold" className="text-primary" />
                                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">System Information</span>
                            </div>
                            <div className="p-4 space-y-0 font-mono text-xs">
                                {systemInfo.map((info, idx) => (
                                    <div key={idx} className="flex items-start gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
                                        <span className="text-text-tertiary w-20 shrink-0">{info.label}:</span>
                                        <span className={
                                            idx === 0 ? 'text-foreground font-semibold' :
                                            idx === 3 ? 'text-accent-green' :
                                            idx === 5 ? 'text-accent-green' :
                                            'text-text-secondary'
                                        }>{info.value}</span>
                                    </div>
                                ))}
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm overflow-hidden"
                        >
                            <div className="px-4 py-3 border-b border-white/[0.06] bg-black/20 flex items-center gap-2">
                                <Certificate size={14} weight="bold" className="text-accent-purple" />
                                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">Achievements</span>
                            </div>
                            <div className="p-4 space-y-2">
                                {achievements.map((ach, idx) => (
                                    <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-lg border border-white/[0.04] bg-black/20">
                                        <span className={ach.color}>
                                            {ach.icon === 'network' ? <Network size={14} weight="duotone" /> :
                                             ach.icon === 'router' ? <Globe size={14} weight="duotone" /> :
                                             ach.icon === 'book' ? <BookOpen size={14} weight="duotone" /> :
                                             <Certificate size={14} weight="duotone" />}
                                        </span>
                                        <span className="text-xs font-mono text-text-secondary">{ach.text}</span>
                                    </div>
                                ))}
                            </div>
                        </MotionDiv>
                    </div>

                    {/* Bio Section */}
                    <div className="lg:col-span-3 space-y-6">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-[1.1] mb-2">
                                About{' '}
                                <span className="text-gradient-cyan">Me</span>
                            </h1>
                            <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mb-6"></div>

                            <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
                                <p className="font-mono text-text-tertiary text-xs border-l-2 border-primary/30 pl-3 italic">
                                    "Connecting the Future &mdash; One Network at a Time"
                                </p>
                                <p>{profileData.about}</p>
                                <p>
                                    Currently serving as <span className="text-foreground font-medium">NOC Engineer at PT Inovasi Tjaraka Buana (MyNet)</span>,
                                    I monitor network operations and ensure ISP infrastructure uptime. My journey includes training 70+ students
                                    across Indonesia and Malaysia, authoring 5 technical books on networking, and earning multiple industry
                                    certifications from Cisco, MikroTik, and Fortinet.
                                </p>
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-2 gap-3"
                        >
                            {[
                                { icon: Briefcase, label: 'Current Role', value: 'NOC Engineer', color: 'text-primary' },
                                { icon: GraduationCap, label: 'Education', value: 'SMK IDN Boarding School', color: 'text-accent-purple' },
                                { icon: Network, label: 'Specialization', value: 'Cisco, MikroTik & Fortinet', color: 'text-accent-green' },
                                { icon: WifiHigh, label: 'Students Trained', value: '70+', color: 'text-accent-amber' },
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 rounded-xl border border-white/[0.06] bg-surface/40 backdrop-blur-sm">
                                    <div className={`${item.color} mb-2`}>
                                        <item.icon size={18} weight="duotone" />
                                    </div>
                                    <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">{item.label}</div>
                                    <div className="text-sm font-medium text-foreground mt-0.5">{item.value}</div>
                                </div>
                            ))}
                        </MotionDiv>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
