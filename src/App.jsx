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


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestValentin/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <ToastContainer/>
  </Router>
  )
}

export default App
