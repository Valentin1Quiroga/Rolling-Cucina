import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestPage/>} />
    </Routes>
  </Router>
  )
}

export default App
