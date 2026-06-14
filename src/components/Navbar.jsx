import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    House, User, Lightbulb, Briefcase,
    Folder, Certificate, Envelope, LinkedinLogo,
    List, X, TerminalWindow
} from '@phosphor-icons/react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { path: '/', label: '_home', icon: <House size={16} /> },
        { path: '/about', label: '_about', icon: <User size={16} /> },
        { path: '/skills', label: '_skills', icon: <Lightbulb size={16} /> },
        { path: '/experience', label: '_exp', icon: <Briefcase size={16} /> },
        { path: '/projects', label: '_projects', icon: <Folder size={16} /> },
        { path: '/certifications', label: '_certs', icon: <Certificate size={16} /> },
        { path: '/contact', label: '_contact', icon: <Envelope size={16} /> },
    ];

    return (
        <>
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/90 backdrop-blur-lg border-b border-white/[0.06]"
                    : "bg-transparent"
            )}>
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                        <span className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-background font-bold text-xs md:text-sm shadow-neon">
                            HR
                        </span>
                        <span className="hidden sm:block font-mono text-foreground font-semibold text-sm tracking-tight group-hover:text-primary transition-colors">
                            Network Engineer
                        </span>
                        <span className="sm:hidden font-mono text-foreground font-semibold text-xs tracking-tight">
                            haikal
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200",
                                        isActive
                                            ? "bg-primary/10 text-primary border border-primary/20"
                                            : "text-text-tertiary hover:text-foreground hover:bg-white/[0.04] border border-transparent"
                                    )}
                                >
                                    <span className={isActive ? "text-primary" : "text-text-muted"}>
                                        {link.icon}
                                    </span>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden md:flex items-center gap-2">
                        <a
                            href="https://linkedin.com/in/muhammad-haikal-ramadhika-5749b22a6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-md bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-primary/30 transition-all"
                            aria-label="LinkedIn"
                        >
                            <LinkedinLogo size={14} />
                        </a>
                    </div>

                    <button
                        className="md:hidden w-8 h-8 rounded-md bg-interactive-button border border-border flex items-center justify-center text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={16} /> : <List size={16} />}
                    </button>
                </div>
            </header>

            <div
                className={`md:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className={cn(
                "md:hidden fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-white/[0.06] transition-all duration-300 overflow-y-auto",
                isMobileMenuOpen ? 'max-h-[calc(100vh-56px)] opacity-100' : 'max-h-0 opacity-0'
            )}>
                <nav className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-mono",
                                    isActive
                                        ? "bg-primary/10 text-primary border border-primary/20"
                                        : "text-text-tertiary hover:text-foreground hover:bg-white/[0.04] border border-transparent"
                                )}
                            >
                                <span className={isActive ? "text-primary" : "text-text-muted"}>
                                    {link.icon}
                                </span>
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                        <a href="https://linkedin.com/in/muhammad-haikal-ramadhika-5749b22a6" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground transition-all">
                            <LinkedinLogo size={14} />
                        </a>
                        <span className="ml-auto text-[9px] font-mono text-text-tertiary flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                            NOC Active
                        </span>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
