export function Footer() {
  return (
    <footer className="relative bg-brand-primary text-white overflow-hidden">
      {/* Background ambient field image replacing the solid color for the Suppoint look */}
      <div className="absolute inset-0 overflow-hidden">
         <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000" alt="Tea field" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
         <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-primary/80 to-brand-primary" />
      </div>

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="text-center py-24 px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Sign up for priority status.</h2>
          <h3 className="text-2xl md:text-3xl font-medium text-brand-accent mb-10">Get 10% off your first order</h3>
          
          <div className="max-w-md mx-auto flex items-center bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent flex-1 px-6 text-white placeholder-white/60 outline-none font-medium"
            />
            <button className="bg-brand-accent text-brand-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform tracking-wide">
              Submit
            </button>
          </div>
        </div>

        {/* Footer Bottom Setup */}
        <div className="border-t border-white/10 mt-12 py-8 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-white/50 font-medium tracking-wide text-center md:text-left">
              © 2026 Copyright - Suppoint | Designed by <span className="text-white hover:text-brand-accent cursor-pointer transition-colors">AI Studio</span> | Powered by Iron Fuel
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors">f</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors">t</a>
              <a href="#" className="bg-brand-accent text-brand-primary font-bold text-xs uppercase px-6 py-2 rounded-full hover:scale-105 transition-transform ml-4">Back To Top</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
