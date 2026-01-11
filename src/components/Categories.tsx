import { Monitor, Lightbulb, Compass, Wrench, Heart, BookOpen } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    name: "Technology",
    description: "Gadgets, software, and digital innovations",
    count: 48,
  },
  {
    icon: Lightbulb,
    name: "Productivity",
    description: "Tools and methods to work smarter",
    count: 35,
  },
  {
    icon: Compass,
    name: "Lifestyle",
    description: "Curated picks for modern living",
    count: 42,
  },
  {
    icon: Wrench,
    name: "Everyday Tools",
    description: "Practical solutions that work",
    count: 29,
  },
  {
    icon: Heart,
    name: "Wellness",
    description: "Health, fitness, and self-care",
    count: 24,
  },
  {
    icon: BookOpen,
    name: "Learning",
    description: "Resources to expand your horizons",
    count: 31,
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Explore
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Navigate our carefully organized collections to find exactly what you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative p-6 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-primary/40 hover:bg-secondary/50 animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
