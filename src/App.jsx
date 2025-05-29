import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";

// Import components for each section
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import FloatingCTA from "./components/FloatingCTA";
import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import SolutionsSection from "./components/SolutionsSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnershipsSection from "./components/PartnershipsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add console easter egg for developers
    console.log("🤖 AI devs > regular devs 😉");
    console.log("Welcome to our AI-powered development showcase!");
    console.log("🚀 Built with React + Framer Motion + Tailwind CSS");
    console.log("⚡ Optimized for performance and accessibility");
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            key="loading"
            onLoadingComplete={handleLoadingComplete}
          />
        ) : (
          <div key="main">
            <ScrollProgress />
            <HeroSection />
            <PainPointsSection />
            <SolutionsSection />
            <ServicesSection />
            <TeamSection />
            <TestimonialsSection />
            <PartnershipsSection />
            <ContactSection />
            <Footer />
            <FloatingCTA />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
