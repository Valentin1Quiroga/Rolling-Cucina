import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestPage/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    <ToastContainer/>
  </Router>
  )
}

export default App
