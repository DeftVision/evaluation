import {Container, ListGroup, Button, Navbar} from 'react-bootstrap';
import UserTable from '../components/UserTable';
import { Link } from 'react-router-dom'

export default function User() {

    return (
        <Container className="mt-5" style={{display: "flex", textAlign: "center"}}>
            <ListGroup  className="mb-xxl-5 me-4 list-group-flush" variant="" style={{width: "100px", top: "-25px"}}>
                <ListGroup.Item>
                    <Navbar.Text as={Link} to="/register" style={{textDecoration: "none"}}><h6>+new</h6></Navbar.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant={"btn"} style={{border: "none"}}><h6>import</h6></Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant={"btn"} style={{border: "none"}}><h6>export</h6></Button>
                </ListGroup.Item>
            </ListGroup>
            <UserTable />
        </Container>

    )
}