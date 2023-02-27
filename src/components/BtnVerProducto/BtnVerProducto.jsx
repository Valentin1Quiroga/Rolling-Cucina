import { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { PedidosContext } from "../../context/PedidosContext";
import "./BtnVerProducto.css";

const BtnVerProducto = ({ title, description, image, price }) => {
  const {
    cantidad,
    singlePedido,
    setSinglePedido,
    pedidos,
    setPedidos,
    aumentarCantidad,
    restarCantidad,
  } = useContext(PedidosContext);
  // const agregadoSimple = (title, price) => {
  //   setSinglePedido({
  //     name: title,
  //     units: 1,
  //     price: price,
  //     totalPrice: price * 1,
  //   });
  //   // setPedidos([...pedidos, nuevaOrden]);
  // };
  // console.log(singlePedido);
  return (
    <>
      <div className="container-fluid centered-object">
        <img className="img-fluid img-modal rounded" src={image} />
      </div>
      <div id="titulo-price">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h5>${price * cantidad}</h5>
        </div>
      </div>

      <div>
        <h6>{description}</h6>
      </div>

      <div id="cantidad-producto">
        <div>
          <h6>
            Cantidad: <span className="text-danger fs-3">{cantidad}</span>
          </h6>
        </div>
        <div>
          {cantidad > 1 && (
            <Button variant="danger" onClick={restarCantidad}>
              -
            </Button>
          )}
          <Button
            className="successes m-1 border-success"
            onClick={aumentarCantidad}
          >
            +
          </Button>
        </div>
      </div>

      <br />
      <div className="container text-center">
        <Button
          className="bg-dark text-white border-0"
          // onClick={agregadoSimple(title, price)}
        >
          Agregar
        </Button>
      </div>
    </>
  );
};

export default BtnVerProducto;
