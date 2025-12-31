import { CheckCircle } from "lucide-react";

const highlights = [
  "Modern responsive designs",
  "SEO optimized websites",
  "Clean, maintainable code",
  "Fast loading performance",
  "Cross-browser compatibility",
  "Ongoing support & maintenance",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Create Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At MainCrafts, we specialize in crafting beautiful, high-performance 
              websites that help businesses thrive in the digital age. Our team combines 
              creativity with technical expertise to deliver solutions that exceed expectations.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card-gradient p-8 md:p-12">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "100+", label: "Happy Clients" },
                  { number: "500+", label: "Projects Done" },
                  { number: "15+", label: "Team Members" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/30 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
