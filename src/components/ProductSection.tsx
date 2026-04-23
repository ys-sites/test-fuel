import { motion } from "motion/react";

// Exact 5 products requested by user in their specific screenshot
const PRODUCTS = [
  { 
    name: "FURY Hydrate - Creatine Formula", 
    price: "$44.99",
    tagline: "Essential Electrolytes",
    status: "Épuisé",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "FURY Isolate - Vanilla", 
    price: "$79.99",
    tagline: "22g Clean Protein",
    status: "Épuisé",
    img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "GutFuel - Gut Health", 
    price: "$29.99",
    tagline: "Gut Repair Formula",
    status: "Épuisé",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "NeuroFuel - Lion's Mane Mushroom", 
    price: "$39.99",
    tagline: "Focus & Cognitive Performance",
    status: "Épuisé",
    img: "https://images.unsplash.com/photo-1594824436949-1385d889278a?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "ZenFuel - Ashwagandha", 
    price: "$34.99",
    tagline: "With Black Pepper",
    status: "Épuisé",
    img: "https://images.unsplash.com/photo-1577401239170-89ef57874fde?auto=format&fit=crop&q=80&w=600" 
  },
];

export function ProductSection({ onAddToCart }: { onAddToCart: (qty: number) => void }) {
  return (
    <section id="product" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="mb-12 border-b border-black/10 pb-6">
          <h2 className="font-display text-4xl font-bold text-zinc-900 tracking-tight">Produits</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {PRODUCTS.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Image Container matching snapshot aesthetics */}
              <div className="bg-[#f8f8f8] w-full aspect-square relative mb-5 flex items-center justify-center p-8 group-hover:bg-[#f2f2f2] transition-colors">
                
                {prod.status && (
                  <div className="absolute top-4 right-4 bg-black/5 text-zinc-700 px-3 py-1 rounded-full text-xs font-medium">
                    {prod.status}
                  </div>
                )}
                
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Simulated quick-add overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <button 
                     onClick={() => onAddToCart(1)}
                     className="bg-zinc-900 text-white font-bold text-sm tracking-widest uppercase px-6 py-3 rounded-full hover:bg-zinc-800 translate-y-4 group-hover:translate-y-0 transition-all shadow-xl"
                   >
                     Add to Bag
                   </button>
                </div>
              </div>

              {/* Text Product Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-zinc-900 leading-snug">{prod.name}</h3>
                <span className="text-[15px] text-zinc-600">{prod.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
