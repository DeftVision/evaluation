import {useState, useEffect} from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const EvaluationTable = () => {
    const [evaluations, setEvaluations] = useState([]);

    async function getEvaluations() {
        try {
            const response = await fetch("http://localhost:8000/api/evaluation/evaluations", {
                method: "GET",
            });
            const _response = await response.json();
            if(response.ok && _response.evaluations) {
                setEvaluations(_response.evaluations);
            } else {
                console.log(_response.error);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEvaluations();
    }, []);

    async function deleteEvaluation(evaluationId) {
        try {
            await fetch(`http://localhost:8000/api/evaluation/delete/${evaluationId}`, {
                method: "DELETE",
            });
            getEvaluations();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Table hover responsive>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Score</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {evaluations.map((evaluation) => <tr key={evaluation._id}>
                    <td>{evaluation.visitDateTime}</td>
                    <td>{evaluation.location}</td>
                    <td>{evaluation.calculateScore}</td>
                    <td>
                        <Button as={Link} to={`/editevaluation/${evaluation._id}`} variant={"btn"}>
                            <FaIcons.FaEdit style={{color: "dodgerblue"}} />
                        </Button>

                        <Button variant={"btn"} type="submit" onClick={() => deleteEvaluation(evaluation._id)}>
                            <FaIcons.FaTrash style={{color: "#cfcccc"}} />
                        </Button>
                    </td>
                </tr>)}
                </tbody>
            </Table>
        </Container>
    )

}

export default EvaluationTable;