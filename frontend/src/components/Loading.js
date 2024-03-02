import { Container } from 'react-bootstrap';
import { RotatingLines} from "react-loader-spinner";



export default function Loading() {
    return (
        <Container>
        <div>Loading ...</div>
    <hr style={{width: "300px"}}/>

    <RotatingLines
        strokeColor="#515151"
        strokeWidth="3"
        animationDuration="1"
        width="96"
        visible={true}
    />
        </Container>
)
}