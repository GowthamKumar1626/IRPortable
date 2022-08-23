import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{cursor: 'pointer'}} onClick={()=>navigate('/')}>IR Detector</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/records')}>Records</Nav.Link>
            {/*<NavDropdown title="Link" id="navbarScrollingDropdown">*/}
            {/*  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
            {/*  <NavDropdown.Item href="#action4">*/}
            {/*    Another action*/}
            {/*  </NavDropdown.Item>*/}
            {/*  <NavDropdown.Divider />*/}
            {/*  <NavDropdown.Item href="#action5">*/}
            {/*    Something else here*/}
            {/*  </NavDropdown.Item>*/}
            {/*</NavDropdown>*/}
            {/*<Nav.Link href="#" disabled>*/}
            {/*  Link*/}
            {/*</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
