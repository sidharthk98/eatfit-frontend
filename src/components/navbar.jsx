import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";
import UserAvatar from "./useravatar";

const Navbar = () => {
  const { getTotalCartQuantity } = useContext(ShopContext);
  const cartCount = getTotalCartQuantity(); // Directly call the function and store its return value

  const [isFullWindowOpen, setIsFullWindowOpen] = useState(false);

  const fullWindowRef = useRef(null);

  // Close full window if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fullWindowRef.current &&
        !fullWindowRef.current.contains(event.target) &&
        isFullWindowOpen
      ) {
        setIsFullWindowOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFullWindowOpen]);

  return (
    <div className="navbar">
      <UserAvatar />

      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="Login" className="login">
          Login
        </Link>
        <Link to="/cart" className="cart-link">
          <MdOutlineShoppingCart size={35} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
