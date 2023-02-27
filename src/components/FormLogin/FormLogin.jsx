import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SlLogin } from "react-icons/sl";
import { toast } from "react-toastify";
import "./FormLogin.css";
import GeneralModal from "../GeneralModal/GeneralModal";
import FormRegistro from "../FormRegistro/FormRegistro";
import { useState } from "react";
import axios from "../../config/axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [backError, setBackError] = useState("");
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/users/login", values);
      localStorage.setItem("token", data.token);
      toast.success(`Benvenuto ${data.user.name}`);
      navigate("/home");
    } catch (error) {
      console.log(error.response.data.message);
      setBackError(error.response.data.message);
      setTimeout(() => {
        setBackError("");
      }, 3000);
      toast.error(
        "Ups! Error al iniciar sesion. Intenta de nuevo en unos minutos"
      );
    }
  };

  return (
    <Form
      className="border border-2 form-login p-5 rounded-5 w-75"
      onSubmit={submitForm}
    >
      <Form.Group className="mt-4 mb-5" controlId="formBasicEmail">
        <Form.Label className="label-login text-muted">Usuario</Form.Label>
        <Form.Control
          value={values.email}
          onChange={handleChange}
          name="email"
          type="email"
          className="bg-transparent text-center p-2"
          placeholder="USUARIO"
          required
          minLength={5}
          maxLength={40}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label-login text-muted">Contraseña</Form.Label>
        <Form.Control
          value={values.password}
          onChange={handleChange}
          name="password"
          type="password"
          className="bg-transparent text-center p-2"
          placeholder="CONTRASEÑA"
          required
          minLength={6}
          maxLength={20}
        />
        <Form.Text className="text-muted">Olvidaste tu contraseña?</Form.Text>
      </Form.Group>
      <div className="list-unstyled d-flex justify-content-sm-between justify-content-center flex-wrap">
        <div className="d-flex flex-column">
          <Form.Text className="text-muted d-flex justify-content-end pb-1  ">
            Aun no tienes cuenta?
          </Form.Text>
          <GeneralModal
            boton={true}
            buttonText="Registrate"
            variant="transparent"
            modalTitle="Crea tu cuenta"
            modalBody={<FormRegistro />}
          />
        </div>
        <Button variant="success" type="submit">
          Iniciar sesion <SlLogin />
        </Button>
      </div>
      <div>
        <ul className="list-unstyled d-flex justify-content-center mt-5">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100090240022071"
              target="_blank"
              className="text-dark"
            >
              <i className="fa-brands fa-facebook me-2 fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rolling.cucina/"
              target="_blank"
              className="text-dark"
            >
              <i className="fa-brands fa-instagram mx-2 fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/CucinaRolling"
              target="_blank"
              className="text-dark"
            >
              <i className="fa-brands fa-twitter mx-2 fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      {backError && <Alert variant="danger"> {backError}</Alert>}
    </Form>
  );
};

export default FormLogin;
