import React from "react";
import VerticalLinearStepper from "../Stepper/Stepper";
import Grid from "@material-ui/core/Grid";

import "./Section3.css";

function section3() {
	return (
		<div className="section3">
			<h1
				style={{
					textAlign: "center",
					paddingTop: "5vh",
					paddingBottom: "5vh",
				}}>
				IT Solutions
			</h1>

			<Grid container>
				<Grid item xs={12} sm={6}>
					<div className="stepper__container">
						<VerticalLinearStepper
							style={{
								backgroundColor: "transparent",
							}}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} style={{ position: "relative" }}>
					<div
						className="image__container"
						style={{
							width: "100%",
							position: "absolute",
						}}>
						<img
							src="https://umtco.com/img/services/it-services.jpg"
							alt=""
							style={{
								maxWidth: "100%",
								objectFit: "contain",
							}}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default section3;
