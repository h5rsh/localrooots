import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, MapPin, ShoppingBag, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockProducts, categories } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("q") || "";
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high" | "rating">("default");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = mockProducts.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.shop.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price-low") items = [...items].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") items = [...items].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") items = [...items].sort((a, b) => b.rating - a.rating);

    return items;
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm font-body mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-2">Shop Local Products</h1>
            <p className="text-muted-foreground font-body">Discover authentic, locally made products from trusted community shops.</p>
          </div>

          {/* Search & filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products, shops, categories..." className="pl-10 font-body" />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="font-body">
              <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
            </Button>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm font-body text-foreground">
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Category pills */}
          {showFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-6 overflow-hidden">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-body transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results count */}
          <p className="text-sm text-muted-foreground font-body mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground font-body">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                        <Badge variant="secondary" className="font-body">Out of Stock</Badge>
                      </div>
                    )}
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground font-body text-xs">{product.category}</Badge>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground font-body mb-1">{product.shop}</p>
                    <h3 className="font-display text-lg text-foreground mb-1 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3.5 w-3.5 fill-warm text-warm" />
                      <span className="text-sm font-body text-foreground">{product.rating}</span>
                      <span className="text-xs text-muted-foreground font-body">({product.reviews})</span>
                      <span className="text-xs text-muted-foreground font-body ml-auto flex items-center gap-0.5"><MapPin className="h-3 w-3" />{product.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-primary">${product.price.toFixed(2)}</span>
                      <Button size="sm" variant="hero" disabled={!product.inStock}
                        onClick={() => toast({ title: "Added to cart!", description: `${product.name} has been added.` })}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
