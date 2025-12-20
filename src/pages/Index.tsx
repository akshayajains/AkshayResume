import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Akshay Jain - Delivery Director & Engineering Leader | Fintech Expert</title>
        <meta
          name="description"
          content="22+ years experienced Delivery Director specializing in Fintech, Banking, and Digital Transformation. Expert in DevOps, Cloud, and Agile methodologies."
        />
        <meta name="author" content="Akshay Jain" />
        <meta
          name="keywords"
          content="Akshay Jain, Delivery Director, Engineering Leader, Fintech, Banking, DevOps, Cloud Transformation, Pune"
        />
        <link rel="canonical" href="https://instarem.in" />
        
        <meta property="og:title" content="Akshay Jain - Delivery Director & Engineering Leader" />
        <meta property="og:description" content="22+ years experienced leader in Fintech and Banking excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://instarem.in" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akshay Jain - Delivery Director" />
        <meta name="twitter:description" content="22+ years in Fintech & Banking leadership." />
      </Helmet>

      <div className="dark">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <AchievementsSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
