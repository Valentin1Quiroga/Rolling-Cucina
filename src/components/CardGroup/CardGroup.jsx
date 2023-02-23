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
  return (
    <>
      <Container className="bg-white mb-2">
        
        <Row>
          {
            loading?
            <Spinner></Spinner>
            :
            results.length!==0?
    <div className="d-flex flex-wrap">
      {
        results.map((result,index)=> <Col lg={6} className="contenedor-menu"><CardMarcos
        key={index}
        title={result.name}
        description={result.description}
        image={result.image}
        price={result.price}
      /></Col>)
      }
    </div> 
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
