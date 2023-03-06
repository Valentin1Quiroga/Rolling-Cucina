import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import  axios  from "../../config/axios";
import { ERROR_MESSAGE } from "../../constants";

const EditForm = ({handleClose, getUsers,selected}) => {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        admin: false,
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
      await axios.put('/users/'+selected,values);
      getUsers();
      toast.success('Usuario editado');
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }

  const getUserInfo = async ()=>{
    try {
      const {data} = await axios.get('/users/', selected);
      setValues(data);
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  useEffect(()=>{
    getUserInfo()
  },[])

  return ( 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Nombre del usuario</Form.Label>
        <Form.Control type="text" placeholder="Nombre" onChange={handleChange} value={values.name} name='name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Correo" onChange={handleChange} value={values.email} name='email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="xxx-xxx-xxxx" onChange={handleChange} value={values.phone} name='phone'/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Rol</Form.Label>
        <Form.Control type="text" placeholder="admin, user, editor, etc... " onChange={handleChange} value={values.role} name='role'/>
      </Form.Group> */}
      <Button variant="success" type="submit" onClick={handleClose}>
        Editar
      </Button>
    </Form>
  );
}
 
export default EditForm