import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserTableRow = (props) => {
const {id, user, number } = props.obj;

const deleteUser = () => {
	axios
	.delete(
"http://localhost:5000/delete-user/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("User successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{id}</td>
	<td>{user}</td>
	<td>{number}</td>
	<td>
		<Link className="edit-link"
		to={"/user/" +id}>
		Edit
		</Link>
		<Button onClick={deleteUser}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default UserTableRow;
