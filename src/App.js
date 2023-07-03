import About from "./About";
import "./App.css";
import Nav from "./Nav";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Achievements from "./Achievements";
import Faq from "./Faq";

function App() {
	return (
		<>
			<Nav />
			<About />
			<Achievements />
			<Testimonials />
			<Pricing />
			<Contact />
			<Faq />
		</>
	);
}

export default App;
