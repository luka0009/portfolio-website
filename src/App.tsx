import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<>
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
