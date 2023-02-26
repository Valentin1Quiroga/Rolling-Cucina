import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import img from "../../assets/img/404.png";
import "./Errorcontainer.css";

const Errorcontainer = () => {
    return ( 
        <>
        <Container className="Container">
        <h1 className="mt-5">Error 404-Pagina no encontrada</h1>
        <img className="img-fluid img-404" src={img}/>
        <h3 className="mt-1">Algo salio mal</h3>
        <Link to="/Home" className="btn btn-primary">Volver al inicio</Link>
        
        </Container>
        </>
     );
}
 
export default Errorcontainer;
