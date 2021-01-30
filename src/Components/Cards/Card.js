import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Card.css";

function Card() {
	return (
		<div className="card">
			<Paper
				style={{ height: "200px", width: "400px", marginTop: "20vh" }}
				elevation={5}>
				Hello World
			</Paper>
		</div>
	);
}

export default Card;
