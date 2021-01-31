import React from "react";
import Paper from "@material-ui/core/Paper";
import ComputerIcon from "@material-ui/icons/Computer";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import "./Card.css";

function Card() {
	return (
		<div className="card">
			<Paper
				style={{
					position: "relative",
					minHeight: "30vh",
					maxHeight: "35vh",
					maxWidth: "40vw",
				}}
				elevation={12}>
				<div
					className="logo"
					style={{
						position: "absolute",
						top: "2vh",
						left: "19vw",
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
						fontSize: "3vh",
						fontWeight: "bolder",
					}}>
					IT Services
				</div>
				<div
					className="description"
					style={{
						paddingTop: "20px",
						fontSize: "2vh",
						textAlign: "center",
					}}>
					Manage, secure and host any of your servers, network and
					computers. Provide you with different solution to secure
					your Data and support you.
				</div>
			</Paper>

			<Paper
				style={{
					position: "relative",
					minHeight: "30vh",
					maxHeight: "35vh",
					maxWidth: "40vw",
				}}
				elevation={12}>
				<div
					className="logo"
					style={{
						position: "absolute",
						top: "2vh",
						right: "50%",
						left: "40%",
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
						fontSize: "3vh",
						fontWeight: "bolder",
					}}>
					Dev Services
				</div>
				<div
					className="description"
					style={{
						paddingTop: "20px",
						fontSize: "2vh",
						textAlign: "center",
					}}>
					We design Websites, create web, mobile and desktop apps
					using the latest technology and frameworks.
				</div>
			</Paper>
		</div>
	);
}

export default Card;
