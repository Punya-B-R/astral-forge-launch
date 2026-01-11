import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="resources" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-card border border-border overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
          
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Stay Updated
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4 max-w-2xl mx-auto">
              Get the Best Picks Delivered to Your Inbox
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Join our community and receive weekly curated recommendations, 
              exclusive insights, and early access to new guides.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-5 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="whitespace-nowrap"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
