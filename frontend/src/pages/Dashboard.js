import {Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import DisplayAnnouncements from "../components/DisplayAnnouncements";

export default function Dashboard() {

    return (
        <Container className="mt-5">
            <div>Dashboard</div>
            <hr className="mb-5" style={{width: "300px"}}/>

            <DisplayAnnouncements />
        </Container>

    )
}