import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestValentin from "./pages/TestValentin"

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
