import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import Product from "./produt/product";
import Logo from "../../assets/eatfit-logo.jpeg";

const Shop = () => {
	const [searchQuery, setSearchQuery] = useState("");

	// Filter products based on the search query
	const filteredProducts = PRODUCTS.filter((product) =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleSearch = () => {
		console.log("Search triggered for:", searchQuery);
	};

	return (
		<div className="shop">
			<div className="shopLogo">
				<img src={Logo} alt="logo" width="100px" height="100px" />
			</div>

			<div className="searchBar">
				<div className="searchContainer">
					<input
						type="text"
						placeholder="Search for products..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button onClick={handleSearch}>
						<span role="img" aria-label="search">
							🔍
						</span>
					</button>
				</div>
			</div>

			{/* <div className="products">
				{PRODUCTS.map((e) => (
					<Product data={e} />
				))}
			</div>
			 */}

			<div className="searchProducts">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<Product key={product.id} data={product} />
					))
				) : (
					<p>No products found.</p>
				)}
			</div>
		</div>
	);
};

export default Shop;
