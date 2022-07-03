import React from 'react';
import './cards.css';
import {data} from './data';
import Title from './title/title';
import arrowL from '/svgs/angle-left-solid.svg';
import arrowR from '/svgs/angle-right-solid.svg';
import miniMario from '/img/miniMario.png';
import { useDispatch } from 'react-redux';
import { increment } from '../../store/counter';
import { open } from '../../store/modal';

// https://alvarotrigo.com/blog/create-a-slider-with-pure-CSS/

function Cards() {

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
      <Title />
        <div className="slider-container">
            <div className="slider">
                <div className='cards'>
                    <div className='arrow-cards'>
                       <a className="slide__prev"  title="Prev"><img className='card-arrow' src={arrowL} /></a>
                       <a className="slide__next"  title="Next"><img className='card-arrow' src={arrowR} /></a>
                    </div>
                     {data.map( (obj) =>
                         <div key={obj.id} className='card'>
                            <img className='card-img' src={obj.img}/>
                            <div className='info'>
                                <h1>{obj.text}</h1>
                                <h2>{obj.price}</h2>
                                <div className='div-btn'>
                                  <button className='card-btn' onClick={Add}>{text}</button>
                                  <img className='miniMario' src={miniMario}/>
                                </div>
                            </div>
                         </div>
                      )}
                </div>
          </div>
      </div>
    </>
  );
}
export default Cards;