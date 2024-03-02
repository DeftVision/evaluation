import { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

const UserTable = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function getUsers() {
            const response = await fetch("http://localhost:8000/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const _response = await response.json();

            if (response.ok && _response.users) {
                setUsers(_response.users);
                console.log(_response.users);
            } else {
                console.log(_response.error);
            }
        }
        getUsers();


        /*async function deleteUser(userId) {
            const response = await fetch("http://localhost:8000/api/users/" + userId, {
                method:"DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const _response = await response.json();
            if (response.ok) {
                console.log(_response.message);
            } else {np
                console.log(_response.error);
            }
        }*/
    },[])


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
                        {<Button as={Link} to={"/edituser/" + user._id} variant={"btn"}><FaIcons.FaEdit style={{color: "dodgerblue"}} /></Button>}
                        {/*{<Button as={Link} onClick={deleteUser} variant={"btn"}><FaIcons.FaTrash style={{color: "dimgray"}} /></Button>}*/}</td>
                </tr>)}
              </tbody>
          </Table>
      </Container>
    );
}

export default UserTable;