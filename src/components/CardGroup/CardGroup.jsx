import CardMarcos from "../Card-menu/Card-menu";
import "./CardGroup.css";
import { Container, Row, Col } from "react-bootstrap";
import useGet from "../../hooks/useGet";
import Spinner from "../Spinner/Spinner";
import { useContext } from "react";
import { AgregarContext } from "../../context/AgregarContext";

const CardGroup = () => {
  const [ menus, loading,getmenus]=useGet("/menu","menus")
  const {pedido, setPedido} = useContext(AgregarContext)
  console.log(menus);
  if (menus.category==="pasta"){}
  // const test = ()=>{setPedido({...pedido,name:"hola"})
  // console.log(pedido);}
  return (
    <>
      <Container className="bg-white">
        
        <Row>
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu) => (
              <Col lg={6} className="contenedor-menu"  onClick={()=>{setPedido({...pedido,name:menu.name})}}>
                
              <CardMarcos
                key={menu._id}
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
               
              />
             
              </Col>
              ))}
          
        
        </Row>
        <Row id="pastas">
        </Row>
      </Container>
    </>
  );
};

export default CardGroup;
