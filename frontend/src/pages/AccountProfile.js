import {Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const AccountProfile = () => {
    return (
        <Container>
            <Button variant={"btn"} as={Link} to="/reset">Reset Password</Button>
        </Container>
    );
};

export default AccountProfile;