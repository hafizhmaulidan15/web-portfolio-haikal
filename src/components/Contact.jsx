import { motion as m } from 'framer-motion';
import { Envelope, GithubLogo, LinkedinLogo, MapPin, TerminalWindow, Phone } from '@phosphor-icons/react';
import { profileData } from '../data/profileData';

const MotionDiv = m.div;
const MotionA = m.a;

const Contact = () => {
    return (
        <section className="py-16 px-6 min-h-screen bg-background relative overflow-hidden flex items-center">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-[800px] relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/15 bg-primary/5 font-mono text-xs mb-8 w-fit mx-auto"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    <span className="text-accent-green">~/$</span>
                    <span className="text-text-tertiary">./connect.sh --interactive</span>
                </MotionDiv>

                <div className="text-center space-y-8">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold tracking-tighter leading-[1.1]">
                            Let's build the{' '}
                            <span className="text-gradient-cyan">next network</span>
                        </h1>
                        <p className="text-text-secondary text-sm md:text-base max-w-[50ch] mx-auto leading-relaxed">
                            I am currently seeking opportunities to apply my expertise in network engineering, training, and technical writing.
                            Whether you have a specific inquiry or just want to connect, my inbox is open.
                        </p>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md mx-auto"
                    >
                        <div className="rounded-xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm overflow-hidden">
                            <div className="px-4 py-3 border-b border-white/[0.06] bg-black/20 flex items-center gap-2">
                                <TerminalWindow size={14} weight="bold" className="text-primary" />
                                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">Contact Information</span>
                            </div>
                            <div className="p-4 space-y-0 font-mono text-xs">
                                {[
                                    { label: 'Email', value: profileData.email, href: `mailto:${profileData.email}`, color: 'text-accent-green' },
                                    { label: 'Phone', value: profileData.phone, color: 'text-text-secondary' },
                                    { label: 'Location', value: profileData.location, color: 'text-text-secondary' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
                                        <span className="text-text-tertiary w-16 shrink-0">{item.label}:</span>
                                        {item.href ? (
                                            <a href={item.href} className={`${item.color} hover:text-primary transition-colors`}>{item.value}</a>
                                        ) : (
                                            <span className={item.color}>{item.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                        <MotionA
                            href={`mailto:${profileData.email}`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-5 py-3 bg-primary text-background font-semibold font-sans text-sm rounded-lg border border-primary shadow-neon flex items-center gap-2 hover:bg-primary-hover transition-all"
                        >
                            <Envelope size={16} weight="bold" />
                            Send Email
                        </MotionA>
                        <MotionA
                            href={profileData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            className="px-5 py-3 bg-interactive-button border border-white/[0.1] text-foreground font-sans text-sm rounded-lg hover:bg-white/[0.08] transition-all flex items-center gap-2"
                        >
                            <GithubLogo size={16} />
                            GitHub
                        </MotionA>
                        <MotionA
                            href={profileData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            className="px-5 py-3 bg-interactive-button border border-white/[0.1] text-foreground font-sans text-sm rounded-lg hover:bg-white/[0.08] transition-all flex items-center gap-2"
                        >
                            <LinkedinLogo size={16} />
                            LinkedIn
                        </MotionA>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};

export default Contact;
