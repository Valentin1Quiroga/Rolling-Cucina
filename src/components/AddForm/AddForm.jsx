import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";

const AddForm = ({ getUsers, handleClose }) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
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
          if (values.password == values.repeat_password) {

           try {
                console.log(values);
             await axios.post("/users", values);
             getUsers();
             toast.success("Usuario creado");
             handleClose();
           } catch (error) {
             console.log({ error });
             toast.error("Error al enviar los datos. Intente nuevamente más tarde.");
           }
          } else {
            toast.error("Las contraseñas son distintas");
          }

      };

    return (
        <Form onSubmit={handleSubmit}>
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
        <Form.Text className= "text-muted d-flex fst-italic msg-psw"> Ingrese su número de teléfono sin el 0 y sin el 15.</Form.Text>
        <Form.Control
          required
          type="text"
          placeholder="XXXX-XXXXXX"
          onChange={handleChange}
          value={values.phone}
          name="phone"
          minLength={10}
          maxLength={10}
          pattern="[0-9]{10}"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Text className= "text-muted d-flex fst-italic msg-psw"> Este correo será el usuario con el cual ingresará a la página </Form.Text>
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
      <Form.Group className="mb-3" controlId="userPassword">
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
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRepeatPassword">
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Repetí Contraseña"
          onChange={handleChange}
          value={values.repeat_password}
          name="repeat_password"
          minLength={6}
          maxLength={20}
        />
      </Form.Group>
      <Form.Label>Rol</Form.Label>
      <Form.Select
        className="mb-3"
        aria-label="Rol del nuevo usuario"
        name="admin"
        onChange={handleChange}
      >
        <option>Seleccione</option>
        <option value={true}>Administrador</option>
        <option value={false}>Usuario común</option>
      </Form.Select>

      <Button type="submit" variant="success">
        Crear Cuenta
      </Button>
    </Form>
  );
};

export default AddForm;
