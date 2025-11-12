import { Monitor, Server, Brain, Sparkles } from "lucide-react";

const InterestsSection = () => {
  const interests = [
    {
      icon: Monitor,
      title: "Frontend",
      description: "Neue Entwicklungen im Web und Design",
      gradient: "from-primary via-accent to-secondary",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Effiziente Datenverarbeitung durch APIs und Endpoints",
      gradient: "from-secondary via-primary to-accent",
    },
    {
      icon: Brain,
      title: "Logik",
      description: "Logisch überlegen und in Codes einbinden",
      gradient: "from-accent via-secondary to-primary",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Zukunftstechnologien wie AI",
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section id="interests" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text font-space mb-4">
            Interessen
          </h2>
          <p className="text-xl text-muted-foreground">Wofür ich brenne</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:scale-110 hover:-translate-y-2 transition-all duration-500 glow-border group relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-space">{interest.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
