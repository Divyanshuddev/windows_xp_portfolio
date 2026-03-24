import { Route, Routes } from "react-router-dom"
import Booting from "./pages/Booting"
import Login from "./pages/Login"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Booting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
