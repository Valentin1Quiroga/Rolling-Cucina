import { useState } from "react";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";

import { toast, ToastContainer } from "react-toastify";

import GeneralModal from "../components/GeneralModal/GeneralModal";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hooks/useGet";
import FormLogin from "../components/FormLogin/FormLogin";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Nabvar";
import { Link } from "react-router-dom";
import PedidoDeUsuario from "../components/PedidoDeUsuario/PedidoDeUsuario";
import EditPedidoForm from "../components/EditForm/EditPedidoForm";

const CrudPedidos = () => {
  const [pedidos, loading, getPedidos] = useGet("/pedidos", "pedidos");
  const [selected, setSelected] = useState(undefined);
  const testPedidos = pedidos.map((pedido) => {
    return {
      _id: pedido._id,
      user: pedido.user.name,
      status: pedido.status,
      menu: pedido.menu,
      total: pedido.total,
    };
  });
  const deletePedido = async () => {
    try {
      await axios.delete("/pedidos", { data: { id: selected } });
      getPedidos();
    } catch (error) {
      if (!selected) {
        toast.error("Menu no seleccionado");
      } else {
        toast.error(ERROR_MESSAGE);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5 pt-1">
        <h1 className="mt-5">Administración de Pedidos</h1>
        <p>Selecciona al pedido que desees modificar su estado o eliminarlo.</p>
        <Link to="/admin">
          <IoMdArrowBack />
          Volver
        </Link>
        <Row className="m-3">
          <Col className="d-flex justify-content-end">
            {testPedidos.length > 1 && (
              <div className="mx-1">
                <GeneralModal
                  boton={true}
                  buttonText="Eliminar Pedido"
                  modalTitle={"Eliminar Pedido"}
                  modalBody={
                    <DeleteConfirmation
                      deleteFunction={deletePedido}
                      elemento="pedido de la base de datos?"
                    />
                  }
                  variant="danger"
                />
              </div>
            )}

            <GeneralModal
              boton={true}
              buttonText="Modificar estado"
              modalTitle={"Estado del Pedido"}
              modalBody={
                <EditPedidoForm selected={selected} getPedidos={getPedidos} />
              }
              // modalBody={<EditUserForm selected={selected} getUsers={getUsers}/>}
              variant="warning"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {loading ? (
              <Spinner />
            ) : (
              // <GeneralTable
              //   headings={[
              //     "id",
              //     "Usuario que realizó el pedido",
              //     "menu",
              //     "estado",
              //     "total $",
              //   ]}
              //   items={testPedidos}
              //   setSelected={setSelected}
              //   selected={selected}
              // ></GeneralTable>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Pedido</th>
                    <th>Total</th>
                    <th>Estado del pedido</th>
                  </tr>
                </thead>
                <tbody>
                  {testPedidos.length !== 0 &&
                    testPedidos.map((pedido, index) => (
                      <tr
                        key={index}
                        onClick={() => setSelected(pedido._id)}
                        className={
                          selected === pedido._id ? "row-selected" : ""
                        }
                      >
                        <td>{pedido._id}</td>
                        <td>{pedido.user}</td>
                        <td>
                          <GeneralModal
                            boton={true}
                            buttonText="Ver pedido"
                            modalTitle={`Pedido de ${pedido.user}`}
                            modalBody={<PedidoDeUsuario menu={pedido.menu} />}
                            // modalBody={<EditUserForm selected={selected} getUsers={getUsers}/>}
                          />
                        </td>
                        <td>{pedido.total}</td>
                        <td>{pedido.status}</td>
                        {/* {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))} */}
                      </tr>
                    ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
      <Footer className="mt-5 fixed-bottom" />
      <ToastContainer />
    </>
  );
};

export default CrudPedidos;
