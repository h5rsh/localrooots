import { createContext, useContext, useState, ReactNode } from "react";

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  avatar: string;
  role: "buyer" | "seller";
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: "buyer" | "seller") => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockBuyer: UserProfile = {
  id: "u1",
  email: "buyer@localroots.com",
  displayName: "Priya Sharma",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  role: "buyer",
};

const mockSeller: UserProfile = {
  id: "u2",
  email: "seller@localroots.com",
  displayName: "Ravi Kumar",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  role: "seller",
  phone: "+91 98765 43210",
  address: "Riverside Market, Old Town",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  const login = async (email: string, _password: string) => {
    // Mock: simulate login
    await new Promise((r) => setTimeout(r, 800));
    if (email.includes("seller")) {
      setUser(mockSeller);
    } else {
      setUser(mockBuyer);
    }
  };

  const signup = async (_email: string, _password: string, name: string, role: "buyer" | "seller") => {
    await new Promise((r) => setTimeout(r, 800));
    setUser({
      id: "new-user",
      email: _email,
      displayName: name,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      role,
    });
  };

  const loginWithGoogle = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setUser(mockBuyer);
  };

  const loginWithApple = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setUser(mockBuyer);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, loginWithGoogle, loginWithApple, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
