export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  shop: string;
  shopId: string;
  rating: number;
  reviews: number;
  description: string;
  location: string;
  inStock: boolean;
}

export interface Shop {
  id: string;
  name: string;
  owner: string;
  category: string;
  location: string;
  rating: number;
  products: number;
  image: string;
}

export interface Order {
  id: string;
  product: string;
  buyer: string;
  amount: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  date: string;
}

export const categories = [
  "All",
  "Handmade Crafts",
  "Fresh Produce",
  "Bakery",
  "Textiles",
  "Pottery",
  "Spices & Herbs",
  "Dairy",
  "Organic",
];

export const mockProducts: Product[] = [
  { id: "1", name: "Handwoven Jute Basket", price: 24.99, image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=400&h=400&fit=crop", category: "Handmade Crafts", shop: "Village Crafts Co.", shopId: "s1", rating: 4.8, reviews: 42, description: "Beautifully handwoven jute basket, perfect for home storage or decor.", location: "Riverside Market", inStock: true },
  { id: "2", name: "Organic Raw Honey", price: 12.50, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop", category: "Organic", shop: "Bee Haven Farm", shopId: "s2", rating: 4.9, reviews: 87, description: "Pure organic raw honey harvested from local wildflowers.", location: "Green Valley", inStock: true },
  { id: "3", name: "Sourdough Bread Loaf", price: 6.99, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop", category: "Bakery", shop: "Old Town Bakery", shopId: "s3", rating: 4.7, reviews: 156, description: "Artisan sourdough bread, slow-fermented for 24 hours.", location: "Old Town", inStock: true },
  { id: "4", name: "Hand-Thrown Clay Mug", price: 18.00, image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop", category: "Pottery", shop: "Earth & Fire Studio", shopId: "s4", rating: 4.6, reviews: 33, description: "Unique hand-thrown ceramic mug with a rustic glaze.", location: "Arts District", inStock: true },
  { id: "5", name: "Fresh Farm Eggs (Dozen)", price: 5.50, image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?w=400&h=400&fit=crop", category: "Fresh Produce", shop: "Sunrise Farm", shopId: "s5", rating: 4.9, reviews: 201, description: "Free-range farm eggs from happy hens.", location: "Countryside", inStock: true },
  { id: "6", name: "Handloom Cotton Scarf", price: 32.00, image: "https://images.unsplash.com/photo-1601924921557-45e8c0579e5e?w=400&h=400&fit=crop", category: "Textiles", shop: "Loom & Thread", shopId: "s6", rating: 4.5, reviews: 28, description: "Lightweight handloom cotton scarf in earthy tones.", location: "Heritage Lane", inStock: true },
  { id: "7", name: "Turmeric Powder (200g)", price: 4.99, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop", category: "Spices & Herbs", shop: "Spice Route", shopId: "s7", rating: 4.8, reviews: 64, description: "Freshly ground turmeric from locally grown roots.", location: "Spice Market", inStock: true },
  { id: "8", name: "Artisan Goat Cheese", price: 9.99, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop", category: "Dairy", shop: "Hilltop Dairy", shopId: "s8", rating: 4.7, reviews: 45, description: "Creamy artisan goat cheese made from farm-fresh milk.", location: "Hilltop Farm", inStock: false },
  { id: "9", name: "Bamboo Cutting Board", price: 15.00, image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop", category: "Handmade Crafts", shop: "Village Crafts Co.", shopId: "s1", rating: 4.4, reviews: 19, description: "Sustainable bamboo cutting board, handcrafted.", location: "Riverside Market", inStock: true },
  { id: "10", name: "Lavender Essential Oil", price: 14.50, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", category: "Organic", shop: "Bee Haven Farm", shopId: "s2", rating: 4.6, reviews: 37, description: "Pure lavender essential oil from local lavender fields.", location: "Green Valley", inStock: true },
  { id: "11", name: "Cinnamon Rolls (Pack of 4)", price: 8.99, image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=400&fit=crop", category: "Bakery", shop: "Old Town Bakery", shopId: "s3", rating: 4.8, reviews: 92, description: "Warm, gooey cinnamon rolls with cream cheese frosting.", location: "Old Town", inStock: true },
  { id: "12", name: "Terracotta Planter", price: 22.00, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", category: "Pottery", shop: "Earth & Fire Studio", shopId: "s4", rating: 4.5, reviews: 21, description: "Hand-shaped terracotta planter for indoor herbs.", location: "Arts District", inStock: true },
];

export const mockOrders: Order[] = [
  { id: "ORD-001", product: "Handwoven Jute Basket", buyer: "Priya M.", amount: 24.99, status: "delivered", date: "2026-03-05" },
  { id: "ORD-002", product: "Bamboo Cutting Board", buyer: "Rahul S.", amount: 15.00, status: "shipped", date: "2026-03-07" },
  { id: "ORD-003", product: "Handwoven Jute Basket", buyer: "Anita K.", amount: 24.99, status: "pending", date: "2026-03-09" },
  { id: "ORD-004", product: "Bamboo Cutting Board", buyer: "Dev P.", amount: 15.00, status: "pending", date: "2026-03-09" },
  { id: "ORD-005", product: "Handwoven Jute Basket", buyer: "Sanya R.", amount: 24.99, status: "cancelled", date: "2026-03-02" },
];

export const sellerStats = {
  totalRevenue: 1247.50,
  totalOrders: 48,
  totalProducts: 6,
  averageRating: 4.6,
  monthlyRevenue: [
    { month: "Oct", revenue: 180 },
    { month: "Nov", revenue: 320 },
    { month: "Dec", revenue: 410 },
    { month: "Jan", revenue: 290 },
    { month: "Feb", revenue: 350 },
    { month: "Mar", revenue: 197.50 },
  ],
};
