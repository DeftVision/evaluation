<<<<<<< Updated upstream
import { Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const form_default = {
    visitDateTime: "",
    evaluator: "",
    location: "",
    cashier: "",
    greeting: false,
    repeatOrder: false,
    upsell: false,
    patio: false,
    wait: "",
    foodScore: "",
    cleanScore: "",
    serviceScore: "",
    calculateScore: "",
    image: "",
    identifyManager: false,
    comments: "",
}

=======
import {Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import EvaluationTable from "../components/EvaluationTable";
>>>>>>> Stashed changes

export default function Evaluation() {
    return (
        <Container className="mt-5" style={{textAlign: "center"}}>
            <Button as={Link} to="/createevaluation" variant={"btn btn-outline-secondary"} className="mb-5" style={{textDecoration: "none"}}>
                <div>Create New</div>
            </Button>
            <EvaluationTable />
        </Container>

    )
}