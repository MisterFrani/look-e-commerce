import React, { useState, useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext, CartContextType } from "../context/Context";
import logo from "../../public/look-icon.svg";

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(CartContext) as CartContextType;

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white">
      <nav className="flex justify-between items-center py-5 px-2  max-w-[1830px] mx-auto">
        <Link to="/" className="flex items-center text-black text-2xl">
          <img
            src={logo}
            alt="Look"
            className="h-6 mr-2 -mt-1"
          />
          <span className="-ml-2">Look</span>
        </Link>
        <div>
          <button
            onClick={handleCartOpen}
            className="text-black text-2xl relative"
          >
            <HiOutlineShoppingBag />
            {totalItems > 0 && (
              <span className="absolute top-0 left-3 bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
        <Cart isCartOpen={isCartOpen} handleCartClose={handleCartClose} />
      </nav>
    </header>
  );
};

export default Header;
