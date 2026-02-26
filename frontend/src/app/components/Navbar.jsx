"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { CartContext } from "../context/cartContext";

const Navbar = () => {
  const { getCartCount, setShowCart, showCart } = useContext(CartContext);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? "text-glams-pink" : "";
  };
  return (
    <div className="fixed z-50 w-full px-5 md:px-20 bg-white py-3 md:py-5 shadow-sm flex items-center justify-between">
      <div className="font-great-vibes text-glams-pink text-2xl">
        <Link href="/">Glams Wardrobe</Link>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-10 font-poppins">
          <li>
            <Link
              href="/"
              className={`hover:text-glams-pink transition-colors duration-300 ${isActive("/")}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-glams-pink transition-colors duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-glams-pink transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-glams-pink transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Search className="hover:text-glams-pink transition-colors duration-300 cursor-pointer" />
        </div>
        <div className="relative flex items-center gap-2" title="CART">
          <ShoppingBag
            onClick={() => setShowCart(!showCart)}
            className="hover:text-glams-pink transition-colors duration-300 cursor-pointer"
          />
          <span className="absolute -top-1 -right-1 bg-glams-pink text-white rounded-full px-1.5 text-xs">
            {getCartCount()}
          </span>
        </div>
        <button className="hidden md:block bg-black hover:bg-glams-pink transition-colors duration-300 text-white px-6 py-2 rounded-full cursor-pointer text-sm font-bold">
          PROFILE
        </button>
        <div className="md:hidden">
          <Menu className="hover:text-glams-pink transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
