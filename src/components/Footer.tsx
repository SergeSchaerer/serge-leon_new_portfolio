import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card py-12 px-4 mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-3xl font-bold gradient-text font-space mb-3">
            Lass uns in Kontakt bleiben
          </h3>
          <p className="text-muted-foreground">Bereit für neue Herausforderungen</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/serge-schärer-b86a31326"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-xl hover:scale-110 transition-all duration-300 glow-border group"
          >
            <Linkedin className="w-5 h-5 text-primary group-hover:animate-pulse" />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a
            href="mailto:serge-leon.schaerer@swisscom.com"
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-xl hover:scale-110 transition-all duration-300 glow-border group"
          >
            <Mail className="w-5 h-5 text-secondary group-hover:animate-pulse" />
            <span className="font-medium">E-Mail</span>
          </a>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />

        <p className="text-muted-foreground font-medium">© 2025 Serge-Leon Schärer</p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          Gebaut mit React, TypeScript & Liebe zum Detail
        </p>
      </div>
    </footer>
  );
};

export default Footer;
