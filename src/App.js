import About from "./About";
import "./App.css";
import Nav from "./Nav";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Achievements from "./Achievements";

function App() {
	return (
		<>
			<Nav />
			<About />
			<Achievements />
			<Testimonials />
			<Pricing />
			<Contact />
		</>
	);
}

export default App;
