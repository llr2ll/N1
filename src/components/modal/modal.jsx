import React from 'react';
import './modal.css';
import Counter from '../counter/counter';
import mario from '/img/mario.png';
import miniMario from '/img/miniMario.png';
import close from '/svgs/close_btn.svg';

function Modal(){
  
  const [isActive, setIsActive] = React.useState(false);

  function Add(){
    toggle()
  }
  
  function toggle() {
    setIsActive(current => !current)
  }
  
  return (
    <>
      <button className='card-btn' onClick={Add}>Comprar</button>
      <img className='miniMario' src={miniMario}/>
      <div className={isActive ? 'show' : 'hide'}>
         <div className='modal'>
            <div className='modal-card'>
                  <button className='close-btn' onClick={toggle}><img className='close' src={close} /></button> 
                  <div className='modal-textblock'>
                      <div className='modal-line'></div>
                      <p className='modal-text'>Pedido realizado com sucesso!</p>
                      <div className='modal-line'></div>
                  </div>
                  <img className='mario' src={mario}/>
            </div>
         </div>
      </div>
    </>
  );
}
export default Modal;