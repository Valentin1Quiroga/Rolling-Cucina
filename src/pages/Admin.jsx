import { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

import { toast, ToastContainer } from "react-toastify";

import GeneralModal from "../components/GeneralModal/GeneralModal";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";

import axios from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hooks/useGet";
import FormLogin from "../components/FormLogin/FormLogin";
import AddForm from "../components/AddForm/AddForm";

const Admin = () => {
  const [users, loading, getUsers] = useGet('/users',"users");
  const [selected,setSelected] =useState(undefined);
  const testUsuario = users.map(users=>{return{
    _id:users._id,
     name:users.name,
     phone:users.phone,
     email:users.email,
     admin:users.admin,
    }}) 
  const deleteUser = async()=>{
    try {
      await axios.delete('/users',selected);
      getUsers();
    } catch (error) {
      if(!selected){
        toast.error('Usuario no seleccionado')
      }else{
        toast.error(ERROR_MESSAGE)
      }
    }
  }
  return ( 
    <>
    <Container>
      <h1>Página de administración</h1>
      <Row className="m-3">
        <Col className="d-flex justify-content-end">
          <GeneralModal
           boton = {true}
          buttonText='Añadir usuario'
          modalTitle={'Añadir usuario'}
          // modalBody={<AddUserForm getUsers={getUsers}/>}
          modalBody={<AddForm/>}
          variant="success"
          />
          <GeneralModal
           boton = {true}
          buttonText='Eliminar usuario'
          modalTitle={'Eliminar usuario'}
          
          modalBody={<DeleteConfirmation deleteFunction={deleteUser}/>}
          variant="danger"
          />
          <GeneralModal
          boton = {true} 
          buttonText='Editar usuario'
          modalTitle={'Editar usuario'}
          modalBody={FormLogin}
          // modalBody={<EditUserForm selected={selected} getUsers={getUsers}/>}
          variant="warning"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {
          loading?
            <Spinner/>
          :
            <GeneralTable headings={['id','Nombre','Teléfono','email','Admin']} items={testUsuario} setSelected={setSelected} selected={selected}></GeneralTable>
          }
        </Col>
      </Row>
    </Container>
    <ToastContainer/>
    </>
   );
}
 
export default Admin;