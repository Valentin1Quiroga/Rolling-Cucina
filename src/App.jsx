import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import AdminRoute from "./routes/AdminRoute"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import TestJavier from "./pages/TestJavier"
import Menus from "./pages/menus"
import Error404 from "./pages/Error404";
import PrivateRoute from "./routes/PrivateRoute";
import CrudPedidos from "./pages/CrudPedidos";
import PedidosProvider from "./context/PedidosContext";
import Pedidos from "./pages/Pedidos"

function App() {
  return (
  <Router>
    <PedidosProvider>
    <Routes>
      <Route path='/*' element={<Error404/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<TestValentin/>} />
      <Route path='/pedidos' element={<Pedidos/>} />
     
      <Route path='/admin' element={<PrivateRoute><TestJavier/></PrivateRoute> }/>
      <Route path='/admin/pedidos' element={<PrivateRoute><CrudPedidos/></PrivateRoute> }/>
      <Route path='/admin/usuarios' element={<PrivateRoute><Admin/></PrivateRoute> }/>
      <Route path='/admin/menus' element={<PrivateRoute><Menus/></PrivateRoute> }/>
    </Routes>
    </PedidosProvider>
    <ToastContainer/> 
  </Router>
  )
}

export default App;
