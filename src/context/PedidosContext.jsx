import { createContext, useState } from "react";

export const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(1);
  const [singlePedido, setSinglePedido] = useState({
    name: "",
    units: "",
    price: 0,
    totalPrice: 0,
  });
  const [pedidos, setPedidos] = useState([]);

  // const agregadoSimple = (title, price) => {
  //   setSinglePedido({
  //     name: title,
  //     units: 1,
  //     price: price,
  //     totalPrice: price * 1,
  //   });
  // };
  function aumentarCantidad() {
    setCantidad(cantidad + 1);
  }

  function restarCantidad() {
    if (cantidad == 1) {
      return;
    } else {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <PedidosContext.Provider
      value={{
        cantidad,
        singlePedido,
        setSinglePedido,
        pedidos,
        setPedidos,
        aumentarCantidad,
        restarCantidad,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};
export default PedidosProvider;
