import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";


const AddMenuForm = ({getMenu, handleClose}) => {

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        admin: false,
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
          console.log(values);
          await axios.post("/menus", values);
          getMenu();
          toast.success("Menú creado");
        } catch (error) {
          console.log({ error });
          toast.error("Error al enviar los datos. Intente nuevamente más tarde.");
        }
      };

    return ( 
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="menuName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su nombre completo"
            onChange={handleChange}
            value={values.name}
            name="name"
            pattern="[A-Za-z]{2,50}"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="menuDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su nombre completo"
            onChange={handleChange}
            value={values.description}
            name="name"
            pattern="[A-Za-z]{2,100}"
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="menuCategory">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            required
            type=""
            placeholder=""
            onChange={handleChange}
            value={values.category}
            name=""
            minLength={5}
            maxLength={15}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="menuPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
             required
             type="text"
             placeholder="Ingrese el precio del menú"
             onChange={handleChange}
             value={values.price}
             name="phone"
             minLength={1}
             maxLength={10}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="menuDescription">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su nombre completo"
            onChange={handleChange}
            value={values.description}
            name="name"
            pattern="[A-Za-z]{2,100}"
          />
        </Form.Group>

        <Button type="submit" onClick={handleClose} variant="success">
          Crear Menu
        </Button>
      </Form>
     );
}
 
export default AddMenuForm;