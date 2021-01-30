import React from "react";
import VerticalLinearStepper from "../Stepper/Stepper";
import Grid from "@material-ui/core/Grid";
import "./Section3.css";
function section3() {
	return (
		<div className="section3">
			<h1 style={{ textAlign: "center" }}>IT Solutions</h1>
			<Grid container>
				<Grid item xs={12} sm={8}>
					<VerticalLinearStepper
						style={{ backgroundColor: "transparent" }}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<img
						src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/xazi/main/assets/img/img-1.png"
						alt=""
						style={{
							height: "400px",
							maxWidth: "300px",
							objectFit: "contain",
						}}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default section3;
