import axios from "axios";
const url = "http://localhost:8000";
export const addUser = async (data) => {
	try {
		return await axios.post(`${url}/add`, data);
	} catch (e) {
		console.log(e.message);
	}
};

export const getAllUsers = async () => {
	try {
		return await axios.get(`${url}/all`);
	} catch (e) {
		console.log(e.message);
	}
};
export const getUser = async (id) => {
	try {
		return await axios.get(`${url}/${id}`);
	} catch (e) {
		console.log(e.message);
	}
};
export const editUser = async (user,id) => {
	try {
		return await axios.post(`${url}/${id}`,user);
	} catch (e) {
		console.log(e.message);
	}
};

export const deleteUser = async (id) => {
	try {
		return await axios.delete(`${url}/${id}`);
	} catch (e) {
		console.log(e.message);
	}
};