import Menus from "./menus";
import Pedidos from "./Pedidos";
import Navbar from "../components/Navbar/Nabvar"
import Footer from "../components/Footer/Footer"
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const TestJavier = () => {
    return (
      <>
        <Navbar/>
        <Container fluid className="container-admin d-flex justify-content-center align-items-center">
<div >
  <Button variant="danger" className="mx-3">Usuarios</Button>
  <Link to="/admin/menus" className="btn btn-primary mx-3">Menús</Link>
  <Button variant="danger" className="mx-3">Pedidos</Button>
</div>
        </Container>
        <Footer/>
      </>
      );

}
 
export default TestJavier;