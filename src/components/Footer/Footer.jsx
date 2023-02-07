import './footer.css'
import logo from './assets/img/logo-cucina-rolling-footer.png';


const Footer = () => {
    return ( 
        <>
        <footer className='text-dark py-3 bg-grey'>
            <div className='container'>
                <div clasName='row'>
                    <div className='col-12 col-md4 d-flex aling-items-center justify-content-center'>
                        <img src={logo}/>
                    </div>
                    <ul className='col-12 col-md-4 list-unstyled'>
                        <li className='font-weight-bold mb-2'>Contacto</li>
                        <li className='text-center'> Telefono:3814314545</li>
                        <li className='text-center'> Direccion:Jose Colombres 399-S.M.T</li>
                        <li className='text-center'> Horario de atencion: mañana 11 a 15 hs <br/> noche: 20 a 00 hs</li>
                    </ul>
                    <ul>
                        <li className='col-12 col-md-4 list-unstyled'>
                            <li className='font-weight-bold mb-2'> Nuestras redes</li>
                            <li className='d-flex justify-content-between'>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-whatsApp"/>
                            </li>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;