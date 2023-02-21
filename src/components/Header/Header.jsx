import "./header.css"
import {Container, Row, Col} from 'react-bootstrap';
import banner from '../../assets/img/foto4.jpg'

const Header = () => {
    return (
        <> 
<div id="headerimage" className="container-fluid px-0 pt-5"> 
<img src={banner} alt="" className="img-fluid vw-100"/> 

</div>

<Container id='header-section' className="d-flex d-lg-block py-2 justify-content-center align-items-center" fluid>
<Row >
    <Col xs={12} md={5} className='info-restaurante'>
    <p className='d-flex justify-content-center align-items-center py-2 fst-italic otra-letra'>
    Teléfono: 381 4314545 - Dirección: José Colombres 399 SMT
    <br />
    Horario de Atención: Mañana: de 11 a 15hs.
    <br />
    Noche: de 20 a 00hs.
    </p>
    </Col>

    <Col xs={12} lg={7} className='d-flex align-items-center justify-content-center text-center'>

<h1>Il gusto della bella Italia</h1>

    </Col>

</Row>

</Container>

</>
     );
    
}
 
export default Header


