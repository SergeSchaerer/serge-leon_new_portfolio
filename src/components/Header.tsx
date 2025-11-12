import profileImage from "@/assets/profile.jpg";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="text-center relative z-10">
        <div className="animate-fade-in-up mb-8 relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-glow" />
          <img
            src={profileImage}
            alt="Porträt von Serge-Leon Schärer"
            className="w-56 h-56 rounded-full mx-auto border-4 border-primary/50 shadow-2xl relative z-10 hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Verfügbar für neue Projekte</span>
          </div>
        </div>

        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in-up font-space leading-tight" 
          style={{ animationDelay: "0.3s" }}
        >
          Serge-Leon Schärer
        </h1>
        
        <p 
          className="text-2xl md:text-3xl text-muted-foreground animate-fade-in-up font-light tracking-wide" 
          style={{ animationDelay: "0.5s" }}
        >
          Applikationsentwickler im 2. Lehrjahr
        </p>

        <div 
          className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-primary rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-glow-primary"
          >
            Projekte ansehen
          </button>
          <button 
            onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass-card rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 glow-border"
          >
            Video ansehen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
