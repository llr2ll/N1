import React from 'react';
import './footer.css';
import logo from '/img/logo.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-left"><img className='logo-footer'src={logo}/></div>
        <div className="footer-right"><h1>N1 Rush - A melhor loja de jogos </h1></div>
      </div>
    </>
  );
}

export default Footer;