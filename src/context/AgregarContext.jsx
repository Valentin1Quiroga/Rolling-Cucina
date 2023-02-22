import { createContext, useState } from "react";

export const AgregarContext = createContext();

const AgregarProvider = ({children}) => {
const [cantidad, setCantidad] = useState(1);
// const [pedido,setPedido]=useState([
// [{name:card.name,cantidad:cantidad,notas:"la quiero sin mayonesa"},{name:lasagna,cantidad:1,notas:""}]
// ])


function aumentarCantidad() {
    setCantidad(cantidad + 1);
  }
  
function restarCantidad() {
    if(cantidad==1){
        return
    }else{
        setCantidad(cantidad - 1);

    }
  }



return(
    <AgregarContext.Provider value={{
        cantidad,
        aumentarCantidad,
        restarCantidad
    }}>
        {children}
    </AgregarContext.Provider>
)

}
export default AgregarProvider