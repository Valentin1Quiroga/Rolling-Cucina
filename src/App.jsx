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


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestJavier/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/menus' element={<Menus/>}/>
    </Routes>
    <ToastContainer/>
  </Router>
  )
}

export default App
