import { useState, useEffect } from 'react';
import { Container, Form, Button, FormText } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';


const form_default = {
    audience: "",
    subject: "",
    title: "",
    name: "",
    content: "",
    display: false,
    priority: "",
}


export default function CreateAnnouncement({newAnnouncement}) {
    const [form, setForm] = useState(form_default);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();



    useEffect(() => {
        async function editAnnouncement() {
            const response = await fetch(`http://localhost:8000/api/announce/announcement/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const _response = await response.json();

            if (!response.ok) {
                console.log(_response.error);
            }
            if (response.ok) {
                const {name, subject, content, audience, priority, display} = _response.announcement;
                setForm({name, subject, content, audience, priority, display});
            }

        }
        if(newAnnouncement) {
            setLoading(true);
        }
        if(!newAnnouncement) {
            editAnnouncement();
        }
        setLoading(false);
    }, []);

    if(loading) {
        <Loading />
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        let url = "http://localhost:8000/api/announce/create";
        let method = "POST";

        if(!newAnnouncement) {
            url = `http://localhost:8000/api/announce/update/${id}`;
            method = "PATCH";
        }

        const response = await fetch( url, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const _response = await response.json();

        if(response.ok) {
            console.log(_response);
        } else {
            console.log(_response.error);
        }
    }

    return (
        <Container style={{width: "60%"}}>

            <div className="mb-5">{newAnnouncement ? "New Announcement" : "Edit Announcement"}</div>

            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        controlid="name"
                        autocomplete="name"
                        value={form.name}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                name: e.target.value,
                            });
                        }}
                    />
                    <FormText>[ not displayed to users ]</FormText>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        controlid="subject"
                        autocomplete="subject"
                        value={form.subject}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                subject: e.target.value,
                            });
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        controlid="content"
                        autocomplete="content"
                        value={form.content}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                content: e.target.value,
                            });
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Audience</Form.Label>
                    <Form.Select
                        type="text"
                        controlid="audience"
                        autocomplete="audience"
                        value={form.audience}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                audience: e.target.value,
                            });
                        }}
                    >
                        <option></option>
                        <option value="All">All</option>
                        <option value="Employees">Employees</option>
                        <option value="Shoppers">Shoppers</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Priority Level</Form.Label>
                    <Form.Select
                        type="text"
                        controlid="priority"
                        autocomplete="priority"
                        value={form.priority}
                        placeholder=''
                        onChange={(e) => {
                            setForm({
                                ...form,
                                priority: e.target.value,
                            });
                        }}
                    >
                        <option></option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlid="display-announcement" className="mb-4">
                    <Form.Check
                        type="switch"
                        label="Display"
                        id="displayAnnouncement"
                        checked={form.display}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                display: e.target.checked,
                            })
                        }}

                    />
                </Form.Group>

                <Button variant={"btn btn-outline-secondary"} type="submit">
                    {newAnnouncement ? "create" : "update"}
                </Button>
            </form>

        </Container>
    );
}