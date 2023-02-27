import { useContext } from "react";
import { Col } from "react-bootstrap";
import { AgregarContext } from "../../../context/AgregarContext";
import useGet from "../../../hooks/useGet";
import CardMarcos from "../../Card-menu/Card-menu";
import "./categorias.css";

const Categorias = () => {
  const [menus, loading, getmenus] = useGet("/menu", "menus");
  // const groupBy = function (array, key) {
  //   let groups;
  //   groups = array?.reduce((rv, x) => {
  //     (rv[x[key]] = rv[x[key]] || []).push(x);
  //     return rv;
  //   }, {});
  //   return groups;
  // };
  // const menuGroup = groupBy(menus, "category");
  // console.log(menuGroup);
  const { pedido, setPedido } = useContext(AgregarContext);
  const entradas = menus.filter((menu) => menu.category == "entrada");
  const pizzas = menus.filter((menu) => menu.category == "pizza");
  const pastas = menus.filter((menu) => menu.category == "pasta");
  const ensaladas = menus.filter((menu) => menu.category == "ensalada");
  const otros = menus.filter((menu) => menu.category == "otros");
  const bebidas = menus.filter((menu) => menu.category == "bebida");
  const postres = menus.filter((menu) => menu.category == "postre");
  const otrosYEnsaladas = otros.concat(entradas);

  return (
    <>
      <section id="pizzas" className="contenedor-menu">
        <Col
          className="d-flex justify-content-center align-items-center border border-2 border-end-0 border-start-0 bg-titulo rounded"
          xs={12}
        >
          {" "}
          <h2>PIZZAS</h2>
        </Col>
        {pizzas.map((pizza) => (
          <Col
            lg={6}
            className="contenedor-menu"
            key={pizza._id}
            onClick={() => {
              setPedido({ ...pedido, name: pizza.name });
            }}
          >
            <CardMarcos
              title={pizza.name}
              description={pizza.description}
              image={pizza.image}
              price={pizza.price}
            />
          </Col>
        ))}
      </section>
      <section id="pastas" className="contenedor-menu">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center border border-2 border-end-0 border-start-0 bg-titulo rounded"
        >
          {" "}
          <h2>PASTAS</h2>
        </Col>
        {pastas.map((pasta) => (
          <Col
            lg={6}
            className="contenedor-menu"
            key={pasta._id}
            onClick={() => {
              setPedido({ ...pedido, name: pasta.name });
            }}
          >
            <CardMarcos
              title={pasta.name}
              description={pasta.description}
              image={pasta.image}
              price={pasta.price}
            />
          </Col>
        ))}
      </section>
      <section id="ensaladas" className="contenedor-menu">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center border border-2 border-end-0 border-start-0 bg-titulo rounded"
        >
          {" "}
          <h2>ENSALADAS</h2>
        </Col>
        {ensaladas.map((ensalada) => (
          <Col
            lg={6}
            className="contenedor-menu"
            key={ensalada._id}
            onClick={() => {
              setPedido({ ...pedido, name: ensalada.name });
            }}
          >
            <CardMarcos
              title={ensalada.name}
              description={ensalada.description}
              image={ensalada.image}
              price={ensalada.price}
            />
          </Col>
        ))}
      </section>
      <section id="otros" className="contenedor-menu">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center border border-2 border-end-0 border-start-0 bg-titulo rounded"
        >
          {" "}
          <h2>ENTRADAS Y OTROS</h2>
        </Col>
        {otrosYEnsaladas.map((otro) => (
          <Col
            lg={6}
            className="contenedor-menu"
            key={otro._id}
            onClick={() => {
              setPedido({ ...pedido, name: otro.name });
            }}
          >
            <CardMarcos
              title={otro.name}
              description={otro.description}
              image={otro.image}
              price={otro.price}
            />
          </Col>
        ))}
      </section>
      <section id="bebidas" className="contenedor-menu">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center border border-2 border-end-0 border-start-0 bg-titulo rounded"
        >
          {" "}
          <h2>BEBIDAS</h2>
        </Col>
        {bebidas.map((bebida) => (
          <Col
            lg={6}
            className="contenedor-menu"
            key={bebida._id}
            onClick={() => {
              setPedido({ ...pedido, name: bebida.name });
            }}
          >
            <CardMarcos
              title={bebida.name}
              description={bebida.description}
              image={bebida.image}
              price={bebida.price}
            />
          </Col>
        ))}
      </section>
      <section id="postres" className="contenedor-menu">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center border border-2 border-end-0 border-start-0 bg-titulo rounded"
        >
          {" "}
          <h2>POSTRES</h2>
        </Col>
        {postres.map((postre) => (
          <Col
            lg={6}
            className="contenedor-menu"
            key={postre._id}
            onClick={() => {
              setPedido({ ...pedido, name: postre.name });
            }}
          >
            <CardMarcos
              title={postre.name}
              description={postre.description}
              image={postre.image}
              price={postre.price}
            />
          </Col>
        ))}
      </section>
    </>
  );
};
export default Categorias;
