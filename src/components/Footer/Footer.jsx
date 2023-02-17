import './footer.css'
import logo from  '../../assets/logo-cucina-rolling-footer.png';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return ( 
        <>
        <Container fluid className="footerbeta">
            <Row>
                <Col>
                <img className="img-fluid" src={logo}/>
                </Col>
                <Col>
                <ul className='list-unstyled'>
                    <h4>Contacto</h4>
                    <li>Telefono:3814314545</li>
                    <li>Direccion: Jose Colombres 399-S.M.T</li>
                    <li>Horario de atencion:mañana 11 a 15 hs <br/>noche 20 a 00</li>
                </ul>
                </Col>
                <Col>
                <ul>
                    <h4>Nuestras Redes</h4>
                    <i className ="bi bi-instagram px-3"/>
                    <i className ="bi bi-facebook px-3"/>
                    <i className ="bi bi-twitter px-3"/>
                </ul>
                </Col>
            </Row>
        <hr/>
        <div className='Copyright'>
            <div className='row'>
                <div className='col-text-center'>
                    &copy; <small>2023</small> Copyright <strong>The Bootstrap Boys</strong>
                </div>
            </div>
        </div>
        </Container>
        </>
     );
}
 
export default Footer;