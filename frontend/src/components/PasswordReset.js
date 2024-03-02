import {useContext, useState} from 'react';
import {Container, Form, FloatingLabel, Button, Toast, ToastContainer, ToastBody, CloseButton} from 'react-bootstrap';
import UserContext from "./UserContext";



const PasswordReset = () => {
    const [form, setForm] = useState(null);
    const [message, setMessage] = useState(null);
    const [show, setShow] = useState(false);
    const { setUser } = useContext(UserContext);


    return (
        <Container style={{width: "60%"}}>
            <h3 className="title-page mb-4">Password Reset</h3>

            <form>
                <FloatingLabel controlId='oldpassword' label='Current Password' className='form-label mb-4'>
                    <Form.Control type='password' placeholder=''/>
                </FloatingLabel>

                <FloatingLabel controlId='password' label='Password' className='form-label mb-4'>
                    <Form.Control type='password' placeholder=''/>
                </FloatingLabel>

                <FloatingLabel controlId='confirmpassword' label='Confirm Password' className='form-label mb-4'>
                    <Form.Control type='password' placeholder=''/>
                </FloatingLabel>
                {/*<div>
                    <ul>
                        <li>minimum of 8 characters</li>
                        <li>upper & lowercase letters</li>
                        <li>at least 1 symbol</li>
                        <li>at least 1 number</li>
                        <li>at least 1 number</li>
                    </ul>
                </div>*/}
                <Button variant={"btn btn-outline-secondary"} type="submit">reset</Button>
            </form>

            <ToastContainer position="middle-center" style={{zIndex: 1, width: "250px"}}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{backgroundColor: "#262626", borderRight: "4px solid #0CBB52", borderLeft: "4px solid #0CBB52"}}>
                    <ToastBody closeButton={<CloseButton closeToast={() => setShow(false)}/>} animate={true} className="me-auto toast-text">{message}</ToastBody>
                </Toast>
            </ToastContainer>

        </Container>
    );
};


export default PasswordReset;

