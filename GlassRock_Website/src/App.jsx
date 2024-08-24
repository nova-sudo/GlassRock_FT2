import React from "react";
import { Link,BrowserRouter,Routes, Route, Router } from 'react-router-dom';
import './App.css';

import Home from "./components/Home.jsx";
import Landing from "./components/Landing.jsx";
import Sustain  from "./general/Sustain.jsx";
import Mineral from "./general/Mineral.jsx";
import Applications from "./general/Applications.jsx";

import glassrock2 from "./assets/glassrock.jpg"

import Aboutus from "./general/Aboutus.jsx";
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Landing" element={<Landing/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/sustain" element={<Sustain/>}/>
    <Route path="/mineral" element={<Mineral/>}/>
    <Route path="/applications" element={<Applications/>}/>
    </Routes>

    





    </BrowserRouter>
  );
}

export default App;
