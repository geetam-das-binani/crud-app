import React, { useEffect, useState } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { getAllUsers, deleteUser } from "../service/api";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyleTable = styled(Table)({
	width: "90%",
	margin: "3.1rem auto 0 auto",
});
const Tr = styled(TableRow)({
	background: "#000000",
	"& th": {
		color: "#fff",
		fontSize: "1.1rem",
	},
});
const Trd = styled(TableRow)({
	"& td": {
		fontSize: "1.1rem",
	},
});

export default function AllUsers() {
	const [user, setUsers] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		getUsersData();
	}, []);
	const getUsersData = async () => {
		const allUsersData = await getAllUsers();
		setUsers(allUsersData.data);
	};
	const deleteUserData = async (id) => {
		await deleteUser(id);
		getUsersData();
	};
	return (
		<StyleTable sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<Tr>
					<TableCell>Id</TableCell>
					<TableCell>Name</TableCell>
					<TableCell>Username</TableCell>
					<TableCell>Email</TableCell>
					<TableCell>Phone</TableCell>
					<TableCell></TableCell>
					<TableCell></TableCell>
				</Tr>
			</TableHead>
			<TableBody>
				{user
					.sort((a, b) => b.Date - a.Date)
					.map((data) => {
						const { Email, Name, Phone, Username, _id } = data;
						return (
							<Trd key={_id}>
								<TableCell>{_id}</TableCell>
								<TableCell>{Name}</TableCell>
								<TableCell>{Username}</TableCell>
								<TableCell>{Email}</TableCell>
								<TableCell>{Phone}</TableCell>
								<TableCell>
									<Button
										onClick={() => navigate(`/edit/${_id}`)}
										variant="contained"
									>
										Edit
									</Button>
								</TableCell>
								<TableCell>
									<Button
										onClick={() => deleteUserData(_id)}
										variant="contained"
										color="error"
									>
										Delete
									</Button>
								</TableCell>
							</Trd>
						);
					})}
			</TableBody>
		</StyleTable>
	);
}
