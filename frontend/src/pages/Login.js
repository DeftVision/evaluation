import { useState, useContext } from "react";
import {
    Container,
    Form,
    FloatingLabel,
    Button,
    Toast,
    ToastContainer,
    CloseButton,
    ToastBody
} from "react-bootstrap";
import UserContext from "../components/UserContext";
import cookies from "js-cookie";
import {Link} from "react-router-dom";


const form_default = {
    email: "",
    password: "",
};

export default function Login() {
    const [form, setForm] = useState(form_default);
    const [message, setMessage] = useState(null);
    const { setUser } = useContext(UserContext);
    const [show, setShow] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const _response = await response.json();

        if(response.ok && _response.user) {
            const userId = _response.user._id;
            cookies.set("user_cookie", userId);
            setUser(_response.user);
        } else {
            console.log(_response.error);
            setMessage(_response.message);
            setShow(true);
        }
    };

    const CloseButton = ({closeToast}) => (
        <Button variant={"outline-light"} onClick={closeToast} style={{fontSize: '1rem'}}>

        </Button>
    );

    return (
        <Container style={{width: "60%"}}>
            <div className='page-title mb-4'>
                <h3 className="mb-4">Login</h3>
            </div>

            <form onSubmit={handleSubmit}>
            <FloatingLabel controlid='email' label='Email' className='mb-4'>
                    <Form.Control
                        type='email'
                        autoComplete="current-email"
                        value={form.email}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                email: e.target.value,
                            });
                        }}
                    />
                </FloatingLabel>

                <FloatingLabel controlid='password' label='Password' className='mb-4'>
                    <Form.Control
                        type='password'
                        autoComplete="current-password"
                        value={form.password}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                password: e.target.value,
                            });
                        }}
                    />
                </FloatingLabel>
                <Button variant={"btn btn-outline-secondary"} type='submit' className="mb-4">
                    login
                </Button>
            </form>
                    <Button variant={"btn"} as={Link} to="forgotpassword">forgot password</Button>
            <ToastContainer position="middle-center" style={{zIndex: 1, width: "250px"}}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{backgroundColor: "#262626", borderRight: "4px solid #0CBB52", borderLeft: "4px solid #0CBB52"}}>
                    <ToastBody closeButton={<CloseButton closeToast={() => setShow(false)}/>} animate={true} className="me-auto toast-text">{message}</ToastBody>
                </Toast>
            </ToastContainer>
        </Container>
    );
}
