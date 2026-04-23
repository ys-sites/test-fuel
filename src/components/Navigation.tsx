import { cn } from "../utils/cn";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-8 px-8 md:px-16 flex justify-between items-center",
        scrolled ? "bg-black/90 backdrop-blur-2xl shadow-lg py-5 border-b border-white/5 text-white" : "bg-transparent text-white"
      )}
    >
      <div className="w-1/3 hidden md:flex items-center gap-12 text-[13px] tracking-wide">
        <a href="#home" className="font-semibold text-white">Home</a>
        <a href="#reviews" className="text-white/70 hover:text-white transition-colors">Reviews</a>
        <a href="#product" className="text-white/70 hover:text-white transition-colors">Product</a>
        <a href="#delivery" className="text-white/70 hover:text-white transition-colors">Delivery</a>
      </div>

      <div className="w-1/3 flex justify-center uppercase tracking-[0.1em] font-medium text-xl md:text-2xl pt-1">
        INFUEL
      </div>
      
      <div className="w-1/3 flex items-center justify-end gap-6 text-[13px] font-medium">
        <button className="hidden md:block hover:bg-white hover:text-black px-6 py-2 rounded-full border border-white/40 transition-all backdrop-blur-sm">
          Sign in
        </button>
        <button className="relative flex items-center hover:opacity-70 transition-opacity p-2">
          <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
          {cartCount > 0 && (
             <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center translate-x-1/4 -translate-y-1/4">
               {cartCount}
             </span>
          )}
        </button>
      </div>
    </nav>
  );
}
