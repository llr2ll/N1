import React from 'react';
import './sidebar.css';
import left from '/svgs/angle-left-solid.svg';
import right from '/svgs/angle-right-solid.svg';
import {data} from '../data';
import { useDispatch } from 'react-redux';
import { increment, decremented } from '../../../store/side';
import { useSelector } from 'react-redux';


function Sidebar() {
  
   const dispatch = useDispatch()
   const counter = useSelector(state => state.sidecounter.value);
   function remove(){dispatch(decremented())}
   function add(){dispatch(increment())}
   var obj = data[counter]
  return (
    <>
      <div className='sidebar'>
          <div className='bar'>
              <div className='top-side'> 
                 <p>{obj.textP}</p>
                 <div className="line-side"></div>
              </div>
              <div className='bottom-side'>
                 <p className='p-side'>{counter +1}/{data.length}</p>
                 <div className='btns'>
                     <button onClick={remove} className='btn-side-left'><img className='arrow' src={left}/></button>
                     <button onClick={add} className='btn-side-right'><img className='arrow' src={right}/></button>
                 </div>
              </div>
          </div>
      </div>
    </>
  );
}
export default Sidebar;