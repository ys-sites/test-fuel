import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";

// Exact replica of the Rolvey layout + dynamic 3 slides for products
const SLIDES = [
  {
    id: 0,
    prodKey: "ZenFuel",
    title: "Nature's Power.\nPerfected in a Jar.",
    bgImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2400", // Dark green forest river
    productImage: "https://images.unsplash.com/photo-1577401239170-89ef57874fde?auto=format&fit=crop&q=80&w=600",
    tagsRow1: ["Stress relief", "Cortisol lock"],
    tagsRow2: [{ text: "Mind repair", active: true }, "Deep calm", "Recovery"],
    tagsRow3: ["Daily focus programs"],
    review: { 
      rating: 4.8, 
      text: "I noticed a visible difference in my anxiety within just a week. It feels smoother, deeply calming, and naturally clarifying. This is now a permanent part of my routine.", 
      author: "Amanda R." 
    }
  },
  {
    id: 1,
    prodKey: "FURY Hydrate",
    title: "Relentless Energy.\nUnleashed Instantly.",
    bgImage: "https://images.unsplash.com/photo-1550053707-160de696cc4f?auto=format&fit=crop&q=80&w=2400", // Dark blue water
    productImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    tagsRow1: ["Glow boost", "Hydration lock"],
    tagsRow2: [{ text: "Muscle repair", active: true }, "Deep nourish", "Energizing"],
    tagsRow3: ["Performance programs"],
    review: { 
      rating: 4.9, 
      text: "This completely changed my intra-workout game. The endurance boost is insane and my recovery time practically vanished.", 
      author: "Marcus T." 
    }
  },
  {
    id: 2,
    prodKey: "NeuroFuel",
    title: "Ultimate Clarity.\nSharpen Your Mind.",
    bgImage: "https://images.unsplash.com/photo-1532055610816-0d1fa716e2b1?auto=format&fit=crop&q=80&w=2400", // Moody amber fog
    productImage: "https://images.unsplash.com/photo-1594824436949-1385d889278a?auto=format&fit=crop&q=80&w=600",
    tagsRow1: ["Brain boost", "Memory lock"],
    tagsRow2: [{ text: "Neural repair", active: true }, "Deep focus", "Brightening"],
    tagsRow3: ["Cognitive care programs"],
    review: { 
      rating: 5.0, 
      text: "Replaced my morning coffee completely. I get dialed-in focus without the midday crash. Pure mental clarity.", 
      author: "Sarah L." 
    }
  }
];

