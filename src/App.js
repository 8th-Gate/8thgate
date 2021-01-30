import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cover from "./Components/Cover/Cover";
import Card from "./Components/Cards/Card";
import Section3 from "./Components/Section3/Section3";

function App() {
	return (
		<Router>
			<Switch>
				<div className="app">
					<Header />
					<Cover />
					<Card />
					<Section3 />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
