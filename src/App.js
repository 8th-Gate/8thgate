import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cover from "./Components/Cover/Cover";
import Card from "./Components/Cards/Card";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
// import PricingCard from "./Components/PricingCards/PricingCard";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<Router>
			<Switch>
				<div className="app">
					<Header />
					<Cover />
					<Card />
					<Section3 />
					<Section4 />
					{/* <PricingCard /> */}
					<Footer />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
