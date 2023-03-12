import { Button } from "react-bootstrap";

const DeleteConfirmation = ({ handleClose, deleteFunction, elemento }) => {
  const handleDelete = () => {
    deleteFunction();
    handleClose();
  };
  return (
    <>
      <p> Estas seguro que deseas eliminar este {elemento}</p>
      <Button variant="success" onClick={handleDelete} className="mx-2">
        {" "}
        Confirmar{" "}
      </Button>
      <Button variant="danger" onClick={handleClose}>
        {" "}
        Cancelar{" "}
      </Button>
    </>
  );
};

export default DeleteConfirmation;
