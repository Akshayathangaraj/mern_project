import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Your custom CSS
import Header from './components/Header';
import MobileNavbar from './components/MobileNavbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div id="top">
        <Header />
        <MobileNavbar />
        <main>
          {/* Wrapping all routes in the Routes component */}
          <Routes>
            <Route path="/" element={<Hero />} /> {/* Home */}
            <Route path="/signup" element={<Signup />} /> {/* Signup page */}
            <Route path="/shop" element={<Shop />} /> {/* Shop */}
            <Route path="/about" element={<About />} /> {/* About */}
            <Route path="/contact" element={<Contact />} /> {/* Contact */}
          </Routes>
          <Banner />
          <Navbar />
        </main>
      </div>
    </Router>
  );
}

export default App;

