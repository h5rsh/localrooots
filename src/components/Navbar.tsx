import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Leaf, Search, User, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop Local", href: "/products" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display text-xl text-foreground">LocalRoots</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm font-body"
            >
              {link.label}
            </Link>
          ))}

          {/* Search toggle */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-muted-foreground hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {user?.role === "seller" && (
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="font-body">
                    <LayoutDashboard className="h-4 w-4 mr-1" /> Dashboard
                  </Button>
                </Link>
              )}
              <div className="flex items-center gap-2">
                <img src={user?.avatar} alt="" className="h-8 w-8 rounded-full object-cover border-2 border-primary/20" />
                <span className="text-sm font-body font-medium text-foreground">{user?.displayName}</span>
              </div>
              <button onClick={logout} className="text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="hero" size="sm">
                Join the Community
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-foreground">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-border overflow-hidden bg-background"
          >
            <form onSubmit={handleSearch} className="container mx-auto px-4 py-3 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, shops, categories..."
                  className="w-full h-10 rounded-md border border-input bg-background pl-10 pr-3 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                />
              </div>
              <Button type="submit" variant="hero" size="sm">Search</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium font-body"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <img src={user?.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                    <span className="text-sm font-body font-medium text-foreground">{user?.displayName}</span>
                  </div>
                  {user?.role === "seller" && (
                    <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full font-body">
                        <LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground font-body" onClick={() => { logout(); setMobileOpen(false); }}>
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </Button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setMobileOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    Join the Community
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
