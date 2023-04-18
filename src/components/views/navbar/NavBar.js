import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavBar = () => 
  <Navbar bg="primary" variant="dark" className="rounded mb-3 py-1">
    <Container>
      <Nav className="col-3 ps-2 fs-5">
        <Nav.Link as={Link} to="/" className="text-white">Waiter.app</Nav.Link>
      </Nav> 
      <Nav className="justify-content-end col-9 pe-2 fs-6">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

export default NavBar;