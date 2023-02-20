import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./scenes/home";
import ItemDetails from "./scenes/itemDetails";
import Checkout from "./scenes/checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
import NavBar from "./scenes/global/NavBar";
import Footer from "./scenes/global/Footer";

const ScrollToTop = function () {
	const pathName = useLocation().pathname;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathName]);

	return null;
};

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<NavBar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="item/:itemId" element={<ItemDetails />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="checkout/success" element={<Confirmation />} />
				</Routes>
				<CartMenu />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
