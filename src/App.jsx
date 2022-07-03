import React from 'react';
import './App.css';
import Prohibited from './components/prohibited/prohibited';
import { Routes, Route } from "react-router-dom";
import Contact from './components/contact/contact';
import Products from './components/products/products';
import SingleProduct from './components/products/singleProduct/singleProduct';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Prohibited />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <Modal />
    </>
  );
}
export default App;