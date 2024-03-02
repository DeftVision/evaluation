import {Container, Button, FloatingLabel, Form} from 'react-bootstrap';
import { useState } from 'react';

export default function ForgotPassword() {

    return (
        <Container>

                <FloatingLabel controlid='email' label='Email' className='mb-4'>
                    <Form.Control
                        type='email'
                        autoComplete="current-email"
S                    />
                </FloatingLabel>
                <Button variant={"btn btn-outline-secondary"} type="submit">Submit</Button>

        </Container>
    );
}