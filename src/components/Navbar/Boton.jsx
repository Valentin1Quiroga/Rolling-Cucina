
import { useState } from "react";
import "./Navbar.css" 
const Boton = () => {
   
    // document.querySelector('.icon-menu').onClick = function(){
    //     var t = this,
    //         c = t.className;
    //     t.className = c.indexOf('active') > -1 ? c.replace('active','').trim() : c + ' active';
    //   };

    const [boton, setBoton] = useState ("")
    const handleBoton = () => {

        if (boton==="")
        {setBoton("active")}
        else
        {setBoton("")}
    }
    
    return ( 

        <span onMouseDown = {()=>handleBoton()} className = {`icon-menu ${boton}`} >
        <i className="icon-menu-line icon-menu-a"></i>
        <i className="icon-menu-line icon-menu-b"></i>
        <i className="icon-menu-line icon-menu-c"></i>
      </span>

     );
}
 
export default Boton;