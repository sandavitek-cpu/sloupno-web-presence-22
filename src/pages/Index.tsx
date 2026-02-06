import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Competitions from "@/components/Competitions";
import Youth from "@/components/Youth";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Competitions />
      <Youth />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
