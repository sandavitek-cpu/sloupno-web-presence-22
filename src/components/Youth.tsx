import { motion } from "framer-motion";
import { Baby, GraduationCap, Medal, Smile } from "lucide-react";

const youthFeatures = [
  {
    icon: Baby,
    title: "Přípravka",
    description: "Pro ty nejmenší — hravá forma seznámení s hasičstvím od 3 let.",
  },
  {
    icon: Smile,
    title: "Mladí hasiči",
    description: "Děti a mládež se učí hasičským dovednostem, týmové spolupráci a disciplíně.",
  },
  {
    icon: Medal,
    title: "Dětské soutěže",
    description: "Pravidelně se účastníme soutěží Plamen a Hry bez hranic pro mladé hasiče.",
  },
  {
    icon: GraduationCap,
    title: "Výchova budoucnosti",
    description: "Vychováváme novou generaci dobrovolných hasičů, kteří jednou převezmou štafetu.",
  },
];

const Youth = () => {
  return (
    <section id="youth" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
        backgroundSize: "48px 48px"
      }} />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-secondary mb-3">
            Mládež
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
            Pracujeme s dětmi
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Mladí hasiči jsou naší chloubou a budoucností. Dětem nabízíme smysluplné
            volnočasové aktivity, učíme je týmové práci a připravujeme je na soutěže.
            U nás si děti vybudují kamarádství na celý život.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {youthFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 bg-card rounded-lg border border-border shadow-card hover:shadow-warm hover:border-secondary/40 transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/15 transition-colors duration-500">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Youth;
