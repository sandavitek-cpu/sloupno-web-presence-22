import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-4">
            Sbor dobrovolných hasičů
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-foreground mb-6">
            SDH Sloupno
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chráníme životy, majetek a přírodu. Jsme tu pro vás již desítky let
            — jako sousedé, přátelé a dobrovolníci.
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="font-display text-xs uppercase tracking-[0.2em]">Zjistit více</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
