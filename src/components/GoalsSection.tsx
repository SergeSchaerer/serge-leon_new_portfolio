import { BookOpen, Users2, Rocket } from "lucide-react";

const GoalsSection = () => {
  const goals = [
    {
      icon: BookOpen,
      title: "Lernen",
      description:
        "Ich möchte vieles Neues lernen und das Wissen direkt anwenden, um mich stetig zu verbessern und weiterzuentwickeln",
      gradient: "from-primary via-accent to-secondary",
    },
    {
      icon: Users2,
      title: "Neue Leute Kennenlernen",
      description:
        "Ich möchte auch viele neue Leute kennenlernen und mit ihnen in Kontakt bleiben",
      gradient: "from-secondary via-primary to-accent",
    },
    {
      icon: Rocket,
      title: "Zukunft",
      description:
        "Ich möchte eine eigene Web-Agentur gründen und innovative Projekte umsetzen, um kreative und moderne digitale Lösungen für verschiedene Kunden zu entwickeln und umzusetzen.",
      gradient: "from-accent via-secondary to-primary",
    },
  ];

  return (
    <section id="goals" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text font-space mb-4">
            Ziele
          </h2>
          <p className="text-xl text-muted-foreground">Meine Vision für die Zukunft</p>
        </div>

        <div className="space-y-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 md:p-12 hover:scale-105 transition-all duration-500 glow-border group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${goal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-space">{goal.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{goal.description}</p>
                  </div>
                </div>

                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-8xl font-bold text-primary/5 font-space">
                  {index + 1}
                </div>

                {/* Corner decoration */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${goal.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
