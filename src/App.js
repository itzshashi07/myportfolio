import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './components/navbar/Navbar';
import LandingPages from './screens/landingPages/LandingPages';
import Footer from './screens/footer/Footer';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }, []);
  // handle mouse movement to update the cursor position
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div className="App"  onMouseMove={(e) => handleMouseMove(e)}>
    <div className="dot" style={{ left: position.x, top: position.y }} />
    <div
    className="circle"
    style={{ left: position.x - 25, top: position.y - 25 }}
  />
    <Navbar />
    
    <LandingPages/>
    <Footer />


    </div>
  );
}

export default App;
