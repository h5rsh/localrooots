import { Shield, MapPin, Recycle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Trust-Based Commerce",
    description:
      "Every seller is verified and reviewed by the community. Shop with confidence knowing you're supporting real local businesses.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Discovery",
    description:
      "Find shops and products right in your neighborhood. Support the people who make your community thrive.",
  },
  {
    icon: Recycle,
    title: "Sustainable Shopping",
    description:
      "Reduce carbon footprints by shopping locally. Fresh products, shorter supply chains, less waste.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Built for inclusion and accessibility. Everyone deserves a platform — from street vendors to home bakers.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why LocalRoots?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-3 mb-4">
            More Than Just a Marketplace
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            We're building an ecosystem where small shopkeepers thrive and communities grow stronger through trust and local commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
