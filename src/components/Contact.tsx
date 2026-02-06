import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Adresa",
    lines: ["Hasičská zbrojnice", "Sloupno, Česká republika"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+420 XXX XXX XXX"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["sdh.sloupno@email.cz"],
  },
  {
    icon: Clock,
    title: "Výcvik",
    lines: ["Každou středu", "18:00 – 20:00"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Kontakt
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
            Spojte se s námi
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Máte zájem o členství, chcete přihlásit dítě k mladým hasičům 
            nebo se chcete na něco zeptat? Neváhejte se ozvat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-lg border border-border bg-card shadow-card hover:shadow-warm hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold uppercase tracking-wider text-foreground mb-3">
                {item.title}
              </h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-muted-foreground text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
