import React from "react";
import "../Styles/navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { Link} from "react-router-dom";
const Header = styled(AppBar)({
	backgroundColor: "#111111",
	padding: 8,
	position: "static",
});
const Tabs = styled("p")({
	fontSize: "1.2rem",
	marginRight: "1rem",
	color: "white",
});
const NavLink = styled(Link)({
	textDecoration: "none",
});

export default function Navbar() {
	return (
		<Header>
			<Toolbar>
			<NavLink to="/">
					<Tabs  >My Form</Tabs>
					
				</NavLink>
				
				<NavLink to="/all">
					<Tabs>All Users</Tabs>
				</NavLink>
				<NavLink to="/add">
					<Tabs>Add User</Tabs>
				</NavLink>
			</Toolbar>
		</Header>
	);
}
