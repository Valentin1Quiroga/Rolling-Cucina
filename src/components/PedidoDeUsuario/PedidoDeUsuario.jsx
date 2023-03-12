const PedidoDeUsuario = ({ menu }) => {
  console.log("esto recibe", menu);
  const pedidos = menu.filter((menu) => Object.keys(menu).length > 1);
  const notas = menu.filter((menu) => Object.keys(menu).length <= 1);
  console.log("esto recibe COMO NOTAS", notas);
  return (
    <>
      {pedidos.map((pedido, index) => (
        <ul
          key={index}
          className="border border-2 border-dark bg-white rounded"
        >
          <li>
            {pedido.units} {pedido.name}
          </li>
        </ul>
      ))}

      {notas.map((value) => (
        <p className="">
          📝Notas sobre el pedido: <strong> "{value.notas}"</strong>
        </p>
      ))}
    </>
  );
};

export default PedidoDeUsuario;
