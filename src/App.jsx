import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"
import Home from "./pages/Home"


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestLuis/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  </Router>
  )
}

export default App
