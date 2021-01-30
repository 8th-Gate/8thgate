import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Page from "./Components/Pages/Page";
function App() {
	return (
		<Router>
			<Header />
			<div className="app">
				<Page />
			</div>
		</Router>
	);
}

export default App;
