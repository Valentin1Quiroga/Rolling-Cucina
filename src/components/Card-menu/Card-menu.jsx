import { Children, useContext, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AgregarContext } from '../../context/AgregarContext';
import BtnVerProducto from '../BtnVerProducto/BtnVerProducto';
import FormLogin from '../FormLogin/FormLogin';
import GeneralModal from '../GeneralModal/GeneralModal';
import "./Card-menu.css"

const CardMarcos = ({title, description, image, price}) => {

    const {cantidad,  aumentarCantidad, restarCantidad} = useContext(AgregarContext)
    
  const handleBotonClick = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento
    console.log("Función del botón");
    aumentarCantidad()
  };
    return ( 

            <GeneralModal
                    onClick={()=>console.log(title)}
                            bodyDiv={Children}
                            buttonText="Ver"
                            variant="primary"
                            modalTitle={title}
                            modalBody = {<BtnVerProducto image={image} title={title} description={description} price={price}/>}
                            >
 <Card id="tarjeta-menu" className="text-white ">
                <div id='contenedor-img'>
                    <Card.Img className='img-fluid w-100' src={image} />
                </div>
                <div id='cuerpo-menu'>
                    <Card.Body>   
                        <div id='encabezado-menu'>
                            <Card.Title id='titulo-menu'>{title}</Card.Title>
                        
                        </div>                       
                        
                        <Card.Text className="description-style">
                            {description}
                        </Card.Text>
                        <br />

                        <div id='pie-menu'>
                            <h5 id='price-menu'>${price}</h5>
                           {cantidad>1?<div>

                           <Button variant="danger" onClick={restarCantidad}>-</Button>
                           
                            <Button id='boton-agregar-menu' onClick={handleBotonClick}>Agregar</Button> </div>: <Button id='boton-agregar-menu' onClick={handleBotonClick}>Agregar</Button>}
                        </div>
                        
                    </Card.Body>
                </div>
            </Card>
                            </GeneralModal>
        
     );
}
export default CardMarcos;

