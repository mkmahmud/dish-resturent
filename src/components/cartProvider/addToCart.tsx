"use client";
// components/CartProvider.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface Product {
  id: number;
  status: boolean;
  name?: string;
  price?: number;
  ingredients?: string[];
  description?: string;
  img?: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getTotal: () => number;
}

const CART_STORAGE_KEY = "cartData";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + (product.price || 0), 0);
  };

  const saveCartToLocalStorage = (cartData: Product[]) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
  };

  useEffect(() => {
    const storedCartData = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCartData) {
      setCart(JSON.parse(storedCartData));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
