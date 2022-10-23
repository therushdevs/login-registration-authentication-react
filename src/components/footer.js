import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {

    return (
        <Navbar style = {{height:"7.5rem"}} bg="light">
            <Container>
                <h3>Assignment Completion by : Rushikesh Kumbhar</h3>
            </Container>
            <Container>
                <Navbar.Brand href="https://www.linkedin.com/in/rushikesh-kumbhar-387333175/" target = "_blank" >LinkedIn Profile</Navbar.Brand>
            </Container>
        </Navbar>
    );
}