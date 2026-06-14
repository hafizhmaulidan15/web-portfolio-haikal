import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassPanel = ({ children, className, variant = 'primary', overflowVisible = false, ...props }) => {
  const variants = {
    primary: "bg-surface text-foreground p-6 rounded-xl border border-white/[0.06] shadow-[rgba(0,212,255,0.06)_0px_-10px_50px_-10px_inset] hover:border-white/[0.12] hover:shadow-[rgba(0,212,255,0.10)_0px_-10px_50px_-10px_inset]",
    secondary: "bg-background text-foreground p-4 rounded-md border border-white/[0.06] hover:border-white/[0.1] hover:bg-[#0C0C1C]",
    minimal: "bg-transparent text-foreground p-4",
  };

  const MotionDiv = motion.div;

  return (
    <MotionDiv
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.2 }}
      className={cn(
        "relative group transition-all duration-200",
        variants[variant],
        overflowVisible ? "overflow-visible" : "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};
