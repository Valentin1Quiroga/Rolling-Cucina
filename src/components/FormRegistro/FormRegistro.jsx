import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const FormRegistro = ({ handleClose, getUsers }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    admin: false,
  });
  let templateParams = {
    from_name: "Rolling Cucina",
    user_name: `${values.name}`,
    destinatario: `${values.email}`,
    message: `Su registro fue exitoso. Para ingresar recorda que tu usuario es el e-mail con el cual te registraste: ${values.email}. Y tu contraseña es: ${values.password}`,
  };
  function enviarMail() {
    emailjs
      .send(
        "service_m4cujxp",
        "template_62bpuap",
        templateParams,
        "6uvVSvTDTDtKYIJv4"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users", values);
      toast.success("Usuario creado");
      console.log("user created");
      if (!!response?.user) {
        const { data } = await axios.post("/users/login", {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("token", data.token);
        navigate("/home");
        // await enviarMail()
      }
    } catch (error) {
      console.log({ error });
      toast.error("Error al enviar los datos. Intente nuevamente más tarde.");
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
          pattern="[A-Za-z]{2,50}"
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
      <Button variant="success" type="submit" >
        Crear Cuenta
      </Button>
    </Form>
  );
};

export default FormRegistro;
