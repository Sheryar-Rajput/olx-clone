import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/newLogo.png'
import sell from '../images/Capture.PNG'

function AppBar() {
  return (
    <Navbar bg="light" expand="lg" style={{fontSize : 20}} sticky="top" >
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} width={110} height={70}  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="All Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Electroncis</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
             Motor 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
             Lands
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
             Others
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              width='500'
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link  href="#action1" >
            logout
          </Nav.Link>
          <Nav.Item>
          <img src={sell} style={{marginLeft : 5}} />
          </Nav.Item>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;