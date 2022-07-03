import React from 'react';
import './modal.css';
import Counter from '../counter/counter';
import mario from '/img/mario.png';
import close from '/svgs/close_btn.svg';
import { useSelector } from 'react-redux';
import { open } from '../../store/modal';
import { useDispatch } from 'react-redux';

function Modal(){
  
  const dispatch = useDispatch()
  const openModal = useSelector(state => state.modal.value);
  let arr = []
  
  if(openModal == true){
    arr.push('show');
  }else{
    arr.push('hide')
  }
  
  function toggle() {
    dispatch(open())
  }
  
  return (
    <>
      <div className={arr}>
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