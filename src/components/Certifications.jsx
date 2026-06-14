import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { ShieldCheck, Network, Globe, Trophy, Certificate as CertIcon, Cpu, TerminalWindow, CheckCircle, ArrowSquareOut } from '@phosphor-icons/react';
import { certifications } from '../data/profileData';
import { cn } from '../lib/utils';

const MotionDiv = m.div;

const iconMap = {
    fortinet: <ShieldCheck size={18} weight="duotone" />,
    ai: <Cpu size={18} weight="duotone" />,
    cisco: <Network size={18} weight="duotone" />,
    mikrotik: <Globe size={18} weight="duotone" />,
    competition: <Trophy size={18} weight="duotone" />,
};

const vendorConfig = {
    fortinet: { label: 'Fortinet Security', icon: 'fortinet', color: 'text-error', bg: 'bg-error/5', border: 'border-error/20', ring: 'ring-error/20' },
    cisco: { label: 'Cisco Networking', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/20', ring: 'ring-primary/20' },
    mikrotik: { label: 'MikroTik Routing', icon: 'mikrotik', color: 'text-accent-green', bg: 'bg-accent-green/5', border: 'border-accent-green/20', ring: 'ring-accent-green/20' },
    competition: { label: 'Competition', icon: 'competition', color: 'text-accent-purple', bg: 'bg-accent-purple/5', border: 'border-accent-purple/20', ring: 'ring-accent-purple/20' },
    ai: { label: 'AI & Cloud', icon: 'ai', color: 'text-accent-cyan', bg: 'bg-accent-cyan/5', border: 'border-accent-cyan/20', ring: 'ring-accent-cyan/20' },
};

const Certifications = () => {
    const [selectedVendor, setSelectedVendor] = useState(null);

    const grouped = certifications.reduce((acc, cert) => {
        const vendor = cert.icon || 'other';
        if (!acc[vendor]) acc[vendor] = [];
        acc[vendor].push(cert);
        return acc;
    }, {});

    return (
        <section className="py-16 px-6 min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent-green/4 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent-purple/4 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-[1100px] relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/15 bg-primary/5 font-mono text-xs mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    <span className="text-accent-green">~/$</span>
                    <span className="text-text-tertiary">cat /etc/apt/sources.list.d/credentials.list</span>
                </MotionDiv>

                <div className="mb-10">
                    <h1 className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-[1.1]">
                        Credential <span className="text-gradient-neon">Registry</span>
                    </h1>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mt-2"></div>
                    <p className="text-text-secondary text-sm mt-3 max-w-[50ch]">
                        Industry-recognized credentials across security, routing, switching, and cloud domains.
                    </p>
                </div>

                {/* Vendor filter pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                    <button
                        onClick={() => setSelectedVendor(null)}
                        className={cn(
                            "px-3 py-1.5 rounded-lg text-[10px] font-mono border transition-all",
                            !selectedVendor
                                ? "bg-primary/10 text-primary border-primary/30"
                                : "bg-black/20 text-text-tertiary border-white/[0.06] hover:border-white/15"
                        )}
                    >
                        ./all ({certifications.length})
                    </button>
                    {Object.entries(vendorConfig).map(([key, config]) => {
                        const count = grouped[key]?.length || 0;
                        if (count === 0) return null;
                        return (
                            <button
                                key={key}
                                onClick={() => setSelectedVendor(key)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-[10px] font-mono border transition-all flex items-center gap-1.5",
                                    selectedVendor === key
                                        ? `${config.bg} ${config.color} ${config.border}`
                                        : "bg-black/20 text-text-tertiary border-white/[0.06] hover:border-white/15"
                                )}
                            >
                                <span className="shrink-0">{iconMap[config.icon]}</span>
                                {config.label}
                                <span className="text-text-muted">({count})</span>
                            </button>
                        );
                    })}
                </div>

                {/* Credential Registry — vendor grouped */}
                <div className="space-y-8">
                    {Object.entries(vendorConfig).map(([vendorKey, config]) => {
                        const certs = grouped[vendorKey];
                        if (!certs || certs.length === 0) return null;
                        if (selectedVendor && selectedVendor !== vendorKey) return null;

                        const VendorIcon = iconMap[config.icon];

                        return (
                            <MotionDiv
                                key={vendorKey}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {/* Vendor header */}
                                <div className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg border mb-4",
                                    config.bg, config.border
                                )}>
                                    <div className={cn("p-2 rounded-lg", config.bg, config.color)}>
                                        {VendorIcon}
                                    </div>
                                    <div>
                                        <div className={cn("text-sm font-semibold", config.color)}>
                                            {config.label}
                                        </div>
                                        <div className="text-[9px] font-mono text-text-tertiary">
                                            {certs.length} credential{certs.length > 1 ? 's' : ''} registered
                                        </div>
                                    </div>
                                    <div className="ml-auto text-[9px] font-mono text-text-muted flex items-center gap-1">
                                        <CheckCircle size={10} weight="fill" className={config.color} />
                                        verified
                                    </div>
                                </div>

                                {/* Badge wall */}
                                <div className="flex flex-wrap gap-2">
                                    {certs.map((cert, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.03 }}
                                            className="group relative"
                                        >
                                            <div className={cn(
                                                "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-default",
                                                "bg-black/30 border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03]"
                                            )}>
                                                <div className={cn(
                                                    "w-1.5 h-1.5 rounded-full shrink-0",
                                                    config.color.replace('text', 'bg')
                                                )}></div>
                                                <div>
                                                    <div className="text-[11px] text-foreground leading-snug font-medium">
                                                        {cert.title}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[8px] font-mono text-text-muted mt-0.5">
                                                        <span>{cert.org}</span>
                                                        <span className="w-0.5 h-0.5 rounded-full bg-text-muted"></span>
                                                        <span>{cert.date}</span>
                                                    </div>
                                                </div>
                                                <ArrowSquareOut size={10} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                            </div>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        );
                    })}
                </div>

                {/* Registry summary */}
                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 p-4 rounded-xl border border-white/[0.06] bg-surface/30 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-2 text-[10px] font-mono text-text-tertiary">
                        <TerminalWindow size={12} weight="bold" className="text-primary" />
                        <span>registry summary</span>
                        <span className="text-text-muted">—</span>
                        <span className="text-primary font-semibold">{certifications.length}</span>
                        <span>credentials registered across</span>
                        <span className="text-accent-green font-semibold">{Object.keys(grouped).length}</span>
                        <span>vendor sources</span>
                        <span className="text-text-muted ml-auto">Last updated: {certifications[0]?.date || 'N/A'}</span>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default Certifications;
