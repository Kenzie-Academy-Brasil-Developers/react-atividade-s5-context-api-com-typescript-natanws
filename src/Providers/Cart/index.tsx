import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (productToBeDeleted: Product, productIndex: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const deleteProduct = (productToBeDeleted: Product, productIndex: number) => {
    const newCart = cart.filter((_, index) => index !== productIndex);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
