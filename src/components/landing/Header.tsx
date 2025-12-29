import logoLimeOnBlue from "@/assets/logo-lime-on-blue.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <img 
            src={logoLimeOnBlue} 
            alt="Bolt Funds" 
            className="h-10 md:h-12 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="font-subheading text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#trust" className="font-subheading text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Security
          </a>
          <a href="#contact" className="font-subheading text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <a 
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-subheading font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-foreground" aria-label="Open menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;