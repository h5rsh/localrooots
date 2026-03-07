import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A warm local marketplace with shopkeepers and community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
              🌱 Supporting Local Communities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
          >
            Shop Local.{" "}
            <span className="text-accent">Build Trust.</span>{" "}
            Grow Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed font-body"
          >
            Discover authentic, locally made products from trusted shopkeepers in your community.
            A platform built for inclusion, sustainability, and real human connection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg">
              Explore Local Shops
            </Button>
            <Button variant="hero-outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Become a Seller
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-8 text-primary-foreground/70 text-sm font-body"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl text-accent">500+</span>
              <span>Local Shops</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl text-accent">10K+</span>
              <span>Happy Buyers</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-semibold text-2xl text-accent">50+</span>
              <span>Communities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
