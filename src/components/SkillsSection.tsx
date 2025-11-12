import { Code, Users, Trophy, Heart } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Java", "MySQL", "Python", "Fast API", "Angular"],
      color: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Sozialkompetenzen",
      items: ["Teamarbeit", "Kommunikation", "Sozial", "Offen", "Empathie", "Konfliktlösung", "Verlässlichkeit"],
      color: "from-secondary to-accent",
    },
    {
      icon: Trophy,
      title: "Tennis",
      items: ["TC Roggwil", "Seit 8 Jahren", "Spass"],
      color: "from-accent to-primary",
    },
    {
      icon: Heart,
      title: "Freunde",
      items: ["Draussen sein", "Basketball Spielen", "Grillieren"],
      color: "from-secondary to-primary",
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text font-space mb-4">
            Fähigkeiten
          </h2>
          <p className="text-xl text-muted-foreground">Was ich mitbringe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 md:p-10 hover:scale-105 transition-all duration-500 glow-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold font-space">{skill.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-2 hover:bg-muted/50 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
