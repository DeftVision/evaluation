import {Container, Button } from 'react-bootstrap';
import UserTable from '../components/UserTable';
import { Link } from 'react-router-dom'

export default function User() {

    return (
        <Container className="mt-5">
            <Button as={Link} to="/register" variant={"btn btn-outline-secondary"} style={{textAlign: "center", justifyItems: "center"}}>
                <div>+new</div>
            </Button>
            <div className="mt-5">
            <UserTable />
            </div>
        </Container>

    )
}