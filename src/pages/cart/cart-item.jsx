import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const CartItem = (props) => {
	const { id, name, category, price, description, image_url, rating } =
		props.data;
	const { cartItems, addProduct, deleteProduct, updateCartItemCount } =
		useContext(ShopContext);

	return (
		<div className="cartItem">
			<img src={image_url} />
			<div className="description">
				<p>
					<b>{name}</b>
				</p>
				<p> Price: ${price}</p>
				<div className="countHandler">
					<button onClick={() => deleteProduct(id)}> - </button>
					<input
						value={cartItems[id]}
						onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
					/>
					<button onClick={() => addProduct(id)}> + </button>
				</div>
			</div>
		</div>
	);
};
