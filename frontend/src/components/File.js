import {Container, FloatingLabel, Form, Button} from 'react-bootstrap';
import { useState } from 'react'

const form_default = {
    category: "",
    uploadFile: "",
    fileType: "",
};

export default function File() {
    const [form, setForm] = useState(form_default);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/file/upload", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
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

                <FloatingLabel controlid="filetype" label="File Type" className='mb-4'>
                    <Form.Control
                        type="text"
                        autoComplete="file-type"
                        value={form.fileType}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                fileType: e.target.value,
                            })
                        }}
                    />
                </FloatingLabel>
                    <Form.Control type="file"  className="mb-4"/>
                <Button variant={"btn btn-outline-secondary"} type='submit' className="mb-4">
                    create document
                </Button>
            </form>
        </Container>
    );
};

