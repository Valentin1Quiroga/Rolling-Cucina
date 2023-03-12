import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function ForgotPasswordModal(handleClose) {
    const navigate= useNavigate()
const handleSubmit =(e)=>{e.stopPropagation()
navigate("/login")
handleClose()}
    return (
        <> <p>A fin de recuperar tu contraseña, por favor indicar el correo al cual enviaremos los pasos a seguir.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email"  placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type='submit'>Enviar</Button>
        </Form> 
        </>
  );
}

export default ForgotPasswordModal;