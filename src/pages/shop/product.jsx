import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { id, name, category, price, description, image_url } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate;

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img
        src={image_url}
        alt={name}
        onClick={() => navigate("/product/${id}")}
      />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>

      {cartItemCount > 0 ? (
        <div className="cart-controls">
          <button
            className="removeFromCartBttn"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <span className="cart-count">{cartItemCount}</span>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      ) : (
        <button className="addToCart" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Product;
