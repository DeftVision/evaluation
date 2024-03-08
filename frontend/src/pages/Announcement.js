import {Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AnnouncementTable from "../components/AnnouncementTable";

export default function Announcement() {
    return (
        <Container className="mt-5" style={{textAlign: "center"}}>
            <Button as={Link} to="/createannouncement" variant={"btn btn-outline-secondary"} className="mb-5" style={{textDecoration: "none"}}>
                <div>Create New</div>
            </Button>
            <AnnouncementTable />
        </Container>

    )
}