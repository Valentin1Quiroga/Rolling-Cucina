import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

import { toast, ToastContainer } from "react-toastify";
import { IoMdArrowBack } from "react-icons/io";
import GeneralModal from "../components/GeneralModal/GeneralModal";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";

import axios from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hooks/useGet";
import FormLogin from "../components/FormLogin/FormLogin";
import AddForm from "../components/AddForm/AddForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Nabvar";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, loading, getUsers] = useGet("/users", "users");
  const [selected, setSelected] = useState(undefined);
  const testUsuario = users.map((users) => {
    let administrador;
    if (users.admin) {
      administrador = "Es admin";
    } else {
      administrador = "No es admin";
    }
    return {
      _id: users._id,
      name: users.name,
      phone: users.phone,
      email: users.email,
      admin: administrador,
    };
  });

  // useEffect( ()=>{
  //   getUsers()
  // }, [users])

  const deleteUser = async () => {
    try {
      await axios.delete("/users", { data: { id: selected } });
      getUsers();
      toast.info("Usuario borrado con exito");
    } catch (error) {
      if (!selected) {
        toast.error("Usuario no seleccionado");
      } else {
        toast.error(ERROR_MESSAGE);
      }
    }
  };
  return (
    <>
      <Navbar />
      <Container className="mt-5 pt-1">
        <h1 className="mt-5">Administracion de usuarios</h1>
        <p>Selecciona al usuario que quieras modificar/eliminar.</p>
        <Link to="/admin">
          <IoMdArrowBack />
          Volver
        </Link>
        <Row className="m-3">
          <Col className="d-flex justify-content-end">
            <GeneralModal
              boton={true}
              buttonText="Añadir usuario"
              modalTitle={"Añadir usuario"}
              // modalBody={<AddUserForm getUsers={getUsers}/>}
              modalBody={<AddForm getUsers={getUsers} />}
              variant="success"
            />
            <GeneralModal
              boton={true}
              buttonText="Eliminar usuario"
              modalTitle={"Eliminar usuario"}
              modalBody={<DeleteConfirmation deleteFunction={deleteUser} />}
              variant="danger"
            />
            <GeneralModal
              boton={true}
              buttonText="Editar usuario"
              modalTitle={"Editar usuario"}
              modalBody={FormLogin}
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
              <GeneralTable
                headings={["id", "Nombre", "Teléfono", "email", "Admin"]}
                items={testUsuario}
                setSelected={setSelected}
                selected={selected}
              ></GeneralTable>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Admin;
