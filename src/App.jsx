import { useState, useEffect } from "react";
import "./App.css";

// Import components for each section
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add console easter egg for developers
    console.log("🤖 AI devs > regular devs 😉");
    console.log("Welcome to our AI-powered development showcase!");

    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
