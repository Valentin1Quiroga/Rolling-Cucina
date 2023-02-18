import { Children, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BtnVerProducto from '../BtnVerProducto/BtnVerProducto';
import FormLogin from '../FormLogin/FormLogin';
import GeneralModal from '../GeneralModal/GeneralModal';
import "./Card-menu.css"

const CardMarcos = ({title, description, image, price}) => {
    
  const handleBotonClick = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento
    console.log("Función del botón");
  };
    return ( 
       
            <GeneralModal
                    
                            bodyDiv={Children}
                            buttonText="Ver"
                            variant="primary"
                            modalTitle={title}
                            modalBody = {<BtnVerProducto image={image} title={title} description={description} price={price}/>}
                            >
 <Card id="tarjeta-menu">
                <div id='contenedor-img'>
                    <Card.Img className='img-fluid w-100' src={image} />
                </div>
                <div id='cuerpo-menu'>
                    <Card.Body>   
                        <div id='encabezado-menu'>
                            <Card.Title id='titulo-menu'>{title}</Card.Title>
                        
                        </div>                       
                        
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <br />

                        <div id='pie-menu'>
                            <h5 id='price-menu'>${price}</h5>
                            <Button id='boton-agregar-menu' onClick={handleBotonClick}>Agregar</Button>
                        </div>
                        
                    </Card.Body>
                </div>
            </Card>
                            </GeneralModal>
        
     );
}
export default CardMarcos;

