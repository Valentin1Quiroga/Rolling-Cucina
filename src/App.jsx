import TestPage from "./pages/TestPage"
import { useState } from 'react'
import './App.css'
import TestPage2 from "./pages/TestPage2"

function App() {
  const [count, setCount] = useState(0)

  return (
  <TestPage2/>
  )
}

export default App
