import { useContext } from 'react';
import UserContext from "../../components/UserContext";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cookies from "js-cookie";



export default function Header() {
    const { user, setUser } = useContext(UserContext);
    function logout() {
        setUser(null);
        cookies.remove("user_cookie");
    }
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="mb-5 shadow">
            <Container>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to={"/"}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/dashboard"}>
                            Dashboard
                        </Nav.Link>

                        {user && user.role === 'Admin' && (
                        <Nav.Link as={Link} to={"/admin"}>
                            Admin
                        </Nav.Link>)}

                        <Nav.Link as={Link} to={"/support"}>
                            Support
                        </Nav.Link>

                        <NavDropdown title="Components">
                            <NavDropdown.Item as={Link} to="/loading">Loading</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/error">404 Error</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/forgotpassword">Forgot Password</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/reset">Password Reset</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sidebar">Sidebar</NavDropdown.Item>
                        </NavDropdown>


                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link><h5>{user &&
                            <Navbar.Text as={Link} to="/profile" style={{textDecoration: "none"}}>{user.firstName}</Navbar.Text>}</h5>
                        </Nav.Link>
                        {user && <Nav.Link variant={"btn btn-outline-primary"} onClick={logout}><h5 className="logout-button">Logout</h5></Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
