import { useState } from 'react'

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/home.jsx";
import Home2 from "./pages/home2.jsx";

function App() {


  return (
      <>
      <BrowserRouter>
        <Routes>
           

        <Route path="/" element={<Home />}></Route>
        <Route path="/ruta2" element={<Home2 />}></Route>
 
      </Routes></BrowserRouter>

    </>
  )
}

export default App
