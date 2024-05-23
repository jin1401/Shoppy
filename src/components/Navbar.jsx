import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <GiShoppingBag />
        <h1>Vintage Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <FaPencilAlt />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
