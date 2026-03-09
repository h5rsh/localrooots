import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-leaf/10 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-primary-foreground mb-4">
            Ready to Support Your Local Community?
          </h2>
          <p className="text-primary-foreground/80 text-lg font-body mb-8">
            Whether you're a buyer looking for authentic products or a seller ready to grow,
            LocalRoots is your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg">
              Start Shopping
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Register Your Shop
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
