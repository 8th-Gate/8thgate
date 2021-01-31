import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Section4.css";
import VerticalLinearStepperV2 from "./StepperV2";
function Section4() {
	return (
		<div className="section4" id="dev">
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
						position: "relative",
					}}>
					<div
						className="image__container"
						style={{
							maxWidth: "100%",
							paddingTop: "8vh",
							paddingLeft: "15%",
						}}>
						<img
							src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/xazi/main/assets/img/img-2.png"
							alt=""
							style={{
								maxWidth: "80%",
								objectFit: "contain",
							}}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} style={{ paddingLeft: "10%" }}>
					<div className="stepperContainer">
						<VerticalLinearStepperV2 />
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Section4;
