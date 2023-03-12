import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";


const AddMenuForm = ({getMenus, handleClose}) => {

    const [values, setValues] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        image: ""
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
          await axios.post("/menu", values);
          getMenus();
          toast.success("Menú creado");
        } catch (error) {
          console.log({ error });
          toast.error("Error al enviar los datos. Intente nuevamente más tarde.");
        }
      };

    return ( 
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese nombre del menú"
            onChange={handleChange}
            value={values.name}
            name="name"
            pattern="[A-Za-z]{2,50}"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese descripción del menú"
            onChange={handleChange}
            value={values.description}
            name="description"
            pattern="[A-Za-z\s]{2,300}"
          />
        </Form.Group>
        
        

        <Form.Label>Categoría</Form.Label>
         <Form.Select className="mb-3" aria-label="Categoria a la que pertenece el menú" name="category" onChange={handleChange}>
        <option>Seleccione</option>
        <option value="entrada">Entrada</option>
        <option value="pizza">Pizza</option>
        <option value="pasta">Pasta</option>
        <option value="ensalda">Ensalda</option>
        <option value="otros">Otros</option>
        <option value="bebida">Bebida</option>
        <option value="postre">Postre</option>
    </Form.Select>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
             required
             type="number"
             placeholder="Ingrese el precio del menú"
             onChange={handleChange}
             value={values.price}
             name="price"
             min={0}
             max={100000}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese la url de la imágen"
            onChange={handleChange}
            value={values.image}
            name="image"
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