import { Briefcase } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Apps Team",
      description:
        "Erste Kenntnisse im Frontend-Bereich gesammelt und grundlegende Programmierfähigkeiten in TypeScript und JavaScript entwickelt. Zudem erste Erfahrungen mit React gemacht.",
    },
    {
      title: "NewsRoom",
      description:
        "Erste Erfahrungen im Backend-Bereich gesammelt, dabei Python kennengelernt und zahlreiche Endpoints entwickelt. Diese Arbeit hat mir geholfen, ein besseres Verständnis für Backend-Architekturen und Datenverarbeitung zu erlangen.",
    },
    {
      title: "Dein Projekt!",
      description:
        "Ich würde mich sehr freuen, bei deinem Projekt dabei zu sein und meine Fähigkeiten und Ideen einzubringen, um gemeinsam etwas Grossartiges zu schaffen!",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Projekte
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
