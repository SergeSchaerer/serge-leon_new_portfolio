import { Briefcase, Code2, Rocket } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Code2,
      title: "Apps Team",
      description:
        "Erste Kenntnisse im Frontend-Bereich gesammelt und grundlegende Programmierfähigkeiten in TypeScript und JavaScript entwickelt. Zudem erste Erfahrungen mit React gemacht.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Briefcase,
      title: "NewsRoom",
      description:
        "Erste Erfahrungen im Backend-Bereich gesammelt, dabei Python kennengelernt und zahlreiche Endpoints entwickelt. Diese Arbeit hat mir geholfen, ein besseres Verständnis für Backend-Architekturen und Datenverarbeitung zu erlangen.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Rocket,
      title: "Dein Projekt!",
      description:
        "Ich würde mich sehr freuen, bei deinem Projekt dabei zu sein und meine Fähigkeiten und Ideen einzubringen, um gemeinsam etwas Grossartiges zu schaffen!",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text font-space mb-4">
            Projekte
          </h2>
          <p className="text-xl text-muted-foreground">Meine bisherigen Erfahrungen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 glow-border group relative overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 font-space">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Decorative corner glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
