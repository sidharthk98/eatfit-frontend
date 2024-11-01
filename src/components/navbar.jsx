import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const Navbar = () => {
  const { getTotalCartQuantity } = useContext(ShopContext);
  const cartCount = getTotalCartQuantity();

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="Login" className="login">
          Login
        </Link>
        <Link to="/cart">
          <MdOutlineShoppingCart size={35} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
