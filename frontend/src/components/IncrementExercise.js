import {useEffect, useState} from 'react';

import { Container, Button } from 'react-bootstrap';
const IncrementExercise = () => {
    const[num, setNum] = useState(0);
    const [click, setClick] = useState(false);


    useEffect(() => {
        if(click) {
            setNum(num + 1);
            setClick(false);
        }
    }, [click]);

    const handleClick = () => {
        setClick(true);
        console.log({num});
    }

    return (
        <Container className="mt-5">
            <Button  type="sumbit" variant={"btn btn-outline-secondary"} onClick={handleClick}>clicking increases by 1</Button> = {num}
        </Container>
    );
};

export default IncrementExercise;