import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const STORIES = [
  { author: "Sarah Johnson", role: "Fitness Trainer", quote: "These supplements have completely transformed my energy levels and overall wellness." },
  { author: "Michael Chen", role: "Tech Professional", quote: "I've noticed significant improvements in my mental clarity and focus." },
  { author: "Emily Rodriguez", role: "Healthcare Worker", quote: "The immune support has been an absolute game-changer for my health routine." },
  { author: "David Kim", role: "Marathon Runner", quote: "Recovery times have halved. I can push harder without the burnout." }
];

export function Transformation() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(STORIES.length - 1) * 350}px`]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-bg w-full">
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden w-full px-6 md:px-16 py-24">
        <div className="z-20 mb-12 flex-none">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary">
            Customer <span className="italic font-light">Stories</span>
          </h2>
          <p className="text-brand-text/60 mt-4 max-w-sm">Thousands of high-performers have completely transformed their energy levels and overall wellness.</p>
        </div>

        <div className="relative flex-1 w-full overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-8 absolute">
            {STORIES.map((story, i) => (
              <div key={i} className="w-[350px] shrink-0 bg-white border border-brand-mint/50 shadow-xl shadow-brand-mint/10 p-10 rounded-2xl flex flex-col justify-between h-[400px]">
                <h3 className="font-display text-2xl font-bold text-brand-primary leading-snug">"{story.quote}"</h3>
                <div className="flex items-center gap-4 border-t border-black/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center font-bold text-brand-primary">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-brand-text">{story.author}</div>
                    <div className="text-xs text-brand-text/50">{story.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
