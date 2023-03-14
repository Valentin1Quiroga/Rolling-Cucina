import { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { SlLogin } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import { PedidosContext } from "../../context/PedidosContext";
import useGet from "../../hooks/useGet";
import Spinner from "../Spinner/Spinner";
import "./Pedido.css";

const Pedidos = () => {
  const navigate = useNavigate();
  const { pedidos, setPedidos } = useContext(PedidosContext);
  const [listaPedidos, setListaPedidos] = useState(pedidos);
  const [userPedido, loading, getUserPedido] = useGet(
    `/pedidos/userPedido`,
    "pedidos"
  );
  console.log(userPedido);
  const totalPrecios = listaPedidos.reduce((total, pedido) => {
    return total + pedido.totalPrice;
  }, 0);

  let enviarPedido;
  let notas = "la quiero asi nomas";
  const handleConfirm = async () => {
    try {
      enviarPedido = {
        user: "63ecfd1e28e5149b24670ab1",
        menu: [...listaPedidos, { notas: notas }],
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

  return (
    <>
      <h1>Pedidos</h1>
      {loading ? (
        <Spinner />
      ) : userPedido.length !== 0 ? (
        <h3>Su pedido esta siendo preparado</h3>
      ) : listaPedidos.length !== 0 ? (
        <Container>
          <Row className="titulo">
            <Col xs={2}>IMAGEN</Col>
            <Col xs={2}>NOMBRE</Col>
            <Col xs={4} className="text-center">
              CANTIDAD
            </Col>
            <Col xs={2}>TOTAL</Col>
            <Col xs={2}>CANCELAR MENU</Col>
          </Row>
          {listaPedidos.map((pedido, index) => (
            <Row className="fila-pedido border" key={index}>
              <Col xs={6} sm={2}>
                <img
                  src={pedido.image}
                  className="img-pedidos img-thumbnail"
                  alt=""
                />
              </Col>
              <Col xs={6} sm={2} className="text-start nombre-menu">
                {pedido.name}
              </Col>
              <Col xs={6} sm={4} className="text-center nombre-menu">
                <p className="texto-cel text-primary">Cantidad</p>
                {pedido.units}
                {pedido.units > 1 ? (
                  <>
                    <Button
                      className="mx-1 btn-sm botones-cantidad"
                      variant="success"
                      onClick={() => handleAumentar}
                    >
                      +
                    </Button>
                    <Button
                      variant="danger "
                      className="btn-sm"
                      onClick={() => handleRestar}
                    >
                      -
                    </Button>
                  </>
                ) : (
                  <Button
                    className="mx-3 btn-sm botones-cantidad"
                    variant="success"
                    onClick={() => handleAumentar}
                  >
                    +
                  </Button>
                )}
              </Col>
              <Col xs={3} sm={2}>
                <p className="texto-cel text-primary">TOTAL</p>$
                {pedido.totalPrice}
              </Col>
              <Col xs={3} sm={2}>
                <p className="texto-cel text-primary">Cancelar</p>
                <Button
                  // className="mx-3"
                  variant="danger"
                  id={pedido.name}
                  className="btn-sm"
                  onClick={(e) => borrarMenu(e)}
                >
                  ❌
                </Button>
              </Col>
            </Row>
          ))}
          <Row className="d-flex align-items-center justify-content-between">
            <Col lg={6}>
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
            {/* <Col></Col>
            <Col></Col> */}
            <Col lg={6}>
              <h5 className=" mt-2 text-end">Subtotal:{totalPrecios}</h5>
            </Col>
          </Row>
          <div className="my-5 text-center">
            <Button variant="success" onClick={handleConfirm}>
              Confirmar Pedido
            </Button>
            <Button className="mx-3" variant="danger" onClick={handleCancel}>
              Cancelar Pedido
            </Button>
          </div>
        </Container>
      ) : (
        <Container
          fluid
          className="d-flex  justify-content-center align-items-center text-center text-bg-danger my-5"
        >
          <h2>
            NO TIENES NINGUN PEDIDO GUARDADO! POR FAVOR VUELVE AL INICIO Y ELIGE
            UN MENU DE NUESTRA CARTA.
          </h2>
          <Link
            to="/home"
            className="text-decoration-none text-black border border-dark border-1"
          >
            Volver <SlLogin />
          </Link>
        </Container>
      )}
    </>
  );
};

export default Pedidos;
