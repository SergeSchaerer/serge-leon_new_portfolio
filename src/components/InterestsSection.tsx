import { Monitor, Server, Brain, Sparkles } from "lucide-react";

const InterestsSection = () => {
  const interests = [
    {
      icon: Monitor,
      title: "Frontend",
      description: "Neue Entwicklungen im Web und Design",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Effiziente Datenverarbeitung durch APIs und Endpoints",
    },
    {
      icon: Brain,
      title: "Logik",
      description: "Logisch überlegen und in Codes einbinden",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Zukunftstechnologien wie AI",
    },
  ];

  return (
    <section id="interests" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Interessen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:scale-105 hover:shadow-glass transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
