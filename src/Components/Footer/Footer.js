import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../images/8th_gate_logo.jpeg";
import { Typography } from "@material-ui/core";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__grid">
				<Grid container>
					<Grid item xs={12}>
						<img className="footer__logo" src={logo} alt="" />
					</Grid>
					<Grid item xs={4} sm={4}>
						<div className="col1">
							<Typography variant="h6">
								Services
								<Typography variant="body2">
									Business
								</Typography>
								<Typography variant="body2">
									Information Technology
								</Typography>
								<Typography variant="body2">
									Marketing
								</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={4} sm={4}>
						<div className="col2">
							<Typography variant="h6">
								Ressources
								<Typography variant="body2">
									Success Stories
								</Typography>
								<Typography variant="body2">Webinar</Typography>
								<Typography variant="body2">Blog</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={4} sm={4}>
						<div className="col3">
							<Typography variant="h6">
								Support
								<Typography variant="body2">About</Typography>
								<Typography variant="body2">FAQs</Typography>
								<Typography variant="body2">Careers</Typography>
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
			<div className="footer__infos">
				8th Gate &copy; All Rights Reserved
				<div className="footer__socials">
					<IconButton style={{ color: " #6e6e6e" }}>
						<TwitterIcon />
					</IconButton>
					<a href="https://www.linkedin.com/company/8th-gate/">
						<IconButton style={{ color: " #6e6e6e" }}>
							<LinkedInIcon />
						</IconButton>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
