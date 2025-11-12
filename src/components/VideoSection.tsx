import { Play } from "lucide-react";
import bewerbungsVideo from "@/assets/Bewerbungsvideo2.mov";

const VideoSection = () => {
  return (
    <section id="video" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text font-space mb-4">
            Bewerbungsvideo
          </h2>
          <p className="text-xl text-muted-foreground">Lerne mich besser kennen</p>
        </div>

        <div className="glass-card rounded-3xl p-4 md:p-8 glow-border group hover:scale-105 transition-all duration-500">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <video
              className="w-full h-full relative z-10"
              controls
              preload="metadata"
            >
              <source src={bewerbungsVideo} type="video/quicktime" />
              <source src={bewerbungsVideo} type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-muted-foreground">
            <Play className="w-5 h-5 text-primary" />
            <span className="font-medium">Schau dir mein Bewerbungsvideo an</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