// Helper component for the pill tags
const TagPill = ({ text, active = false }: { text: string, active?: boolean }) => (
  <span 
    className={`px-5 py-[5px] rounded-full border text-[13px] tracking-wide transition-colors cursor-pointer ${
      active 
        ? "bg-white text-black border-white font-medium" 
        : "bg-black/40 backdrop-blur-md text-white border-white/30 hover:bg-white/10"
    }`}
  >
    {text}
  </span>
);

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <section className="relative w-full h-[100vh] min-h-[900px] overflow-hidden bg-[#0A0A0A] flex flex-col items-center">
      
      {/* Background Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
           key={currentSlide.id}
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           className="absolute inset-0 z-0"
        >
          <img src={currentSlide.bgImage} className="w-full h-full object-cover opacity-80" alt="Background" />
        </motion.div>
      </AnimatePresence>

      {/* Gradients to merge text against the background seamlessly */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Title - Exact Rolvey positioning (Upper middle) */}
      <div className="absolute top-[20%] left-0 right-0 z-20 px-4 text-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={currentSlide.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-[5.5rem] font-medium text-white tracking-tight leading-[1.1] whitespace-pre-line drop-shadow-2xl"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            {currentSlide.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Main Center Product Image - Floating beautifully over the background without a box */}
      <div className="absolute inset-0 z-10 flex items-center justify-center top-12 pointer-events-none">
        <AnimatePresence mode="popLayout">
           <motion.div
             key={currentSlide.id}
             initial={{ opacity: 0, y: 50, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="relative"
           >
             {/* Large soft drop shadow bounding the product onto the scene */}
             <img 
                src={currentSlide.productImage} 
                alt={currentSlide.prodKey} 
                className="w-[280px] md:w-[400px] object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.8)] filter contrast-[1.05]" 
             />
           </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Layout Container (Tags, Target Button, Review) - Exact Rolvey styling */}
      <div className="absolute bottom-10 left-0 w-full px-8 md:px-16 z-20 flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-0 font-sans">
         
         {/* Left Side: Tag Arrays (2, 3, 1 rows) */}
         <div className="flex-none lg:w-1/3 flex flex-col gap-2.5">
           <AnimatePresence mode="wait">
             <motion.div 
               key={currentSlide.id}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
               className="flex flex-col gap-2.5"
             >
                {/* Row 1 */}
                <div className="flex gap-2.5">
                   <TagPill text={currentSlide.tagsRow1[0] as string} />
                   <TagPill text={currentSlide.tagsRow1[1] as string} />
                </div>
                {/* Row 2 */}
                <div className="flex gap-2.5">
                   <TagPill 
                     text={(currentSlide.tagsRow2[0] as any).text} 
                     active={(currentSlide.tagsRow2[0] as any).active} 
                   />
                   <TagPill text={currentSlide.tagsRow2[1] as string} />
                   <TagPill text={currentSlide.tagsRow2[2] as string} />
                </div>
                {/* Row 3 */}
                <div className="flex gap-2.5">
                   <TagPill text={currentSlide.tagsRow3[0] as string} />
                </div>
             </motion.div>
           </AnimatePresence>
         </div>

         {/* Center Side: Shop Now Ring Button (Exactly centered on screen) */}
         <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex justify-center z-30">
            <div className="relative flex items-center justify-center w-36 h-36 rounded-full border border-white/20 bg-black/10 backdrop-blur-sm group cursor-pointer transition-transform hover:scale-105">
               <button className="w-24 h-24 bg-white text-black rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                 <span className="text-[11px] font-[700] tracking-widest uppercase mb-0.5">Shop Now</span>
                 <ArrowUpRight className="w-[18px] h-[18px] stroke-[2.5]" />
               </button>
            </div>
         </div>

         {/* Right Side: Exact Rolvey Glass Review Card */}
         <div className="flex-none lg:w-1/3 flex justify-end pb-8">
           <AnimatePresence mode="wait">
             <motion.div 
               key={currentSlide.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
               className="w-[360px] bg-[#111111]/80 backdrop-blur-2xl border border-white/10 p-[22px] rounded-[18px] text-white relative shadow-2xl"
             >
               <div className="flex items-center gap-1.5 mb-2.5">
                 <div className="flex">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-[14px] h-[14px] ${i < Math.floor(currentSlide.review.rating) ? 'fill-white text-white' : 'fill-transparent text-white/30'}`} />
                   ))}
                 </div>
                 <span className="text-[11px] font-medium tracking-wide ml-1.5">Excellent {currentSlide.review.rating}</span>
               </div>
               
               <p className="text-[13px] leading-[1.6] opacity-90 mb-4 h-[64px] overflow-hidden font-light tracking-wide pr-4">
                 {currentSlide.review.text}
               </p>
               
               <div className="flex items-center">
                 <span className="text-white font-semibold text-[13px] tracking-wide">— {currentSlide.review.author}</span>
               </div>

               {/* Absolute positioned huge quote mark in bottom right */}
               <div className="absolute bottom-[22px] right-[22px] font-serif text-[40px] leading-none opacity-40 text-white font-bold inline-block translate-y-2">
                 ”
               </div>
             </motion.div>
           </AnimatePresence>
         </div>

      </div>

      {/* Very thin progress indicator at the absolute bottom connecting to the 15s timer */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-30 flex">
        {SLIDES.map((slide, idx) => (
           <div key={idx} className="flex-1 h-full relative cursor-pointer" onClick={() => setCurrentIndex(idx)}>
             {currentIndex === idx && (
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 15, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-white"
                />
             )}
             {/* Divider */}
             {idx < SLIDES.length - 1 && <div className="absolute right-0 top-0 bottom-0 w-px bg-black opacity-50" />}
           </div>
        ))}
      </div>

    </section>
  );
}
