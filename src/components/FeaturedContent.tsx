import { ArrowUpRight, Clock, TrendingUp } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    category: "Technology",
    title: "The Essential Guide to Smart Home Automation in 2025",
    description: "Transform your living space with cutting-edge devices that simplify your daily routine.",
    readTime: "8 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    category: "Productivity",
    title: "Mastering Deep Work: Tools & Techniques for Peak Focus",
    description: "Unlock your full potential with proven strategies and the right digital toolkit.",
    readTime: "6 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    category: "Lifestyle",
    title: "Minimalist Living: Curating Quality Over Quantity",
    description: "Discover how intentional choices lead to a more fulfilling and organized life.",
    readTime: "5 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=400&fit=crop",
  },
];

const FeaturedContent = () => {
  return (
    <section id="discover" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Featured
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-4">
            Curated for You
          </h2>
          <p className="text-muted-foreground text-lg">
            Hand-picked content to inspire and inform your next discovery.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-card border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-lg animate-fade-up opacity-0`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Trending Badge */}
                {item.trending && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
