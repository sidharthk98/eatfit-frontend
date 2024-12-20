import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

import "./cart.css";
export const Cart = () => {
	const { cartItems, calculateTotal, checkout } = useContext(ShopContext);
	const totalAmount = calculateTotal();

	const navigate = useNavigate();

	return (
		<div className="cart">
			<Navbar />
			<div>
				<h1>Your Cart Items</h1>
			</div>
			<div className="cart">
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} />;
					}
				})}
			</div>

			{totalAmount > 0 ? (
				<div className="checkout">
					<p> Subtotal: ${totalAmount} </p>
					<button className="continueButton" onClick={() => navigate("/")}>
						{" "}
						Continue Shopping{" "}
					</button>
					<button
						className="checkoutButton"
						onClick={() => {
							checkout();
							navigate("/checkout");
						}}>
						{" "}
						Checkout{" "}
					</button>
				</div>
			) : (
				<h1> Your Shopping Cart is Empty</h1>
			)}
		</div>
	);
};
