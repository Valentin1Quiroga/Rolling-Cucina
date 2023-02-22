import CardMarcos from "../Card-menu/Card-menu";
import "./CardGroup.css";
import { Container, Row, Col } from "react-bootstrap";
import useGet from "../../hooks/useGet";
import Spinner from "../Spinner/Spinner";

const CardGroup = () => {
  const [ menus, loading,getmenus]=useGet("/menu","menus")
  console.log(menus);
  if (menus.category==="pasta"){}
  return (
    <>
      <Container className="bg-white">
        
        <Row>
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu"  onClick={()=>console.log(menu.name)}>

              <CardMarcos
                key={index}
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
