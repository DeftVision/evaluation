import {useState} from 'react';

import { Container, Button } from 'react-bootstrap';
const IncrementExercise = () => {
    const[newNumb, setNewNumb] = useState(0);

    function increaseNum() {
       setNewNumb(newNumb + 1);
       console.log(newNumb);
    }
    return (
        <Container className="mt-5">
            <Button onClick={increaseNum} type="sumbit">New Number = {newNumb}</Button>
        </Container>
    );
};

export default IncrementExercise;