import { createContext, useState } from "react";

export const AgregarContext = createContext();

const AgregarProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(1);
  const [pedido, setPedido] = useState({ name: "", unidades: "", notas: "" });

  function aumentarCantidad(menuName, notas) {
    setCantidad(cantidad + 1);
    // setPedido({ name: menuName, unidades: cantidad, notas: notas });
  }

  function restarCantidad() {
    if (cantidad == 1) {
      return;
    } else {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <AgregarContext.Provider
      value={{
        cantidad,
        pedido,
        setPedido,
        aumentarCantidad,
        restarCantidad,
      }}
    >
      {children}
    </AgregarContext.Provider>
  );
};
export default AgregarProvider;
