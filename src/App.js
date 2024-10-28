import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Tokens from "./Pages/Tokens/Tokens";
import Home from "./Pages/Homepage/Home";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Tokens/>} path="/tokens"/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
