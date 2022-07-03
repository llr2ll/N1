import React from 'react';
import './nav.css';
import plane from '/svgs/paper-plane.svg';
import search from '/svgs/search-solid.svg';
import shopping from '/svgs/shopping-bag-solid.svg';
import logoRush from '/img/rush.png';
import Dropdown from '../dropdown/dropdown';
import Counter from '../counter/counter';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className='nav'>
          <div className='nav-left'>
              <Dropdown />
              <Link to="/"><button className='logo-bnt'><img className='logo-left' src={logoRush}/></button></Link>
          </div>
          <div className='nav-right'>
              <Link to="/Contact">
                 <button className='btn-right'><img className='nav-icon' src={plane}/><h2>Contato</h2> 
                 </button>
              </Link> 
              <span className='spacer'></span>
              <button className='btn-right'><img className='nav-icon' src={search}/><h2>Buscar</h2></button>
              <span className='spacer'></span>
              <button className='btn-right'><img className='nav-icon' src={shopping}/></button>
              <Counter />
          </div>
      </div>
   </>
  );
}
export default Nav;