import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const FormRegistro = ({handleClose, getUsers}) => {
  const [values, setValues] = useState({
    name:"",
    phone:"",
    email:"",
    password:"",
  });

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      await axiosBack.post('/users',values);
      getUsers();
      toast.done('Usuario creado');
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }

  return ( 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Diego Romero" onChange={handleChange} value={values.name} name='name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Numero de Telefono</Form.Label>
        <Form.Control type="text" placeholder="xxx-xxx-xxxx" onChange={handleChange} value={values.phone} name='phone'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Pepe@gmail.com" onChange={handleChange} value={values.email} name='email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={handleChange} value={values.password} name='password'/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Crear Cuenta
      </Button>
    </Form>
  );
}
 
export default FormRegistro;