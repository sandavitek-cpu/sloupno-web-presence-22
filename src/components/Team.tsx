import { motion } from "framer-motion";
import { Flame, Truck, Droplets, Siren } from "lucide-react";

const stats = [
  { icon: Flame, value: "50+", label: "Let tradice" },
  { icon: Truck, value: "3", label: "Vozidla" },
  { icon: Droplets, value: "25+", label: "Aktivních členů" },
  { icon: Siren, value: "100+", label: "Zásahů ročně" },
];

const roles = [
  { name: "Velitel jednotky", description: "Řídí zásahovou činnost a výcvik jednotky" },
  { name: "Strojník", description: "Odpovídá za techniku a její provozuschopnost" },
  { name: "Preventista", description: "Zabezpečuje požární prevenci v obci" },
  { name: "Mladí hasiči", description: "Výchova nové generace dobrovolných hasičů" },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Naše jednotka
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
            V číslech
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-8 px-4 border border-border rounded-lg bg-card shadow-card"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-fire mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider font-display">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-2">
            Složení jednotky
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-display text-base font-semibold uppercase tracking-wide text-foreground mb-1">
                  {role.name}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
