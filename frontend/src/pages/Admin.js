import {Container, ListGroup} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Admin() {
    return (
        <Container className="mt-5" style={{alignItems: "center"}}>

        <ListGroup  className="mb-xxl-5 me-4" variant="flush" style={{width: "250px"}}>
            <ListGroup.Item>
                <Link to="/announcement"><h6>Announcements</h6></Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/file"><h6>Document & Forms</h6></Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/development"><h6>Professional Development</h6></Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/user"><h6>Users</h6></Link>
            </ListGroup.Item>
        </ListGroup>
        </Container>
    )
}