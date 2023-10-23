import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Video from './components/Video';
import Info from './components/Info';
import Calender from './components/Calender';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contrataciones" element={<Info />} />
        <Route path="/Vídeos" element={<Video />} />
        <Route path="/Calendario" element={<Calender />} />
      </Routes>
      </Router>
      
      <br />
      
      <Footer />
    </div>
  );
}

export default App;
