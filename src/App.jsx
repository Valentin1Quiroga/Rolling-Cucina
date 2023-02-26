import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Error40 from "./pages/Error40"

import PrivateRoute from "./routes/PrivateRoute"
import AgregarProvider from "./context/AgregarContext"


function App() {
  return (
  <Router>
    <AgregarProvider>
    <Routes>
      <Route path='/*' element={<Error40/>} />
      
      
    <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>} />
    </Routes>
    </AgregarProvider>
    <ToastContainer/>
  </Router>
  )
}

export default App
