import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';



export default function LineChecks() {
    const [form, setForm] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();


    }
    return (
        <Container>
            <h4>Line Check</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <h3>Chicken</h3>
                    <Form.Label></Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Form>
            <Button>save</Button>
        </Container>
    )
}