import { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { AgregarContext } from "../../context/AgregarContext";
import "./BtnVerProducto.css"




const BtnVerProducto = ({title, description, image, price}) => {
const {cantidad,pedido,  aumentarCantidad, restarCantidad} = useContext(AgregarContext)
// const [cantidad, setCantidad] = useState(1);

// function aumentarCantidad() {
//     setCantidad(cantidad + 1);
//   }
  
// function restarCantidad() {
//     if(cantidad==1){
//         return
//     }else{
//         setCantidad(cantidad - 1);

//     }
//   }
console.log(pedido);

    return (
        <>
            <div className="container-fluid centered-object">
                <img className='img-fluid img-modal rounded' src={image} />
            </div>
            <div id="titulo-price">
                <div>
                    <h4>{title}</h4>
                </div>
                <div>
                    <h5>${price*cantidad}</h5>
                </div>
            </div>

            <div>
                <h6>{description}</h6>
            </div>

            <div id="cantidad-producto">
                <div>
                    <h6>Cantidad: <span className="text-danger fs-3">{cantidad}</span></h6>
                </div>
                <div >
                {cantidad>1 &&<Button variant="danger" onClick={restarCantidad}>-</Button>}
                   <Button className="successes m-1 border-success" onClick={aumentarCantidad}>+</Button>

                </div>
            </div>

           
            <br />
            <div className="container text-center">
            <Button className="bg-dark text-white border-0">Agregar</Button>
            </div>
        </>
    );
}

export default BtnVerProducto;