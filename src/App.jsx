import TestPage from "./pages/TestPage"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <TestPage/>
  )
}

export default App
