import { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

const UserTable = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch("http://localhost:8000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const _response = await response.json();

                if (response.ok && _response.users) {
                    setUsers(_response.users);
                } else {
                    console.log(_response.error);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        getUsers();
    },[])

    async function deleteUser(userId) {
        try {
            await fetch(`http://localhost:8000/api/delete/${userId}`, {
                method: "DELETE"
            })
            setUsers(users.filter(user => user._id !== userId));
        }
        catch (error) {
            console.log("Error deleting user:", error);
        }

    }


    return(
      <Container className="col-8">
          <Table responsive hover striped={false} borderless={false}>
              <thead>
              <tr>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                  <th>Action</th>
              </tr>
              </thead>
              <tbody>
                {users.map((user) => <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                        {<Button as={Link} to={`/edituser/${user._id}`} variant={"btn"}><FaIcons.FaEdit style={{color: "dodgerblue"}} /></Button>}
                        {<Button as={Link} onClick={() => deleteUser(user._id)}  variant={"btn"}><FaIcons.FaTrash style={{color: "dimgray"}} /></Button>}</td>
                </tr>)}
              </tbody>
          </Table>
      </Container>
    );
}

export default UserTable;