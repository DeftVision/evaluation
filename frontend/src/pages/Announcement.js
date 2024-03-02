import {Container, ListGroup, Button, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AnnouncementTable from "../components/AnnouncementTable";

export default function Announcement() {
    return (
        <Container className="mt-5" style={{display: "flex", textAlign: "center"}}>
            <ListGroup  className="mb-5 me-4 list-group-flush" variant="" style={{width: "100px", top: "-25px"}}>
                <ListGroup.Item>
                    <Navbar.Text as={Link} to="/createannouncement" style={{textDecoration: "none"}}><h6>+new</h6></Navbar.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant={"btn"} style={{border: "none", textDecoration: "line-through"}}><h6>import</h6></Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant={"btn"} style={{border: "none", textDecoration: "line-through"}}><h6>export</h6></Button>
                </ListGroup.Item>
            </ListGroup>
            <AnnouncementTable />
        </Container>

    )
}