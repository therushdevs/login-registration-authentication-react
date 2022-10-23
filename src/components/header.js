import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function Header (){

    return(
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Xelpmoc Assignment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Register</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}