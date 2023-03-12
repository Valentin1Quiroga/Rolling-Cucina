import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";

const EditForm = ({getUsers, handleClose,selected}) => {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        admin: false
      });


    const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
    
      const editSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log(values);
          await axios.put("/users",{id:selected, fields:values});
          getUsers();
          toast.success("Usuario editado");
          handleClose();
        } catch (error) {
          console.log({ error });
          toast.error("Error al enviar los datos. Intente nuevamente más tarde.");
        }
      };

      const getInfo = async () =>{
        try {
            const {data} = await axios.get("/users/"+selected);
            console.log({data});
            setValues(data.user);
        } catch (error) {
            toast.error(ERROR_MESSAGE);
        }
      }

      useEffect(() => {
        getInfo()
      }, [])
      

    return ( 
        <Form onSubmit={editSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su nombre completo"
            onChange={handleChange}
            value={values.name}
            name="name"
            pattern="[A-Za-z ]{2,50}"
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="userPhone">
          <Form.Label>Numero de Telefono</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su numero de telefono sin el 0 y sin el 15"
            onChange={handleChange}
            value={values.phone}
            name="phone"
            minLength={10}
            maxLength={10}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Pepe@gmail.com"
            onChange={handleChange}
            value={values.email}
            name="email"
            minLength={5}
            maxLength={40}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="userPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={values.password}
            name="password"
            minLength={6}
            maxLength={20}
          />
        </Form.Group> */}
        <Button type="submit" variant="success">
          Editar Cuenta
        </Button>
      </Form>
     );
}
 
export default EditForm;
