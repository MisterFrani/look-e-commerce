import React, { useContext, useEffect, useState } from "react";
import {
  HiOutlineX,
  HiMinusSm,
  HiPlusSm,
  HiOutlineTrash,
} from "react-icons/hi";
import { CartContext, CartItem } from "../context/Context";

interface CartProps {
  isCartOpen: boolean;
  handleCartClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, handleCartClose }) => {
  const cartContext = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isCartOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isCartOpen]);

  if (!cartContext) {
    return null;
  }

  const { cart, getTotal, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartContext;

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Désolé, c'est un projet frontend!");
    }, 3000);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black z-40 transition-opacity duration-500 ${
          isCartOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCartClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full min-w-[375px] w-64 bg-white z-50 p-5 overflow-auto transition-transform duration-500 ease-in-out transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleCartClose}
          className="text-black text-2xl absolute top-2 right-2 mt-4"
        >
          <HiOutlineX />
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          {cart.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-center mb-4">Votre panier est vide</p>
            </div>
          ) : (
            <div className="flex-1 mt-20 overflow-y-auto max-h-[900px] cart">
              {cart.map((item: CartItem, index: number) => (
                <div
                  key={index}
                  className="flex items-star justify-between p-2 border-b-2 border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-30 h-40 object-cover"
                  />
                  <div className="ml-4 flex-1 border- border-gray-200">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="font-semibold text-sm text-gray-500 mt-2">
                      {item.price.toFixed(2)}€
                    </p>
                    <div className="flex flex-row items-center mt-2">
                      <div className="flex items-center border border-gray-200 py-1 px-3 ">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-gray-700"
                        >
                          <HiMinusSm />
                        </button>
                        <p className="mx-2"> {item.quantity}</p>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="text-gray-700"
                        >
                          <HiPlusSm />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-black ml-4 text-xl"
                      >
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="bg-white p-4 mt-auto">
            {cart.length > 0 && (
              <div className="flex justify-between text-lg mb-2">
                <span className="font-bold">Sous-total</span>
                <span>{getTotal().toFixed(2)} €</span>
              </div>
            )}
            {cart.length > 0 ? (
              <p className="text-[12px]">
                Taxes incluse. Frais d'expédition calculé à l'étape du paiement.
              </p>
            ) : null}
            <button
              onClick={handlePayment}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black border border-black transition-colors duration-300 mt-4 w-full"
              disabled={loading}
            >
              {loading
                ? "Chargement..."
                : cart.length === 1
                ? "Procéder au paiement"
                : "Continuer les achats"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
