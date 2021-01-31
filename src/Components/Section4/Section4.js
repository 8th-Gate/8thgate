import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Section4.css";
import VerticalLinearStepperV2 from "./StepperV2";
function Section4() {
	return (
		<div className="section4">
			<h1
				style={{
					textAlign: "center",
					paddingTop: "5vh",
					paddingBottom: "5vh",
				}}>
				Developers Services
			</h1>
			<Grid container>
				<Grid
					item
					xs={12}
					sm={6}
					style={{
						paddingLeft: "10%",
						paddingTop: "20vh",
						position: "relative",
					}}>
					<div
						className="image__container"
						style={{
							width: "100%",
						}}>
						<img
							src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/xazi/main/assets/img/img-2.png"
							alt=""
							style={{
								height: "400px",
								maxWidth: "100%",
								objectFit: "contain",
							}}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} style={{ paddingLeft: "10%" }}>
					<div className="stepperContainer">
						<VerticalLinearStepperV2
							style={{ backgroundColor: "transparent" }}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Section4;
