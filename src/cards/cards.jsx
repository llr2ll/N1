import React from 'react';
import './cards.css';
import {data} from './data';
import Title from './title/title';
import Modal from '../modal/modal';

function Cards() {
  return (
    <>
      <Title />
        <div className="slider-container">
            <div className="slider">
                <div className='cards'>
                     {data.map( (obj) =>
                         <div key={obj.id} className='card'>
                            <img className='card-img' src={obj.img}/>
                            <div className='info'>
                                <h1>{obj.text}</h1>
                                <h2>{obj.price}</h2>
                                <div className='div-btn'><Modal /></div>
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