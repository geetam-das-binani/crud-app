import React, { useState, useEffect } from "react";
import { FormControl, FormGroup, Input } from "@mui/material";
import { InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import {editUser ,getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

// STYLED COMPONENTS SHOULD BE CamelCase at the beginning
const Container = styled(FormGroup)({
	width: "50%",
	margin: "auto",
	marginTop: "5% ",
	"& div": {
		marginTop: "1rem",
	},
});

const initialValues = {
	Email: "",
	Phone: "",
	Username: "",
	Name: "",
};
export default function EditUser() {
	const [user, setUser] = useState(initialValues);
	const navigate = useNavigate();
	const { id } = useParams();
	console.log(id)
	
	useEffect(() => {
		loadUserDetails();
	}, []);
	const loadUserDetails = async () => {
		const response = await getUser(id);
	
		setUser(response.data)
	};
	const handleChange = (e) => {
		setUser((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const EditUserDetails = async () => {
		await editUser(user,id);
		setUser(initialValues);
		navigate("/all");
	};

	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Edit User
			</Typography>
			<FormControl>
				<InputLabel>Name</InputLabel>
				<Input name="Name" value={user.Name} onChange={handleChange} />
			</FormControl>
			<FormControl>
				<InputLabel>Username</InputLabel>
				<Input name="Username" value={user.Username} onChange={handleChange} />
			</FormControl>
			<FormControl>
				<InputLabel>Email</InputLabel>
				<Input name="Email" value={user.Email} onChange={handleChange} />
			</FormControl>
			<FormControl>
				<InputLabel>Phone</InputLabel>
				<Input name="Phone" value={user.Phone} onChange={handleChange} />
			</FormControl>
			<FormControl>
				<Button onClick={EditUserDetails} variant="contained">
					Edit User
				</Button>
			</FormControl>
		</Container>
	);
}
