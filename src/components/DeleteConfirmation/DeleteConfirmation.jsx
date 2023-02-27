import { Button } from "react-bootstrap";

const DeleteConfirmation = ({handleClose, deleteFunction}) => {
  const handleDelete = ()=>{
    deleteFunction();
    handleClose();
  }
  return ( 
    <>
      <p> Estas seguro que deseas eliminar este elemento</p>
      <Button variant="success" onClick={handleDelete}> Confirmar </Button>
      <Button variant="danger" onClick={handleClose}> Cancelar </Button>
    </>
  );
}
 
export default DeleteConfirmation;