import React from "react";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Footer from "./components/footer";

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
