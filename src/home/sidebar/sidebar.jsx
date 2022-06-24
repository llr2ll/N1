import React from 'react';
import './sidebar.css';
import left from '/svgs/angle-left-solid.svg';
import right from '/svgs/angle-right-solid.svg';

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
          <div className='bar'>
              <div className='top-side'> 
                 <p>Mortal Kombat</p>
                 <div className="line-side"></div>
              </div>
              <div className='bottom-side'>
                 <p className='p-side'>1/2</p>
                 <div className='btns'>
                     <button className='btn-side-left'><img className='arrow' src={left}/></button>
                     <button className='btn-side-right'><img className='arrow' src={right}/></button>
                 </div>
              </div>
          </div>
      </div>
    </>
  );
}
export default Sidebar;