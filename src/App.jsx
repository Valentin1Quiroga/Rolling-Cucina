import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestLuis/>} />
    </Routes>
  </Router>
  )
}

export default App
