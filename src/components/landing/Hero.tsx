import { ArrowRight, Shield, Smartphone, Zap } from "lucide-react";
import { AnimatedHeroText } from "@/components/ui/animated-hero";

const Hero = () => {
  const animatedWords = ["Minutes", "Seconds", "No Time", "A Flash"];

  return (
    <section className="relative min-h-screen flex items-center gradient-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="font-subheading text-sm font-medium text-primary-foreground">
              100% Digital • No Notary Required
            </span>
          </div>

          {/* Main heading with animated text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Recover Your Florida Unclaimed Money in{" "}
            <span className="inline-block h-[1.2em] min-w-[180px] md:min-w-[220px]">
              <AnimatedHeroText titles={animatedWords} interval={2500} />
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-subheading text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We help Florida residents reclaim their unclaimed property fast. 
            Scan, sign, and verify – all from your phone. No paperwork, no hassle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-subheading font-bold text-lg rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-subheading font-semibold text-lg rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
              <Smartphone className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm text-primary-foreground">Mobile-First</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm text-primary-foreground">Claims Under $2,000</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm text-primary-foreground">Florida DFS Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;