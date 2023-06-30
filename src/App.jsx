import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MyForm from "./Components/MyForm";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./Components/EditUser";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
				<Route path="/" element={<MyForm />} />
					<Route path="/add" element={<AddUser />} />
					<Route path="/all" element={<AllUsers />} />
					<Route path="/edit/:id" element={<EditUser />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
