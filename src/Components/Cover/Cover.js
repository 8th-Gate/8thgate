import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Cover.css";

function Cover() {
	return (
		<div className="cover">
			<div className="cover__description">
				<Grid container>
					<Grid item xs={8}>
						<Typography
							style={{ fontWeight: "bolder", fontSize: "5vh" }}>
							IT Outsourcing
						</Typography>
						<Typography variant="h6">
							We provide IT services to our customers as an
							internal IT department in their organization
						</Typography>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#0071bb",
								color: "white",
								fontWeight: "bolder",
							}}>
							{" "}
							Learn More
						</Button>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Cover;
