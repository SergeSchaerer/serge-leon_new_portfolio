import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card py-8 px-4 mt-20">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/serge-schärer-b86a31326"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>Schärer GHR-POD-NEX-31</span>
          </a>
        </div>
        <p className="text-muted-foreground">© 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
