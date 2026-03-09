import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Package, DollarSign, ShoppingCart, Star, Plus, Pencil, Trash2, Leaf, LogOut, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { mockProducts, mockOrders, sellerStats } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";

const StatCard = ({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) => (
  <div className="bg-card rounded-xl border border-border p-5">
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2 rounded-lg ${color}`}><Icon className="h-5 w-5" /></div>
      <span className="text-sm text-muted-foreground font-body">{label}</span>
    </div>
    <p className="font-display text-2xl text-foreground">{value}</p>
  </div>
);

const statusColors: Record<string, string> = {
  pending: "bg-warm/10 text-warm border-warm/20",
  shipped: "bg-primary/10 text-primary border-primary/20",
  delivered: "bg-leaf/10 text-leaf border-leaf/20",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const SellerDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "orders">("overview");
  const sellerProducts = mockProducts.filter((p) => p.shopId === "s1");

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: BarChart3 },
    { id: "products" as const, label: "Products", icon: Package },
    { id: "orders" as const, label: "Orders", icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-6 hidden lg:flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display text-xl text-foreground">LocalRoots</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-body transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
              <tab.icon className="h-4 w-4" /> {tab.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-border pt-4 mt-4">
          <div className="flex items-center gap-3 mb-3">
            <img src={user?.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
            <div>
              <p className="text-sm font-body font-semibold text-foreground">{user?.displayName || "Seller"}</p>
              <p className="text-xs text-muted-foreground font-body">{user?.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground font-body" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden bg-card border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-display text-lg text-foreground">LocalRoots</span>
          </Link>
          <Button variant="ghost" size="sm" onClick={logout}><LogOut className="h-4 w-4" /></Button>
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body whitespace-nowrap ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              <tab.icon className="h-4 w-4" /> {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="lg:ml-64 p-6 lg:p-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-display text-3xl text-foreground mb-1">
            {activeTab === "overview" && "Dashboard"}
            {activeTab === "products" && "Your Products"}
            {activeTab === "orders" && "Orders"}
          </h1>
          <p className="text-muted-foreground font-body mb-8">
            {activeTab === "overview" && "Here's how your shop is performing."}
            {activeTab === "products" && "Manage your product listings."}
            {activeTab === "orders" && "Track and manage customer orders."}
          </p>

          {activeTab === "overview" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                <StatCard icon={DollarSign} label="Total Revenue" value={`$${sellerStats.totalRevenue.toFixed(2)}`} color="bg-primary/10 text-primary" />
                <StatCard icon={ShoppingCart} label="Total Orders" value={String(sellerStats.totalOrders)} color="bg-accent/10 text-accent" />
                <StatCard icon={Package} label="Products" value={String(sellerStats.totalProducts)} color="bg-warm/10 text-warm" />
                <StatCard icon={Star} label="Avg Rating" value={String(sellerStats.averageRating)} color="bg-leaf/10 text-leaf" />
              </div>

              {/* Revenue chart placeholder */}
              <div className="bg-card rounded-xl border border-border p-6 mb-8">
                <h3 className="font-display text-lg text-foreground mb-4">Monthly Revenue</h3>
                <div className="flex items-end gap-3 h-40">
                  {sellerStats.monthlyRevenue.map((m) => (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div initial={{ height: 0 }} animate={{ height: `${(m.revenue / 450) * 100}%` }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full bg-primary/80 rounded-t-md min-h-[4px]" />
                      <span className="text-xs text-muted-foreground font-body">{m.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent orders */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-5 border-b border-border">
                  <h3 className="font-display text-lg text-foreground">Recent Orders</h3>
                </div>
                <div className="divide-y divide-border">
                  {mockOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4">
                      <div>
                        <p className="text-sm font-body font-semibold text-foreground">{order.id}</p>
                        <p className="text-xs text-muted-foreground font-body">{order.product} · {order.buyer}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`font-body text-xs ${statusColors[order.status]}`}>{order.status}</Badge>
                        <span className="text-sm font-body font-semibold text-foreground">${order.amount.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "products" && (
            <>
              <div className="flex justify-between items-center mb-6">
                <Input placeholder="Search your products..." className="max-w-xs font-body" />
                <Button variant="hero" onClick={() => toast({ title: "Coming soon!", description: "Product creation will be available with a real backend." })}>
                  <Plus className="h-4 w-4 mr-2" /> Add Product
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {sellerProducts.map((product) => (
                  <div key={product.id} className="bg-card rounded-xl border border-border overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-display text-foreground">{product.name}</h4>
                          <p className="text-sm text-muted-foreground font-body">{product.category}</p>
                        </div>
                        <span className="font-display text-lg text-primary">${product.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="h-3.5 w-3.5 fill-warm text-warm" />
                        <span className="text-sm font-body text-foreground">{product.rating}</span>
                        <span className="text-xs text-muted-foreground font-body">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 font-body"><Pencil className="h-3 w-3 mr-1" /> Edit</Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive font-body"><Trash2 className="h-3 w-3" /></Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left p-4 text-sm font-body font-semibold text-foreground">Order ID</th>
                      <th className="text-left p-4 text-sm font-body font-semibold text-foreground">Product</th>
                      <th className="text-left p-4 text-sm font-body font-semibold text-foreground">Buyer</th>
                      <th className="text-left p-4 text-sm font-body font-semibold text-foreground">Amount</th>
                      <th className="text-left p-4 text-sm font-body font-semibold text-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-body font-semibold text-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-secondary/30 transition-colors">
                        <td className="p-4 text-sm font-body font-semibold text-foreground">{order.id}</td>
                        <td className="p-4 text-sm font-body text-foreground">{order.product}</td>
                        <td className="p-4 text-sm font-body text-muted-foreground">{order.buyer}</td>
                        <td className="p-4 text-sm font-body text-foreground">${order.amount.toFixed(2)}</td>
                        <td className="p-4"><Badge variant="outline" className={`font-body text-xs ${statusColors[order.status]}`}>{order.status}</Badge></td>
                        <td className="p-4 text-sm font-body text-muted-foreground">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default SellerDashboard;
