import { createContext, useState } from "react";
import useGet from "../hooks/useGet";

export const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [menus] = useGet("/menu", "menus");
  const [cantidad, setCantidad] = useState(1);
  const [singlePedido, setSinglePedido] = useState({})
  const [pedidos, setPedidos] = useState([]);
  // const soloids = menus.map((menu) => {
  //   return { _id: menu._id, cantidad: 0 };
  // });
  // const [todos, setTodos] = useState([]);

  // console.log(todos);
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
