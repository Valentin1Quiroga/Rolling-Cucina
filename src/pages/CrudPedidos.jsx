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

const CrudPedidos = () => {
  const [pedidos, loading, getPedidos] = useGet('/pedidos',"pedidos");
  const [selected,setSelected] =useState(undefined);
const testPedidos = pedidos.map(pedido=>{return{
_id:pedido._id,
 user:pedido.user,
 menu:pedido.menu.name,
 status:pedido.status,
 
}}) 
  const deletePedido = async()=>{
    try {
      await axios.delete('/menu'+ selected);
      getPedidos();
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
      <h1>Página de Pedidos</h1>
      <Row className="m-3">
        <Col className="d-flex justify-content-end">
          <GeneralModal
           boton = {true}
          buttonText='Añadir Pedido'
          modalTitle={'Añadir Pedido'}
          // modalBody={<AddUserForm getUsers={getUsers}/>}
          modalBody={FormLogin}
          variant="success"
          />
          <GeneralModal
           boton = {true}
          buttonText='Eliminar Pedido'
          modalTitle={'Eliminar Pedido'}
          
          modalBody={<DeleteConfirmation deleteFunction={deletePedido}/>}
          variant="danger"
          />
          <GeneralModal
          boton = {true} 
          buttonText='Editar Pedido'
          modalTitle={'Editar Pedido'}
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
            <GeneralTable headings={['id','nombre','menu','estado']} items={testPedidos} setSelected={setSelected} selected={selected}></GeneralTable>
          }
        </Col>
      </Row>
    </Container>
    <ToastContainer/>
    </>
   );
}
 
export default CrudPedidos;