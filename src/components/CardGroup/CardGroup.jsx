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
  if (menus.category==="pasta"){}
  return (
    <>
      <Container className="bg-white">
        
        <Row id="pizzas">
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu" key={index}>

              <CardMarcos
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
              />
             
              </Col>
              ))}
          
        
        </Row>
        <Row id="pastas">
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu" key={index}>

              <CardMarcos
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
              />
             
              </Col>
              ))}
          
        
        </Row>
        <Row id="ensaladas">
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu" key={index}>

              <CardMarcos
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
              />
             
              </Col>
              ))}
          
        
        </Row>
        <Row id="otros">
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu" key={index}>

              <CardMarcos
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
              />
             
              </Col>
              ))}
          
        
        </Row>
        <Row id="bebidas">
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu" key={index}>

              <CardMarcos
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
              />
             
              </Col>
              ))}
          
        
        </Row>
        <Row id="postres">
          {
            loading?
            <Spinner></Spinner>
            :
          menus.map((menu, index) => (
              <Col lg={6} className="contenedor-menu" key={index}>

              <CardMarcos
                title={menu.name}
                description={menu.description}
                image={menu.image}
                price={menu.price}
              />
             
              </Col>
              ))}
          
        
        </Row>
      </Container>
    </>
  );
};

export default CardGroup;
