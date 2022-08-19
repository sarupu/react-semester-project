import Header from "./components/Header/Header"
import Detail from "./pages/Detail"
import Home from "./pages/Home"

import { Routes, Route } from "react-router-dom"
import './App.scss'

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/' element={<Detail />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
