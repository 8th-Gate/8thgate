import React from "react";
import Paper from "@material-ui/core/Paper";
import ComputerIcon from "@material-ui/icons/Computer";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./Card.css";

function Card() {
	return (
		<div className="card">
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<Paper
						style={{
							position: "relative",
							minHeight: "35vh",
							maxHeight: "35vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2vh",
								left: "50%",
								color: "blue",
							}}>
							<ComputerIcon
								style={{ fontSize: "5vh", color: "#0071bb" }}
							/>
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10vh",
								fontSize: "24px",
								fontWeight: "bolder",
							}}>
							IT Services
						</div>
						<div
							className="description"
							style={{
								paddingTop: "5vh",
							}}>
							<Typography align="center" variant="h6">
								{" "}
								Manage, secure and host any of your servers,
								network and computers.
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper
						style={{
							position: "relative",
							minHeight: "35vh",
							maxHeight: "35vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2vh",
								left: "50%",
								color: "blue",
							}}>
							<DeveloperModeIcon
								style={{ fontSize: "5vh", color: "#0071bb" }}
							/>
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10vh",
								fontSize: "24px",
								fontWeight: "bolder",
							}}>
							Development Services
						</div>
						<div
							className="description"
							style={{ paddingTop: "5vh" }}>
							<Typography align="center" variant="h6">
								{" "}
								Design websites, build mobile apps, start an
								e-commerce, Machine Learning
							</Typography>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Card;
