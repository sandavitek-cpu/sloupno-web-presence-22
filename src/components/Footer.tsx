import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary" />
            <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              SDH Sloupno
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sbor dobrovolných hasičů Sloupno. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
