import FormLogin from "../FormLogin/FormLogin";
import './login.css'
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/logo-cucina-rolling-footer.png";
const Login = () => {
    return ( 
        <Container fluid>
        <Row className="loginpage">
        <Col md={6} className="centered-object logo-login">
         <img src={logo} alt="" className="img-fluid img-form" />
        </Col>
        <Col md={6}  className="centered-object">
            <FormLogin/>          
        </Col>
      </Row>      
    </Container>
     );
}
 
export default Login;