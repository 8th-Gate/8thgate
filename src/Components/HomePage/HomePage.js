import React from "react";
import Card from "../Cards/Card";
import Cover from "../Cover/Cover";

function HomePage() {
	return (
		<div className="homepage">
			<Cover />
			<Card
				title="Cloud Solutions"
				description="Cloud services by any cloud provider"
			/>
		</div>
	);
}

export default HomePage;
