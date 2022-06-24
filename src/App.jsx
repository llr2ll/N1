import React from 'react';
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Cards from './components/cards/cards';

// https://codesandbox.io/s/9lx621k2v4?file=/src/components/Counter.jsx:276-286
function App() {
  return (
    <> 
      <Home /> 
      <Cards />
      <Footer />
    </>
  );
}
export default App;