import { motion } from "framer-motion";
import { Shield, Heart, Users, TreePine } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Ochrana obce",
    description: "Zajišťujeme požární ochranu Sloupna a okolních vesnic. Jsme připraveni zasáhnout kdykoli je potřeba.",
  },
  {
    icon: Heart,
    title: "Dobrovolnictví",
    description: "Naši členové věnují volný čas službě komunitě — z lásky k obci a sousedům.",
  },
  {
    icon: Users,
    title: "Sousedská pospolitost",
    description: "Pořádáme hasičské plesy, posvícení a setkání, která spojují celou vesnici.",
  },
  {
    icon: TreePine,
    title: "Tradice venkova",
    description: "Navazujeme na odkaz našich předků a udržujeme hasičskou tradici v naší obci.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            O nás
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
            Kdo jsme
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Sbor dobrovolných hasičů Sloupno je srdcem naší vesnice. Kromě ochrany životů 
            a majetku se věnujeme hasičským závodům, práci s dětmi a mládeží 
            a organizujeme společenské akce, které spojují celou komunitu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-warm group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
