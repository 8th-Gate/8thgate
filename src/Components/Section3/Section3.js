import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import "./Section3.css";
function section3() {
	return (
		<div className="section3">
			<div className="grid__container">
				<Grid container>
					<Grid item xs={6}>
						<div className="description">
							<h3>IT Services</h3>
							<p>
								Our team will manage, control and operate your
								servers and take care of any activity on
								servers' side (domain servers, web servers...)
							</p>
						</div>
					</Grid>
					<Grid item xs={6}>
						<div className="image__container">
							{/* <img
								src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/xazi/main/assets/img/img-1.png"
								alt=""
							/> */}
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default section3;
