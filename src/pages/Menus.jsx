import { useState } from "react";
import { Button, Col, Container, Navbar, Row, Spinner } from "react-bootstrap";

import { toast, ToastContainer } from "react-toastify";

import GeneralModal from "../components/GeneralModal/GeneralModal";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";

import axios from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hooks/useGet";
import FormLogin from "../components/FormLogin/FormLogin";


const Menus = () => {
  const [menus, loading, getMenus] = useGet('/menu',"menus");
  const [selected,setSelected] =useState(undefined);
const testMenu = menus.map(menu=>{return{
_id:menu._id,
 name:menu.name,
 description:menu.description,
 category:menu.category,
 price:menu.price,
 image:menu.image,
}}) 
  const deleteMenu = async()=>{
    try {
      await axios.delete('/menu'+ selected);
      getMenus();
    } catch (error) {
      if(!selected){
        toast.error('Menu no seleccionado')
      }else{
        toast.error(ERROR_MESSAGE)
      }
    }
  }
  return ( 
    <>
    <Container>
      <h1>Página de Menús</h1>
      <Row className="m-3">
        <Col className="d-flex justify-content-end">
          <GeneralModal
           boton = {true}
          buttonText='Añadir menú'
          modalTitle={'Añadir menú'}
          // modalBody={<AddUserForm getUsers={getUsers}/>}
          modalBody={FormLogin}
          variant="success"
          />
          <GeneralModal
           boton = {true}
          buttonText='Eliminar menú'
          modalTitle={'Eliminar menú'}
          
          modalBody={<DeleteConfirmation deleteFunction={deleteMenu}/>}
          variant="danger"
          />
          <GeneralModal
          boton = {true} 
          buttonText='Editar menú'
          modalTitle={'Editar menú'}
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
            <GeneralTable headings={['id','nombre','descripción','categoria','precio','imagen']} items={testMenu} setSelected={setSelected} selected={selected}></GeneralTable>
          }
        </Col>
      </Row>
    </Container>
    <ToastContainer/>
    </>
   );
}
 
export default Menus;