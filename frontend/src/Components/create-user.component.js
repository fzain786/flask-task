import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserForm from "./UserForm";

// CreateStudent Component
const CreateUser = () => {
const [formValues, setFormValues] =
	useState({uid:Math.floor((Math.random() * 1000) + 1), id: '', user: '', number: '' })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://localhost:5000/add-user',
	studentObject)
	.then(res => {
		if (res.status === 200)
		{
		 alert('User successfully created')
			window.location.href = "/user-list";
		}

		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}

// Return student form
return(
	<UserForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create User
	</UserForm>
)
}

// Export CreateStudent Component
export default CreateUser
