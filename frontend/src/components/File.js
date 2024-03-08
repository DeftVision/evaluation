import {Container, FloatingLabel, Form, Button} from 'react-bootstrap';
import { useState } from 'react'

const form_default = {
    category: "",
    uploadFile: "",
    description: "",
    display: false,
};

export default function File() {
    const [form, setForm] = useState(form_default);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();


        formData.append('uploadFile', form.uploadFile);
        formData.append('category', form.category);
        formData.append('description', form.description);
        formData.append('display', form.display);



        const response = await fetch("http://localhost:8000/api/file/upload", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const _response = await response.json();

        if(response.ok && _response.file) {
            console.log(_response.file);
        } else {
            console.log(_response.error);
        }
    }
    return (
        <Container style={{width: "60%"}}>
            <form onSubmit={handleSubmit}>
                <FloatingLabel controlid="category" label="Category" className='mb-4'>
                    <Form.Control
                        type="text"
                        autoComplete="current-category"
                        value={form.category}
                        placeholder=''
                        onChange={(e) => {
                        setForm({
                            ...form,
                            category: e.target.value,
                        })
                    }}/>
                </FloatingLabel>

                <FloatingLabel controlid="description" label="description" className='mb-4'>
                    <Form.Control
                        as="textArea"
                        autoComplete="description"
                        value={form.description}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                description: e.target.value,
                            })
                        }}
                    />
                </FloatingLabel>
                <Form.Control
                    type="file"
                    className="mb-4"
                    onChange={(e) => {
                        setForm({
                            ...form,
                            uploadFile: e.target.files[0],
                        })
                    }}
                />
                <Form.Group controlid="display-file" className="mb-4">
                    <Form.Check
                        type="switch"
                        label="Display"
                        id="displayfiles"
                        checked={form.display}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                display: e.target.checked,
                            })
                        }}

                    />
                </Form.Group>
                <Button variant={"btn btn-outline-secondary"} type='submit' className="mb-4">
                    create document
                </Button>
            </form>
        </Container>
    );
};

