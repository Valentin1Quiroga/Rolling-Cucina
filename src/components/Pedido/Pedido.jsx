import { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import { PedidosContext } from "../../context/PedidosContext";
import "./Pedido.css";

const Pedidos = () => {
  const navigate = useNavigate();
  const [superTotal, setSupertotal] = useState(0);
  const {
    singlePedido,
    setSinglePedido,
    pedidos,
    setPedidos,
    aumentarCantidad,
    restarCantidad,
  } = useContext(PedidosContext);

  let total = 10;

  function sumaTotal() {
    if (total == 0) {
      return;
    } else {
      setSupertotal(superTotal + total);
    }
  }
  const borrarMenu = () => {};

  // const handleConfirm = async () => {
  //     try {
  //         await axios.post("/pedidos",pedido)
  //          toast.success("Su pedido se realizó con éxito. Pronto estará listo.")
  //     } catch (error) {
  // toast.error("Ocurrio un error al hacer el pedido, intente más tarde.")
  //     }
  // }

  const handleCancel = () => {
    setPedidos([]);
    navigate("/home");
  };
  let cantidad = 2;
  return (
    <>
      <h1>Pedidos</h1>
      <Container>
        <Row>
          <Col>IMAGEN</Col>
          <Col>NOMBRE</Col>
          <Col>CANTIDAD</Col>
          <Col>TOTAL</Col>
          <Col>CANCELAR MENU</Col>
        </Row>
        {pedidos.map((pedido, index) => (
          <Row className="fila-pedido" key={index}>
            <Col>Imagen</Col>
            <Col>{pedido.name}</Col>
            <Col lg={2}>
              {pedido.units}{" "}
              {cantidad > 1 ? (
                <>
                  <Button className="mx-1" variant="success">
                    +
                  </Button>
                  <Button variant="danger">-</Button>
                </>
              ) : (
                <Button className="mx-3" variant="success">
                  +
                </Button>
              )}
            </Col>
            <Col>{pedido.totalPrice}</Col>
            <Col>
              <Button className="mx-3" variant="danger" onClick={borrarMenu}>
                ❌
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="d-flex align-items-center">
          <Col>
            <div>
              <FloatingLabel controlId="floatingTextarea2" label="Notas">
                <Form.Control
                  as="textarea"
                  placeholder="Deja tus notas aquí"
                  // style={{ height: '100px' }}
                />
              </FloatingLabel>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <h5>Subtotal:{superTotal}</h5>
          </Col>
          <Col></Col>
        </Row>

        {/* <Button variant="success" onClick={handleConfirm}>Confirmar Pedido</Button>
            <Button className="mx-3" onClick={handleCancel} variant="danger">Cancelar Pedido</Button> */}
        <div className="my-5 text-center">
          <Button variant="success">Confirmar Pedido</Button>
          <Button className="mx-3" variant="danger" onClick={handleCancel}>
            Cancelar Pedido
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Pedidos;
