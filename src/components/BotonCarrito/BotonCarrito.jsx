import { Link } from "react-router-dom";
import './botonCarrito.css'
const BotonCarrito = () => {
    return ( 
        <Link to="/pedidos" className="carrito fs-3 ms-auto text-center text-decoration-none fixed-bottom">🛒</Link>
     );
}
 
export default BotonCarrito;