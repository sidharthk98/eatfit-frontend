import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import "../shop.css";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
	const { id, name, price, image_url, rating } = props.data;
	const { addProduct, cartItems, deleteProduct } = useContext(ShopContext);
	const navigate = useNavigate;

	const cartItemCount = cartItems[id];

	const StarRating = ({ rating }) => {
		return (
			<div className="stars">
				<div
					className="filled-stars"
					style={{ width: `${(rating / 5) * 100}%` }}></div>
			</div>
		);
	};

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
				<p className="rating">
					<StarRating rating={rating} /> {rating}
				</p>
				<p> ${price}</p>
			</div>

			{cartItemCount > 0 ? (
				<div className="cart-controls">
					<button
						className="deleteProductBttn"
						onClick={() => deleteProduct(id)}>
						-
					</button>
					<span className="cart-count">{cartItemCount}</span>
					<button className="addProductBttn" onClick={() => addProduct(id)}>
						+
					</button>
				</div>
			) : (
				<button className="addProduct" onClick={() => addProduct(id)}>
					Add To Cart
				</button>
			)}
		</div>
	);
};

export default Product;
