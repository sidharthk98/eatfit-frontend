import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
		console.log(i);
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartQuantity = () => {
		let totalQuantity = 0;
		for (const item in cartItems) {
			totalQuantity += cartItems[item];
		}
		return totalQuantity;
	};

	const calculateTotal = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		console.log(totalAmount);
		return totalAmount;
	};

	const addProduct = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const deleteProduct = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const checkout = () => {
		setCartItems(getDefaultCart());
	};

	const contextValue = {
		cartItems,
		addProduct,
		updateCartItemCount,
		deleteProduct,
		calculateTotal,
		checkout,
		getTotalCartQuantity,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
