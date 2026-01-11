import { Shield, Sparkles, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Curated Excellence",
    description: "Every recommendation is carefully vetted to ensure quality and relevance.",
  },
  {
    icon: Shield,
    title: "Unbiased Insights",
    description: "Honest, transparent reviews that prioritize your needs over anything else.",
  },
  {
    icon: Sparkles,
    title: "Constant Discovery",
    description: "We continuously explore emerging trends to bring you the latest and best.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-6">
              Forging Clarity in a<br />
              <span className="text-gradient">World of Choices</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Astral Forge was born from a simple belief: finding the right tools, 
              resources, and insights shouldn't be overwhelming. We cut through the noise 
              to deliver recommendations that truly matter—helping you navigate technology, 
              lifestyle, and everything in between with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our team of dedicated researchers and enthusiasts spends countless hours 
              testing, comparing, and evaluating so you don't have to. The result? 
              A trusted resource that saves you time and helps you make smarter decisions.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-card border border-border rounded-3xl p-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-semibold">5+</div>
                      <div className="text-xs text-muted-foreground">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
