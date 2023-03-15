import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import { ERROR_MESSAGE } from "../../constants";

const EditPedidoForm = ({ getPedidos, selected, handleClose }) => {
  const [values, setValues] = useState({
    // user: "",
    // menu: "",
    // total: "",
    status: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/pedidos", { id: selected, fields: values });
      getPedidos();
      toast.success("Pedido editado");
      handleClose();
    } catch (error) {
      toast.error("Error al enviar los datos. Intente nuevamente más tarde.");
    }
  };

  const getInfo = async () => {
    try {
      const { data } = await axios.get("/pedidos/" + selected);
      setValues(data.pedido);
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="user">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre del Usuario"
            onChange={handleChange}
            value={values.user}
            name="user"
            pattern="[A-Za-z]{2,50}"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="menu">
          <Form.Label>Pedido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Pedido del Usuario"
            onChange={handleChange}
            value={values.menu}
            name="menu"
            pattern="[A-Za-z\s]{2,300}"
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="total">
          <Form.Label>Total</Form.Label>
          <Form.Control
             required
             type="number"
             placeholder="Total del Pedido"
             onChange={handleChange}
             value={values.total}
             name="total"
             min={0}
             max={100000}
          />
        </Form.Group> */}

      <Form.Label>Estado del Pedido</Form.Label>
      <Form.Select
        className="mb-3"
        aria-label="Categoria a la que pertenece el menú"
        name="status"
        onChange={handleChange}
      >
        <option>Seleccione</option>
        <option value="pendiente">Pendiente</option>
        <option value="preparando">Preparando</option>
        <option value="listo para entrega">Listo para entrega</option>
        <option value="entregado">Entregado</option>
      </Form.Select>

      <Button type="submit" onClick={handleClose} variant="success">
        Editar Pedido
      </Button>
    </Form>
  );
};

export default EditPedidoForm;
