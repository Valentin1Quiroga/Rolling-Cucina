import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestValentin from "./pages/TestValentin"

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestValentin/>} />
    </Routes>
  </Router>
  )
}

export default App
