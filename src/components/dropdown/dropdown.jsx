import React from 'react';
import './dropdown.css';
import Content from './content';
import {data} from './data';
import plane from '/svgs/paper-plane.svg';
import search from '/svgs/search-solid.svg';
import shopping from '/svgs/shopping-bag-solid.svg';
import logoRush from '/img/rush.png';
import hamb from '/svgs/icon_hamburguer.svg';
import Counter from '../counter/counter';

function Dropdown() {

  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(current => !current)
  }
  
  return (
    <>
      <button onClick={toggle} className='btn-left'><img className='nav-icon'src={hamb}/></button>
      <div className={isActive ? 'show' : 'hide'}>
          <div className='dropdown-content'>
             <div className='triangle'></div>
             <div className='dropdown'>
                <div className='dropdown-nav'>
                     <div className='dropdown-nav-left'>
                        <button onClick={toggle} className='dropdown-close'>X</button>
                        <a href='#'><button className='dropdown-logo'><img className='dropdown-logo-img' src={logoRush}/></button></a>
                     </div>
                      <div className='dropdown-nav-right'>
                        <button className='btn-right'><img className='nav-icon' src={plane}/><h2>Contato</h2></button>
                        <button className='btn-right'><img className='nav-icon' src={search}/><h2>Buscar</h2></button>
                        <button className='btn-right'><img className='nav-icon' src={shopping}/></button>
                        <Counter />
                      </div>
                </div>
                      {data.map( (obj) =>
                        <div className='dropdown-spacer'key={obj.id}>
                            <ul className='ul'>
                                  <li>{obj.category}</li>
                                  <Content jsonFilter={obj}/>   
                            </ul>
                        </div>
                      )}
              </div>    
          </div> 
      </div>
    </>
  );
}
export default Dropdown;