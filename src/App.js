import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./styles/index.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/portfolio" exact element={<Portfolio />} />
				<Route path="/about" exact element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
