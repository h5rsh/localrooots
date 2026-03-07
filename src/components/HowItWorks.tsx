import { UserPlus, Store, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description: "Create your account as a buyer or seller in just a few taps.",
  },
  {
    icon: Store,
    step: "02",
    title: "Discover or List",
    description: "Browse local shops near you, or list your own products as a seller.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Shop with Trust",
    description: "Order from verified sellers. Pay securely. Get products delivered or pick up locally.",
  },
  {
    icon: Star,
    step: "04",
    title: "Review & Grow",
    description: "Leave reviews, build your reputation, and strengthen the local network.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Simple & Easy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-3 mb-4">
            How LocalRoots Works
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Getting started is as simple as walking into your neighborhood shop.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
