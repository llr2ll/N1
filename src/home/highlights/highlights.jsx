import React from 'react';
import './highlights.css';
import {data} from './data';

function Highlights(){
  return (
    <> 
      <div className="highlight">
          {data.map( (obj) =>
            <div key={obj.id} className='card-highlight'>
                <img className='highlight-img' src={obj.img} />
                <div className='card-bottom'>
                   <div className='bottom-left'></div>
                   <div className='bottom-right'>
                     <h1>{obj.text}</h1>
                     <div className="line-highlight"></div>
                   </div>      
                </div>
            </div>
          )}
      </div>
    </>
  );
}
export default Highlights;