import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const INGREDIENTS = [
  { name: "Ginkgo leaves", desc: "For cognitive clarity", icon: "🌿", yOffset: 0 },
  { name: "Yellow roots", desc: "Anti-inflammatory", icon: "🥔", yOffset: 40 },
  { name: "Korean ginseng", desc: "Cellular energy", icon: "🌱", yOffset: 80 },
  { name: "Indian pennywort", desc: "Skin & recovery", icon: "🍀", yOffset: 120 }
];

export function Science() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const jarY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} id="science" className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
         
         <div className="text-center mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-6">Derived From the Earth</h2>
            <p className="text-brand-text/60 max-w-xl mx-auto">Discover the natural elements we combine to create our medical-grade cellular recovery formula.</p>
         </div>

         <div className="relative flex flex-col md:flex-row items-center justify-between">
           
           {/* Left text column */}
           <div className="w-full md:w-1/3 space-y-12 relative z-10 mb-12 md:mb-0 hidden md:block">
             <div className="text-right">
                <h4 className="text-xl font-bold text-brand-primary">Clean Sourcing</h4>
                <p className="text-sm text-brand-text/60 mt-2">Every ingredient is rigorously tracked and ethically harvested.</p>
             </div>
             <div className="text-right">
                <h4 className="text-xl font-bold text-brand-primary">No Synthetic Fillers</h4>
                <p className="text-sm text-brand-text/60 mt-2">100% active compounds. If your body can't use it, we don't include it.</p>
             </div>
           </div>

           {/* Central floating jar */}
           <div className="w-full md:w-1/3 flex justify-center relative z-20">
             <motion.div style={{ y: jarY }} className="relative drop-shadow-2xl">
               <div className="w-64 h-64 bg-gradient-to-br from-brand-primary to-[#0a1a0f] rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center border-t border-white/10 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=400')] bg-cover mix-blend-overlay" />
                 <h3 className="font-display text-4xl font-bold text-white z-10 relative">nu<br/><span className="font-light italic">vera</span></h3>
                 <p className="text-brand-accent text-xs mt-4 tracking-widest font-semibold z-10">FORMULA I</p>
               </div>
             </motion.div>
           </div>

           {/* Right interactive ingredients list */}
           <div className="w-full md:w-1/3 space-y-6 relative z-10">
              {INGREDIENTS.map((item, i) => (
                 <motion.div 
                   key={item.name}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="flex items-center gap-4 group cursor-default"
                 >
                   <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-xl shadow-sm border border-black/5 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all">
                     {item.icon}
                   </div>
                   <div>
                     <h4 className="font-bold text-brand-primary transition-colors">{item.name}</h4>
                     <p className="text-xs text-brand-text/50">{item.desc}</p>
                   </div>
                 </motion.div>
              ))}
              
              <div className="pt-6">
                <button className="bg-brand-accent text-brand-primary px-6 py-2 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-transform">Explore</button>
              </div>
           </div>

         </div>
      </div>
    </section>
  );
}
