import { Children, useContext, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { PedidosContext } from "../../context/PedidosContext";
import BtnVerProducto from "../BtnVerProducto/BtnVerProducto";
import FormLogin from "../FormLogin/FormLogin";
import GeneralModal from "../GeneralModal/GeneralModal";
import "./Card-menu.css";

const CardMarcos = ({ idboton, title, description, image, price }) => {
  const { cantidad, aumentarCantidad, restarCantidad, pedidos, setPedidos } =
    useContext(PedidosContext);

  const handleBotonClick = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento
  };

  return (
    <Card id="tarjeta-menu" className="text-white ">
      <div id="contenedor-img">
        <Card.Img
          className="img-fluid w-100"
          src="https://animalgourmet.com/wp-content/uploads/2019/05/spaghetti-3547078_1920-e1578933714229.jpg"
        />
      </div>
      <div id="cuerpo-menu">
        <Card.Body>
          <div id="encabezado-menu">
            <Card.Title id="titulo-menu">{title}</Card.Title>
          </div>

          <Card.Text className="description-style">{description}</Card.Text>
          <br />

          <div id="pie-menu">
            <h5 id="price-menu">${price}</h5>

            <GeneralModal
              boton={true}
              buttonText="Agregar"
              variant="success"
              modalTitle="Crea tu cuenta"
              modalBody={
                <BtnVerProducto
                  handleClose
                  image={image}
                  title={title}
                  description={description}
                  price={price}
                />
              }
            />
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};
export default CardMarcos;
