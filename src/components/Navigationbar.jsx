import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"


const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Tool Kit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/">Products</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse>
         
            <Navbar.Link to="/" as={Link}>My Bag</Navbar.Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navigationbar
