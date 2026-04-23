/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Science } from "./components/Science";
import { Transformation } from "./components/Transformation";
import { SocialProof } from "./components/SocialProof";
import { ProductSection } from "./components/ProductSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="bg-brand-bg text-brand-text font-sans relative">
      <Navigation cartCount={cartCount} />
      <Hero />
      <Problem />
      <Science />
      <Transformation />
      <SocialProof />
      <ProductSection onAddToCart={(qty) => setCartCount((c) => c + qty)} />
      <Footer />
    </div>
  );
}
