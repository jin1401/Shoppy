import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <GiShoppingBag />
        <h1>Vintage Shoppys</h1>
      </Link>
      <nav className="flex items-center shrink-0 gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <FaPencilAlt />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
