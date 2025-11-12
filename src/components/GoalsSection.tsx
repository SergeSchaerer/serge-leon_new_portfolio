import { BookOpen, Users2, Rocket } from "lucide-react";

const GoalsSection = () => {
  const goals = [
    {
      icon: BookOpen,
      title: "Lernen",
      description:
        "Ich möchte vieles Neues lernen und das Wissen direkt anwenden, um mich stetig zu verbessern und weiterzuentwickeln",
    },
    {
      icon: Users2,
      title: "Neue Leute Kennenlernen",
      description:
        "Ich möchte auch viele neue Leute kennenlernen und mit ihnen in Kontakt bleiben",
    },
    {
      icon: Rocket,
      title: "Zukunft",
      description:
        "Ich möchte eine eigene Web-Agentur gründen und innovative Projekte umsetzen, um kreative und moderne digitale Lösungen für verschiedene Kunden zu entwickeln und umzusetzen.",
    },
  ];

  return (
    <section id="goals" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Ziele
        </h2>
        <div className="space-y-6">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{goal.title}</h3>
                    <p className="text-muted-foreground">{goal.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
