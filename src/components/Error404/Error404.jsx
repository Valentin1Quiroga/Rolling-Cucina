
import img from "../../assets/img/404.png";
import "./Error404.css";

const Error404 = () => {
    return ( 
        <>
        <div><h1>404</h1></div>
        <h3>Algo salio mal</h3>
        <img className="img-fluid" src={img}/>
        </>
     );
}
 
export default Error404;