import Navbar from "../components/Navbar/Nabvar";
import Footer from "../components/Footer/Footer";
import Pedido from "../components/Pedido/Pedido";
import { Container } from "react-bootstrap";



const Pedidos = () => {
    return ( 
        <>
        <Navbar></Navbar>
        <Container>
            <br /><br /><br />
            <Pedido></Pedido>
        </Container>
        <Footer></Footer>
        </>
     );
}
 
export default Pedidos;