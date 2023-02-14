import CardMarcos from "../Card-menu/Card-menu";
import "./CardGroup.css";
import { Container, Row, Col } from "react-bootstrap";

const CardGroup = () => {
  const nombres = [
    {
      name: "Fugazzeta",
      ingredientes: "mayonesa, moztaza, sal",
      imagen:"../src/assets/menu/1.png",
      precio: 720,
    },
    {
      name: "Napolitana",
      ingredientes: "huevos, morrones, sal",
      imagen:"../src/assets/menu/2.png",
      precio: 800,
    },
    {
      name: "Atrevida",
      ingredientes: "cebollas, aceitunas, ajo",
      imagen:"../src/assets/menu/3.png",
      precio: 1000,
    },
    {
      name: "Fugazzeta",
      ingredientes: "mayonesa, moztaza, sal",
      imagen:"../src/assets/menu/4.png",
      precio: 720,
    },
    {
      name: "Napolitana",
      ingredientes: "huevos, morrones, sal",
      imagen:"../src/assets/menu/5.png",
      precio: 800,
    },
    {
      name: "Atrevida",
      ingredientes: "cebollas, aceitunas, ajo",
      imagen:"../src/assets/menu/6.png",
      precio: 1000,
    }
  ];

  return (
    <>
      <Container>
        <Row id="ensaladas">
         
          {nombres.map((persona, index) => (
              <Col lg={6} id="contenedor-menu">

              <CardMarcos
                key={index}
                title={persona.name}
                ingredientes={persona.ingredientes}
                imagen={persona.imagen}
                precio={persona.precio}
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
