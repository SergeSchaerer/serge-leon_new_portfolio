import profileImage from "@/assets/profile.jpg";

const Header = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <div className="animate-fade-in-up">
          <img
            src={profileImage}
            alt="Porträt von Serge-Leon Schärer"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary shadow-glass"
            loading="lazy"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Serge-Leon Schärer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Applikationsentwickler im 2. Lehrjahr
        </p>
      </div>
    </section>
  );
};

export default Header;
