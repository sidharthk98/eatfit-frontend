import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./produt/product";
import Logo from "../../assets/eatfit-logo.jpeg";

const Shop = () => {
	return (
		<div className="shop">
			<div className="shopLogo">
				<img src={Logo} alt="logo" width="100px" height="100px" />
			</div>
			<div className="products">
				{PRODUCTS.map((e) => (
					<Product data={e} />
				))}
			</div>
		</div>
	);
};

export default Shop;
