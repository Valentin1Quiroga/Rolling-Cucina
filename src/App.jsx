import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Error40 from "./pages/Error40"



function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<Error40/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    <ToastContainer/>
  </Router>
  )
}

export default App
