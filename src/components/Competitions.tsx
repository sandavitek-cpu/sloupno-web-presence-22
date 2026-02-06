import { motion } from "framer-motion";
import { Timer, Trophy, Target, Zap } from "lucide-react";

const disciplines = [
  {
    icon: Timer,
    title: "Požární útok",
    description: "Klasická hasičská disciplína — sestavení proudnice a zásah terčů na čas. Naše domácí soutěž!",
  },
  {
    icon: Target,
    title: "Štafeta 4×100 m",
    description: "Běžecká štafeta s překonáváním překážek a plněním hasičských úkolů.",
  },
  {
    icon: Zap,
    title: "Běh na 100 m s překážkami",
    description: "Individuální disciplína testující rychlost, obratnost a techniku.",
  },
  {
    icon: Trophy,
    title: "Soutěže a ligy",
    description: "Účastníme se okrskových, okresních i pohárových soutěží v celém regionu.",
  },
];

const Competitions = () => {
  return (
    <section id="competitions" className="py-24 md:py-32 bg-gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Hasičské závody
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
            Závodíme s vášní
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Hasičský sport je naší velkou vášní. Pravidelně trénujeme a účastníme se 
            soutěží v požárním útoku i dalších disciplínách. Na závodech nechybí skvělá 
            atmosféra a podpora celé vesnice!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {disciplines.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-5 p-6 bg-card rounded-lg border border-border shadow-card hover:shadow-warm hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
