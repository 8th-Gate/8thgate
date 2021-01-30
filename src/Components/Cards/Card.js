import React from "react";
import Paper from "@material-ui/core/Paper";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import PowerIcon from "@material-ui/icons/Power";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./Card.css";

function Card({ title, description }) {
	return (
		<div className="card">
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "5%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<PowerIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						style={{
							position: "relative",
							minHeight: "15vh",
						}}
						elevation={12}>
						<div
							className="logo"
							style={{
								position: "absolute",
								top: "2%",
								left: "50%",
								color: "blue",
							}}>
							<CloudQueueIcon />
						</div>
						<div
							className="title"
							style={{
								color: "black",
								textAlign: "center",
								paddingTop: "10%",
							}}>
							{title}
						</div>
						<div
							className="description"
							style={{ paddingTop: "20px" }}>
							<Typography align="center">
								{" "}
								{description}
							</Typography>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Card;
