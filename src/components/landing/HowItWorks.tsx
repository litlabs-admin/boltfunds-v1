import { useState } from "react";
import { QrCode, FileSignature, ScanFace, CheckCircle, Play } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    step: "01",
    title: "Scan & Verify",
    description: "Scan the QR code from your letter and confirm your zip code to unlock your claim details securely.",
  },
  {
    icon: FileSignature,
    step: "02",
    title: "Sign Digitally",
    description: "E-sign the official Florida recovery agreement directly in your browser. No printing, no mailing.",
  },
  {
    icon: ScanFace,
    step: "03",
    title: "Verify Identity",
    description: "Quick ID scan plus a selfie to verify you're the rightful owner. Takes less than 2 minutes.",
  },
];

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-subheading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="font-subheading text-lg text-muted-foreground">
            Our streamlined process makes claiming your money fast and easy. 
            Complete everything from your phone in just three simple steps.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div 
            className="relative aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl overflow-hidden border border-border shadow-lg group cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? (
              <>
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Play button */}
                  <button 
                    className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </button>
                  <p className="mt-6 font-subheading text-muted-foreground text-sm md:text-base">
                    Watch how it works in 2 minutes
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-secondary/50 rounded-full" />
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary/50 rounded-full" />
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary/30 rounded-full" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                <p className="font-subheading text-muted-foreground">
                  Video placeholder - Replace with actual video
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-subheading font-medium text-foreground">
              Average completion time: <span className="text-primary font-bold">Under 5 minutes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;