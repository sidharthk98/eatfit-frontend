import React from "react";
import Navbar from "../components/navbar/navbar.jsx";
import Shop from "./shop/shop.jsx";
import Footer from "../components/footer/footer.jsx";

const HomePage = () => {
	return (
		<div style={{ overflowX: "hidden" }} className="container">
			<Navbar />
			<Shop />
			<Footer />
		</div>
	);
};

export default HomePage;
