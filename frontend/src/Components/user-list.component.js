import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";


const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:5000/users")
	.then(({ data }) => {
		setUsers(data.users);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return users.map((res, i) => {
	return <UserTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Id</th>
			<th>User</th>
			<th>Number</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default UserList;
