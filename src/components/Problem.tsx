import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Problem() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} id="problem" className="py-40 px-6 md:px-16 bg-brand-bg relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      
      {/* Background Graphic elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
         <motion.div style={{ y }} className="absolute -right-20 top-20 w-96 h-96 bg-brand-mint rounded-full blur-3xl opacity-50" />
         <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }} className="absolute -left-20 bottom-10 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div style={{ opacity }} className="space-y-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-brand-primary leading-[1.2]">
            In 2050, owning more <br/> won't matter.
          </h2>
          
          <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-brand-text/60 leading-tight max-w-4xl mx-auto">
            Your immune resilience, <span className="inline-block px-4 py-1 bg-brand-surface rounded-full shadow-sm text-brand-text mx-2 scale-90 md:scale-100 rotate-2 border border-black/5">🛡️ inflammation</span> levels,
            <span className="text-brand-primary"> cellular health</span> and recovery <span className="inline-block px-4 py-1 bg-brand-accent/30 rounded-full shadow-sm text-brand-text border border-brand-accent mx-2 scale-90 md:scale-100 -rotate-2">⚡ speed</span> will.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
