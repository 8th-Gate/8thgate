import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Section4.css";
import VerticalLinearStepperV2 from "./StepperV2";
function Section4() {
	return (
		<div className="section4">
			<h1 style={{ textAlign: "center" }}>Developers Services</h1>
			<Grid container>
				<Grid
					item
					xs={12}
					sm={6}
					style={{ paddingLeft: "10%", paddingTop: "10vh" }}>
					<img
						src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/xazi/main/assets/img/img-2.png"
						alt=""
						style={{
							height: "400px",
							maxWidth: "300px",
							objectFit: "contain",
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} style={{ paddingLeft: "10%" }}>
					<VerticalLinearStepperV2
						style={{ backgroundColor: "transparent" }}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Section4;
