import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import { Typography } from "@material-ui/core";

function Footer() {
	return (
		<div className="footer" id="footer">
			<div className="footer__grid">
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<h2
							style={{
								textAlign: "center",
								paddingTop: "5vh",
								paddingBottom: "5vh",
							}}>
							8th Gate
						</h2>
					</Grid>
					<Grid item xs={12} sm={6}>
						<div className="col1">
							<Typography
								variant="h5"
								style={{
									fontWeight: "bolder",
									textAlign: "center",
									paddingBottom: "2vh",
								}}>
								Infos
							</Typography>
							<div
								className="address"
								style={{
									display: "flex",
									paddingBottom: "2vh",
								}}>
								<div
									className="icon"
									style={{ paddingRight: "1vw" }}>
									<RoomIcon />
								</div>
								<Typography>
									Lebanon Beirut, Hamra Justinian Street,
									Justinian Building Block B, 9th floor.
								</Typography>
							</div>
							<div
								className="mail"
								style={{
									display: "flex",
									paddingBottom: "2vh",
								}}>
								<div
									className="icon"
									style={{ paddingRight: "1vw" }}>
									<MailIcon />
								</div>
								<Typography>bmmssalem@gmail.com</Typography>
							</div>
							<div className="phone" style={{ display: "flex" }}>
								<div
									className="icon"
									style={{ paddingRight: "1vw" }}>
									<PhoneIcon />
								</div>
								<Typography>+961 1 752 071 </Typography>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6}>
						<div className="col3">
							<div className="" style={{ paddingBottom: "4vh" }}>
								<Typography
									variant="h5"
									style={{
										fontWeight: "bolder",
										textAlign: "center",
									}}>
									Services
								</Typography>
							</div>
							<div
								className=""
								style={{
									paddingBottom: "4vh",
								}}>
								<a
									href="#it"
									style={{
										textDecoration: "none",
										color: "black",
									}}>
									<Typography variant="body1" align="center">
										IT Services
									</Typography>
								</a>
							</div>
							<div className="" style={{ paddingBottom: "4vh" }}>
								<a
									href="#dev"
									style={{
										textDecoration: "none",
										color: "black",
									}}>
									<Typography variant="body1" align="center">
										Development Services
									</Typography>
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
			<div className="footer__infos">
				8th Gate &copy; All Rights Reserved
				<div className="footer__socials">
					<a href="https://www.facebook.com/8Th-Gate-101881867923134">
						<IconButton style={{ color: " rgb(25, 118, 210)" }}>
							<FacebookIcon />
						</IconButton>
					</a>
					<a href="https://www.linkedin.com/company/8th-gate/">
						<IconButton style={{ color: "#0e76a8" }}>
							<LinkedInIcon />
						</IconButton>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
