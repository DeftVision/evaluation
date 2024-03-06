import { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

const DisplayEvaluation = () => {
    const [evaluations, setEvaluations] = useState([]);


    useEffect(() => {
        async function getEvaluations() {
            try {
                const response = await fetch("http://localhost:8000/api/evaluation/evaluations", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const _response = await response.json();

                if (response.ok && _response.evaluations) {
                    setEvaluations(_response.evaluations);
                } else {
                    console.log(_response.error);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        getEvaluations();
    },[])

    async function deleteEvaluation(evaluationId) {
        try {
            await fetch(`http://localhost:8000/api/evaluation/delete/${evaluationId}`, {
                method: "DELETE"
            })
            setEvaluations(evaluations.filter(evaluation => evaluation._id !== evaluationId));
        }
        catch (error) {
            console.log("Error deleting evaluation:", error);
        }

    }


    return(
        <Container className="col-8">
            <Table responsive hover striped={false} borderless={false}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Food</th>
                    <th>Service</th>
                    <th>Cleanliness</th>
                    <th>Final</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {evaluations.map((evaluation) => <tr key={evaluation._id}>
                    <td>{evaluation.visitDateTime}</td>
                    <td>{evaluation.location}</td>
                    <td>{evaluation.foodScore}</td>
                    <td>{evaluation.serviceScore}</td>
                    <td>{evaluation.cleanScore}</td>
                    <td>{evaluation.calculateScore}</td>
                    <td>
                        {<Button as={Link} to={`/editevaluation/${evaluation._id}`} variant={"btn"}><FaIcons.FaEdit style={{color: "dodgerblue"}} /></Button>}
                        {<Button as={Link} onClick={() => deleteEvaluation(evaluation._id)}  variant={"btn"}><FaIcons.FaTrash style={{color: "dimgray"}} /></Button>}</td>
                </tr>)}
                </tbody>
            </Table>
        </Container>
    );
}

export default DisplayEvaluation;