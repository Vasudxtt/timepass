import React from 'react';
import Homes from './pages/Home.jsx';
import Header from './Structures/Header/Header.jsx';
import Footer from './Structures/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
import Contact from './pages/ContactUs.jsx';
import Tv from './pages/tvstack.jsx';
import Homes1 from './pages/Home1.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/home" element={<Homes1 />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;