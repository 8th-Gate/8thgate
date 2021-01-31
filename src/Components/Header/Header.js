import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import logo from "../../images/8th_gate_logo_nogb.png";

import "./Header.css";

function Header() {
	const [anchorEl0, setAnchorEl0] = React.useState(null);

	const handleMenu0 = (event) => {
		setAnchorEl0(event.currentTarget);
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 60) {
				handleShow(true);
			} else handleShow(false);
		});
	}, []);

	return (
		<div className={`mainHeader ${show && "mainHeader__appear"}`}>
			<div className="mainHeader__logo">
				<Link to="/" style={{ textDecoration: "none", color: "black" }}>
					<img
						src={logo}
						alt=""
						className={` ${
							show &&
							"mainHeader__logoAppear" &&
							"mainHeader__logoDisappear"
						}`}
						style={{
							height: "100px",
							width: "100px",
						}}
					/>

					<h3
						className={`mainHeader__darkLogo ${
							show && "mainHeader__darkLogoAppear"
						}`}>
						8th Gate
					</h3>
				</Link>
			</div>
			{isMobile ? (
				<>
					{" "}
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleMenu0}
						aria-label="menu"
						className="burger">
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl0}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorEl0)}
						onClose={() => setAnchorEl0(null)}>
						<MenuItem>
							<Link
								to="/press"
								className="header__link"
								style={{
									fontWeight: "normal",
									color: "black",
								}}>
								Press
							</Link>
						</MenuItem>
					</Menu>{" "}
				</>
			) : (
				<div className="mainHeader__links">
					<Link
						to="#pricing"
						className={`mainHeader__button header__link ${
							show && "mainHeader__buttonAppear"
						}`}>
						About Us
					</Link>
					<a
						href="#pricing"
						className={`mainHeader__button header__link ${
							show && "mainHeader__buttonAppear"
						}`}>
						Pricing
					</a>
					<Link
						to="/contact"
						className={`mainHeader__button header__link ${
							show && "mainHeader__buttonAppear"
						}`}>
						Contact Us
					</Link>
				</div>
			)}
		</div>
	);
}

export default Header;
