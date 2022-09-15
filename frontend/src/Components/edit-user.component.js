// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import {Route, Link, Routes, useParams} from 'react-router-dom';
// EditStudent Component
const EditUser = (props) => {
	const params = useParams();
const [formValues, setFormValues] = useState({
	id: "",
	user: "",
	number: "",
});

//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:5000/update-user/" + params.id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("User successfully updated");
		window.location.href = "/user-list";
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:5000/user/"+params.id
	)
	.then((res) => {
		const { id, user, number } = res.data[0];
		console.log("Hello",res.data);
		setFormValues({ id, user, number });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<UserForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</UserForm>
);
};

// Export EditStudent Component
export default EditUser;
