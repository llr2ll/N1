import React from 'react';
import './text.css';
import {data} from '../data';
import { useSelector } from 'react-redux';

function Text() {
  const counter = useSelector(state => state.sidecounter.value);
  var obj = data[counter]
  return (
    <>
        <div className='text'>
          <h1>{obj.textP}</h1>
            <div className='price'>
              <h2>{obj.price}</h2>
              <h3>{obj.comma}</h3>
            </div>
            <p>{obj.textS}</p>
        </div>
    </>
  );
}
export default Text;