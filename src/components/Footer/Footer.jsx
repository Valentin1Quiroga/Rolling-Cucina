import './footer.css'
import logo from  '../../assets/img/logo-cucina-rolling-letrasblacas.png';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return ( 
        <>
        <Container fluid className="footerbeta p-3 bg-dark text-light">
            <Row>
                <Col lg={4} xs={6} className="text-center centered-object">
                <img className="img-fluid" src={logo}/>
                </Col>
                <Col className='d-flex justify-content-center'>
                <ul className='list-unstyled'>
                    <h4>Contacto</h4>
                    <li>Telefono:3814314545</li>
                    <li>Direccion: Jose Colombres 399-S.M.T</li>
                    <li>Horario de atencion:mañana 11 a 15 hs <br/>noche 20 a 00</li>
                </ul>
                </Col>
                <Col className='d-flex justify-content-center'>
                <ul>
                    <h4>Nuestras Redes</h4>
                    <i className ="bi bi-instagram px-3"/>
                    <i className ="bi bi-facebook px-3"/>
                    <i className ="bi bi-twitter px-3"/>
                </ul>
                </Col>
            </Row>
        <hr/>
        
            <Row className='bg-footer'>

                <Col className='text-center' >
                    &copy; <small>2023</small> Copyright <strong>The Bootstrap Boys</strong>
                </Col>
            </Row>
            
        
        </Container>
        </>
     );
}
 
export default Footer;