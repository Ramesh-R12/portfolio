import React from 'react'
import AppBar from './component/AppBar'
import Home from './component/Home';
import './App.css';
import About from './component/About';
import Skill from './Skill'
import Contact from './component/Contact';
import Blog from './component/Blog';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
    });
  }, []);

  return (
   <>
     <AppBar/>
         <About/>
     <Skill/>
     <Blog/>
    <Contact/> 
  
   
   
   </>
     
       



    
  )
}

export default App