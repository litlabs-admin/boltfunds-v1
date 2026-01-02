import logoBlueBg from "@/assets/logo-blue-bg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <img 
              src={logoBlueBg} 
              alt="Bolt Funds" 
              className="h-12 w-auto mb-4 rounded-md"
            />
            <p className="font-body text-background/70 max-w-sm mb-6">
              Helping Florida residents recover their unclaimed property quickly and securely. 
              100% digital, mobile-first claim processing.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="font-body text-background/70 hover:text-secondary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#trust" className="font-body text-background/70 hover:text-secondary transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#contact" className="font-body text-background/70 hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="font-body text-background/70 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="font-body text-background/70 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="font-body text-background/70 hover:text-secondary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/50">
              © {currentYear} Bolt Funds. All rights reserved.
            </p>
            <p className="font-body text-sm text-background/50">
              Florida Unclaimed Property Recovery Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;