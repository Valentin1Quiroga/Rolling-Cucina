import { Button, FloatingLabel, Form } from "react-bootstrap";
import "./BtnVerProducto.css"



const BtnVerProducto = ({title, description, image, price}) => {
    return (
        <>
            <div className="container-fluid centered-object">
                <img className='img-fluid' src={image} />
            </div>
            <div id="titulo-price">
                <div>
                    <h4>{title}</h4>
                </div>
                <div>
                    <h5>{price}</h5>
                </div>
            </div>

            <div>
                <h6>{description}</h6>
            </div>

            <div id="cantidad-producto">
                <div>
                    <h6>Cantidad</h6>
                </div>
                <div>
                    <h6>Botones</h6>
                </div>
            </div>

            <div>
                <FloatingLabel controlId="floatingTextarea2" label="Notas">
                    <Form.Control
                        as="textarea"
                        placeholder="Deja tus notas aquí"
                        // style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
            <br />
            <div className="container text-center">
            <Button>Agregar</Button>
            </div>
        </>
    );
}

export default BtnVerProducto;