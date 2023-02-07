import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Card-menu.css"

const CardMarcos = ({title, ingredientes, imagen, precio}) => {
    return ( 
        
            <Card id="tarjeta-menu">
                <div id='contenedor-img'>
                    <Card.Img className='img-fluid w-100' src={imagen} id="img-menu" />
                </div>
                <div id='cuerpo-menu'>
                    <Card.Body>   
                        <div id='encabezado-menu'>
                            <Card.Title id='titulo-menu'>{title}</Card.Title>
                            <Button id='boton-ver-menu'>Ver</Button>    
                        </div>                       
                        
                        <Card.Text>
                            {ingredientes}
                        </Card.Text>
                        <br />

                        <div id='pie-menu'>
                            <h5 id='precio-menu'>${precio}</h5>
                            <Button id='boton-agregar-menu'>Agregar</Button>
                        </div>
                        
                    </Card.Body>
                </div>
            </Card>
        
     );
}
export default CardMarcos;

