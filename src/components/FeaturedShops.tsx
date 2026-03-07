import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const shops = [
  {
    name: "Anita's Organic Farm",
    category: "Fresh Produce",
    location: "Green Valley",
    rating: 4.9,
    reviews: 128,
    image: "🥬",
    tag: "Top Rated",
  },
  {
    name: "Pottery by Ravi",
    category: "Handcrafted Goods",
    location: "Old Town",
    rating: 4.8,
    reviews: 86,
    image: "🏺",
    tag: "Artisan",
  },
  {
    name: "Baker's Delight",
    category: "Bakery & Sweets",
    location: "Market Street",
    rating: 4.7,
    reviews: 214,
    image: "🍞",
    tag: "Popular",
  },
  {
    name: "Weaves & Threads",
    category: "Textiles & Clothing",
    location: "Craft Lane",
    rating: 4.9,
    reviews: 67,
    image: "🧶",
    tag: "New",
  },
  {
    name: "Spice Garden",
    category: "Spices & Herbs",
    location: "Heritage Road",
    rating: 4.6,
    reviews: 153,
    image: "🌶️",
    tag: "Verified",
  },
  {
    name: "Honey & Hive",
    category: "Natural Products",
    location: "Hillside",
    rating: 4.8,
    reviews: 92,
    image: "🍯",
    tag: "Organic",
  },
];

const FeaturedShops = () => {
  return (
    <section id="shops" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Featured Shops
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-3 mb-4">
            Meet Your Local Sellers
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Real people, real products, right in your neighborhood.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop, i) => (
            <motion.div
              key={shop.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="bg-primary/5 h-32 flex items-center justify-center text-5xl group-hover:bg-primary/10 transition-colors">
                {shop.image}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                    {shop.tag}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-warm text-warm" />
                    <span className="font-semibold text-foreground">{shop.rating}</span>
                    <span className="text-muted-foreground">({shop.reviews})</span>
                  </div>
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  {shop.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body mb-2">
                  {shop.category}
                </p>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <MapPin className="h-3.5 w-3.5" />
                  {shop.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShops;
