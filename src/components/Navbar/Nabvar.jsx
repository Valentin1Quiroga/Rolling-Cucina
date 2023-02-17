import { Navbar, Container, Nav, Button,} from 'react-bootstrap';
import "./Navbar.css" 
import { Link } from 'react-router-dom';
import Boton from './Boton';




function CollapsibleExample() {
 
   return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href= "/home">Rolling Cucina</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"> <Boton/> </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Link className= "items-nav nav-link text-success" to="/home">Inicio</Link>
            <Link className= "items-nav nav-link" to="/pedido">Pedidos </Link>
            <Link className= "items-nav nav-link text-danger" to="/*">Cerrar Sesión</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;