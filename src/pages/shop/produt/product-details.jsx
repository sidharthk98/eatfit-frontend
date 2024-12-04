import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import "../shop.css";
import { PRODUCTS } from "../../../products";
import Shop from "../shop";

const ProductDetail = () => {
  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const product = PRODUCTS.find((product) => product.id === parseInt(id));
  const cartItemCount = cartItems[product.id] || 0;

  return (
    <div>
      <div className="product-detail">
        <img src={product.image_url} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <div className="cart-controls">
            {cartItemCount > 0 ? (
              <div>
                <button onClick={() => removeFromCart(product.id)}>-</button>
                <span>{cartItemCount}</span>
                <button onClick={() => addToCart(product.id)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(product.id)}>Add To Cart</button>
            )}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default ProductDetail;
