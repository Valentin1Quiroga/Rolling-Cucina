import "./header.css"
import {Container, Row, Col} from 'react-bootstrap';
import banner from '../../assets/img/logoHeader.jpg'
const Header = () => {
    return (
        <> 
<div id="headerimage" className="container-fluid"> 
<img src={banner} alt="" className="img-fluid"/>
</div>

<Container id='header-section' fluid>
<Row >
    <Col xs={12} sm={4} >
    <p className='d-flex justify-content-center align-items-center'>
    Teléfono: 381 4314545
    <br />
    Dirección: José Colombres 399
    <br />
    San Miguel de Tucumán
    <br />
    Horario de Atención:
    <br />
    Mañana: de 11 a 15hs.
    <br />
    Noche: de 20 a 00hs.
    </p>
    </Col>

    <Col xs={12} sm={8} className='d-flex justify-content-center align-items-center'>

<h1 className='display-1'>Il gusto della bella Italia</h1>

    </Col>

</Row>

</Container>

</>
     );
    
}
 
export default Header


