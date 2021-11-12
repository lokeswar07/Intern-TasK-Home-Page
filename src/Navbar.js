import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import './App.css';

function NavbarHome() {
    return (
      <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand style={{marginLeft:"-10em",marginRight:"30em",fontWeight:"bold",fontSize:"30px"}}>Genshin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{marginRight:"1em"}}href="#home">Home</Nav.Link>
            <Nav.Link style={{marginRight:"1em"}} href="#link">Slack</Nav.Link>
            <Nav.Link style={{marginRight:"1em"}} href="#home">Features</Nav.Link>
            <Nav.Link style={{marginRight:"1em"}} href="#home">AboutUs</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Software Engineer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product Manager</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Data Scientist</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
  }

export default NavbarHome;
