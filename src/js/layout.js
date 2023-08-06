import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Home3 } from "./views/Home3";
import injectContext from "./store/appContext";
import { Home2 } from "./views/Home2";
import { Navbar } from "./component/navbar";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container ">

			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:userId" element={<Home2 />} />
						<Route path="/planets/:userId" element={<Home3 />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
