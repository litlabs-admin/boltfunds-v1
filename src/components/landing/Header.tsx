import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoLimeBg from "@/assets/logo-lime-bg.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#trust", label: "Security" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/5 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img 
            src={logoLimeBg} 
            alt="Bolt Funds" 
            className="h-10 md:h-12 w-auto rounded-md transition-all duration-300"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-subheading text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a 
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-subheading font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              className="md:hidden p-2 text-foreground hover:bg-foreground/10 rounded-lg transition-colors" 
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background border-l border-border/20">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="font-subheading text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-subheading font-semibold text-base rounded-lg hover:bg-primary/90 transition-colors mt-4"
              >
                Get Started
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;