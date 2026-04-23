import { motion } from "motion/react";
import { Play } from "lucide-react";

const VIDEOS = [
  { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400", name: "Sarah" },
  { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400", name: "Jessica" },
  { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400", name: "Elena" }
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-16 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary">Loved by Our Customers</h2>
          <button className="hidden md:block py-3 px-8 border-2 border-brand-primary text-brand-primary rounded-full text-sm font-bold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-colors">
            Follow Us
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {VIDEOS.map((vid, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer shadow-lg"
            >
              <img src={vid.img} alt="Customer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white font-medium flex items-center gap-2 text-sm uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-brand-accent inline-block" />
                Iron Fuel Fan
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
