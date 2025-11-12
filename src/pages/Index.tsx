import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import SkillsSection from "@/components/SkillsSection";
import InterestsSection from "@/components/InterestsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GoalsSection from "@/components/GoalsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <VideoSection />
      <SkillsSection />
      <InterestsSection />
      <ProjectsSection />
      <GoalsSection />
      <Footer />
    </div>
  );
};

export default Index;
