import { Shield, Lock, FileCheck, Award, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Florida DFS Compliant",
    description: "Fully compliant with Florida Statute 717.124 for claims under $2,000.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your data is encrypted with AES-256, the same standard used by banks.",
  },
  {
    icon: FileCheck,
    title: "No Notary Required",
    description: "Digital identity verification satisfies state requirements for smaller claims.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile",
    description: "Complete your entire claim from your phone. No printers or scanners needed.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Claims are packaged and submitted quickly for faster resolution.",
  },
  {
    icon: Award,
    title: "Trusted Process",
    description: "Using DocuSign and Stripe Identity for secure signatures and verification.",
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Security & Trust
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Security is Our Priority
          </h2>
          <p className="font-subheading text-lg text-muted-foreground">
            We use industry-leading security practices to protect your personal information 
            while ensuring full compliance with Florida state regulations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Lock className="w-6 h-6" />
              <span className="font-subheading font-medium">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Shield className="w-6 h-6" />
              <span className="font-subheading font-medium">AES-256 Encryption</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FileCheck className="w-6 h-6" />
              <span className="font-subheading font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;