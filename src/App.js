import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cover from "./Components/Cover/Cover";
import Card from "./Components/Cards/Card";

function App() {
	return (
		<Router>
			<Switch>
				<div className="app">
					<Header />
					<Cover />
					<Card />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
