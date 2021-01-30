import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

function Page() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
		</Switch>
	);
}

export default Page;
