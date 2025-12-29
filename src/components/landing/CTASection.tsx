import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Claim Your Money?
            </h2>
            <p className="font-subheading text-lg md:text-xl text-primary-foreground/90 mb-10">
              Got questions? Our team is here to help you navigate the claims process. 
              Reach out and we'll get back to you quickly.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a 
                href="mailto:hello@boltfunds.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-subheading font-bold text-lg rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a 
                href="tel:+1234567890"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-subheading font-semibold text-lg rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>

            {/* Additional info */}
            <p className="font-body text-sm text-primary-foreground/70">
              Received a letter from us? Have your claim reference number ready when you reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;