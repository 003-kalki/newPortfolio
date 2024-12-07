
import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
       <Navbar/>    
       <Hero /> 
       <Skills/>
       <About />  
       <Projects/>
       <Routes> 
      </Routes>
      
    </BrowserRouter>
  );
}
