import { cloneElement, useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PedidosContext } from "../../context/PedidosContext";

const GeneralModal = ({
  boton,
  buttonText,
  children,
  modalTitle,
  modalBody,
  variant,
}) => {
  const [show, setShow] = useState(false);
  const { pedidos } = useContext(PedidosContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    handleClose();
  }, [pedidos]);
  return (
    <>
      {boton ? (
        <Button variant={variant} onClick={handleShow} className="border">
          {buttonText}
        </Button>
      ) : (
        <div onClick={handleShow}>{children}</div>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="text-center">
          <Modal.Title handleClose={handleClose}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cloneElement(modalBody, { handleClose: handleClose })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GeneralModal;
