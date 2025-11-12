import { Code, Users, Trophy, Heart } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Java", "MySQL", "Python", "Fast API", "Angular"],
    },
    {
      icon: Users,
      title: "Sozialkompetenzen",
      items: ["Teamarbeit", "Kommunikation", "Sozial", "Offen", "Empathie", "Konfliktlösung", "Verlässlichkeit"],
    },
    {
      icon: Trophy,
      title: "Tennis",
      items: ["TC Roggwil", "Seit 8 Jahren", "Spass"],
    },
    {
      icon: Heart,
      title: "Freunde",
      items: ["Draussen sein", "Basketball Spielen", "Grillieren"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Fähigkeiten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
