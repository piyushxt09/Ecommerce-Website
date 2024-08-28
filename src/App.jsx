import { useState } from 'react'
import './App.css'
import ProductsList from './components/Products'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contactForm" element={<Contact />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
