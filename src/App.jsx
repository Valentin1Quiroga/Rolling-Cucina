<<<<<<< HEAD
import TestPage from "./pages/TestPage"
import { useState } from 'react'
import './App.css'
import TestPage2 from "./pages/TestPage2"
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestValentin from "./pages/TestValentin"
>>>>>>> 580548c41c0932cbefab817b105610b222fd5681

function App() {
  return (
<<<<<<< HEAD
  <TestPage2/>
=======
  <Router>
    <Routes>
      <Route path='/*' element={<TestValentin/>} />
    </Routes>
  </Router>
>>>>>>> 580548c41c0932cbefab817b105610b222fd5681
  )
}

export default App
