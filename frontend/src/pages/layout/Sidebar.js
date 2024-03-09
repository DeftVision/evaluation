import {Offcanvas, Nav, NavDropdown} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../../components/UserContext';
import cookies from 'js-cookie';
import * as FaIcons from 'react-icons/fa';


const Sidebar = () => {
    const { user, setUser } = useContext(UserContext);
    const [show, setShow] = useState(false);

    function logout() {
        setUser(null);
        cookies.remove("user_cookie");
    }

    const menuClose = () => setShow(false);
    const menuOpen = () => setShow(true);

    return (
        <>
            <FaIcons.FaBars onClick={menuOpen} className="sidebar-bars"/>
            <Offcanvas show={show} onHide={menuClose}
                       style={{maxWidth: "250px", overflow: "hidden", backgroundColor: "rgba( 0, 0, 0, 0.75"}}>
                <Offcanvas.Header closeButton className="sidebar-header">


                    {user &&
                        <Offcanvas.Title>{user.firstName} {user.lastName} </Offcanvas.Title>}
                </Offcanvas.Header>
                <Offcanvas.Body style={{background: "transparent"}}>
                    <Nav style={{display: "flex", flexDirection: "column"}}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/displayannouncements">Announcements</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/evaluation">Evaluations</Nav.Link>
                        {user && user.role === 'Admin' && (
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>)}
                    </Nav>

                    <Nav style={{display: "flex", flexDirection: "column"}} className="mt-5">
                        <NavDropdown title="Components" style={{display: "flex", flexDirection: "column"}}>
                            <NavDropdown.Item as={Link} to="/loading">Loading</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/exercise">Increment</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="*">Error</NavDropdown.Item>
                        </NavDropdown>
                        <hr style={{width: "200px", height: "15px"}}/>
                        {user && <Nav.Link as={Link} onClick={logout} className="logout-button">Logout</Nav.Link>}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;