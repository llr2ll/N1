import React from 'react';
import './singleProduct.css'
import { useLocation } from "react-router-dom";
import content from '../../dropdown/content';
import Nav from '../../nav/nav';
import { useDispatch } from 'react-redux';
import { increment } from '../../../store/counter';
import { open } from '../../../store/modal';

function singleProduct() {
  
  const location = useLocation();
  const data = location.state;

  const dispatch = useDispatch()
  const [verify, setVerify] = React.useState(true);
  let text = 'Comprar';
  
  if(verify == false){
    text = 'Comprado!';
  }
  
  function Add(){
    dispatch(increment())
    dispatch(open())
    setVerify(!verify)
  }
  return (
    <>
        <div className='products-nav'>
          <Nav />
        </div>
        <div>
          <div className='product-content'>
              <img src={data.img} className='product-img' />
              <h1>{data.name}</h1>
              <button className='card-btn' onClick={Add}>{text}</button>
          </div>
        </div>
    </>
  );
}
export default singleProduct;