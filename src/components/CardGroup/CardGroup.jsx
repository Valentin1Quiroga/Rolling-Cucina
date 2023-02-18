import CardMarcos from "../Card-menu/Card-menu";
import "./CardGroup.css";
import { Container, Row, Col } from "react-bootstrap";
import useGet from "../../hooks/useGet";
import Spinner from "../Spinner/Spinner";

const CardGroup = () => {
  // const menus = [
  //   {
  //     name: "Fugazzeta",
  //     description: "mayonesa, moztaza, sal",
  //     image:"../src/assets/menu/1.png",
  //     price: 720,
  //   },
  //   {
  //     name: "Napolitana",
  //     description: "huevos, morrones, sal",
  //     image:"../src/assets/menu/2.png",
  //     price: 800,
  //   },
  //   {
  //     name: "Atrevida",
  //     description: "cebollas, aceitunas, ajo",
  //     image:"../src/assets/menu/3.png",
  //     price: 1000,
  //   },
  //   {
  //     name: "Fugazzeta",
  //     description: "mayonesa, moztaza, sal",
  //     image:"../src/assets/menu/4.png",
  //     price: 720,
  //   },
  //   {
  //     name: "Napolitana",
  //     description: "huevos, morrones, sal",
  //     image:"../src/assets/menu/5.png",
  //     price: 800,
  //   },
  //   {
  //     name: "Atrevida",
  //     description: "cebollas, aceitunas, ajo",
  //     image:"../src/assets/menu/6.png",
  //     price: 1000,
  //   }
  // ];
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
              <Col lg={6} className="contenedor-menu">

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
          <h2>soy pastas</h2>
        </Row>
      </Container>
    </>
  );
};

export default CardGroup;
