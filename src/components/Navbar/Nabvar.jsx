import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css" 
import { Link } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand link >Rolling Cucina</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Link className= "items-nav nav-link" to="/home">Inicio</Link>
            <Link className= "items-nav nav-link" to="/pedido">Pedidos </Link>
            <Link className= "items-nav nav-link" to="/*">Cerrar Sesión</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;