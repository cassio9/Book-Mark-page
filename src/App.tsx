import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Extensions from "./components/Extensions";
import FAQ from "./components/FAQ";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-white font-Rubik">
			<Header />
			<Hero />
			<Features />
			<Extensions />
			<FAQ />
			<SignUp />
			<Footer />
		</div>
	);
}

export default App;
