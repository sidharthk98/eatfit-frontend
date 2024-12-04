import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ProductDetail from "./pages/shop/produt/product-details.jsx";

function App() {
	return (
		<ShopContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/Login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/product/:id" element={<ProductDetail />} />
				</Routes>
			</Router>
		</ShopContextProvider>
	);
}

export default App;
