import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Home Baker",
    quote:
      "LocalRoots gave my small bakery a platform I could never afford. Now I have loyal customers who trust my products because of the community reviews.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Arjun Mehta",
    role: "Local Buyer",
    quote:
      "I love knowing exactly where my food comes from. The trust system on LocalRoots means I can buy fresh produce from verified farmers in my area.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Fatima Khan",
    role: "Textile Artisan",
    quote:
      "Big e-commerce sites never worked for me. LocalRoots understands small sellers. The fees are fair and the community is incredibly supportive.",
    rating: 5,
    avatar: "FK",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-3 mb-4">
            Voices from the Community
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Hear from the sellers and buyers who make LocalRoots special.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
