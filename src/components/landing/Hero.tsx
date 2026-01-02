import { ArrowRight, Shield, Smartphone, Zap } from "lucide-react";
import logoBlueOnLime from "@/assets/logo-blue-on-lime.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary/10 via-primary/5 to-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-subheading text-sm font-medium text-foreground">
              100% Digital • No Notary Required
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Recover Your Florida Unclaimed Money in{" "}
            <span className="text-primary">Minutes</span>
          </h1>

          {/* Subheading */}
          <p className="font-subheading text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We help Florida residents reclaim their unclaimed property fast. 
            Scan, sign, and verify – all from your phone. No paperwork, no hassle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-subheading font-bold text-lg rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-subheading font-semibold text-lg rounded-xl border border-border hover:bg-muted transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-foreground">Mobile-First</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-foreground">Claims Under $2,000</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-foreground">Florida DFS Compliant</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;