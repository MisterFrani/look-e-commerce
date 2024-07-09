import React, { createContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  price: number;
  quantity: number;
  name: string;
  image: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotal: () => number;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (itemId: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getTotal,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
