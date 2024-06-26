import { useContext, useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { toast } from "react-toastify";
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
    setCantidad,
  } = useContext(PedidosContext);

  const [isBuying, setIsBuying] = useState(false);
  const agregadoSimple = (title, price, cantidad, image) => {
    setSinglePedido({
      name: title,
      image: image,
      units: cantidad,
      price: price,
      totalPrice: price * cantidad,
    });
    setIsBuying(true);
    toast.success("Menu agregado al pedido", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    console.log("cantidad", cantidad);
    if (isBuying) {
      if (Object.keys(singlePedido).length !== 0)
        setPedidos([...pedidos, singlePedido]);
    }
    setCantidad(1);
  }, [singlePedido]);

  return (
    <>
      <div className="container-fluid centered-object">
        <img
          className="img-fluid img-modal rounded"
          src="https://animalgourmet.com/wp-content/uploads/2019/05/spaghetti-3547078_1920-e1578933714229.jpg"
        />
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
          onClick={() => agregadoSimple(title, price, cantidad, image)}
        >
          Agregar
        </Button>
      </div>
    </>
  );
};

export default BtnVerProducto;
