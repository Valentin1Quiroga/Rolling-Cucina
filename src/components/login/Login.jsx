import FormLogin from "../FormLogin/FormLogin";
import './login.css'
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/logo-cucina-rolling-footer.png";
import FormRegistro from "../FormRegistro/FormRegistro";
const Login = () => {
    return (
        <Container fluid>
        <Row className="loginpage">
        <Col lg={6} className="centered-object logo-login">
         <img src={logo} alt="" className="img-fluid img-form" />
        </Col>
        <Col lg={6}  className="centered-object">
            <FormLogin/>          
        </Col>
      </Row>      
    </Container>
    
     );
}
 
export default Login;