import Navbar from "../components/Navbar/Nabvar";
import Footer from "../components/Footer/Footer";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const TestJavier = () => {
  return (
    <>
      <Navbar />

      <div>
        {/* <h2 className="text-danger">Administración de Rolling-Cucina</h2> */}
      </div>
      <Container
        fluid
        className="container-admin contenedor d-flex justify-content-center align-items-center bg-secondary"
      >
        <Row>
          <div className="col-12 col-lg-6 text-center">
            <h3 className="text-dark">Administración de Rolling Cucina</h3>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div>
              {/* <Button variant="danger" className="mx-3">Usuarios</Button> */}
              <Link to="/admin/usuarios" className="btn btn-success mx-3">
                Usuarios
              </Link>
              <Link to="/admin/menus" className="btn btn-light mx-3">
                Menús
              </Link>
              <Link to="/admin/pedidos" className="btn btn-danger mx-3">
                Pedidos
              </Link>
              {/* <Button variant="danger" className="mx-3">Pedidos</Button> */}
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default TestJavier;
