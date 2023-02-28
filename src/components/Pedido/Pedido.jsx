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
  const {
    singlePedido,
    setSinglePedido,
    pedidos,
    setPedidos,
    aumentarCantidad,
    restarCantidad,
  } = useContext(PedidosContext);
  const [listaPedidos, setListaPedidos] = useState(pedidos);

  const totalPrecios = listaPedidos.reduce((total, pedido) => {
    return total + pedido.totalPrice;
  }, 0);

  let enviarPedido;
  let notas = "la quiero asi nomas";
  const handleConfirm = async () => {
    try {
      enviarPedido = {
        user: "63ecfd1e28e5149b24670ab1",
        menu: [...listaPedidos, notas],
        total: totalPrecios,
      };
      await axios.post("/pedidos", enviarPedido);
      toast.success("Su pedido se realizó con éxito. Pronto estará listo.");
      navigate("/home");
      setPedidos([]);
      setListaPedidos([]);
    } catch (error) {
      toast.error("Ocurrio un error al hacer el pedido, intente más tarde.");
    }
  };
  const borrarMenu = (e) => {
    const nuevaLista = pedidos.filter((pedido) => pedido.name !== e.target.id);
    console.log(nuevaLista);
    setPedidos(nuevaLista);
    setListaPedidos(nuevaLista);
  };
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
        {listaPedidos.map((pedido, index) => (
          <Row className="fila-pedido" key={index}>
            <Col>Imagen</Col>
            <Col>{pedido.name}</Col>
            <Col lg={2}>
              {pedido.units}
              {pedido.units > 1 ? (
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
              <Button
                className="mx-3"
                variant="danger"
                id={pedido.name}
                onClick={(e) => borrarMenu(e)}
              >
                ❌
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="d-flex align-items-center">
          <Col lg={4}>
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
            <h5>Subtotal:{totalPrecios}</h5>
          </Col>
          <Col></Col>
        </Row>

        {/* <Button variant="success" onClick={handleConfirm}>Confirmar Pedido</Button>
            <Button className="mx-3" onClick={handleCancel} variant="danger">Cancelar Pedido</Button> */}
        <div className="my-5 text-center">
          <Button variant="success" onClick={handleConfirm}>
            Confirmar Pedido
          </Button>
          <Button className="mx-3" variant="danger" onClick={handleCancel}>
            Cancelar Pedido
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Pedidos;
