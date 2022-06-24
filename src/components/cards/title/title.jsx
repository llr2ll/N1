import React from "react";
import './title.css';

function Title() {
  return (
    <> 
      <div className='title'>
          <div className='cube'>
              <div className='break'>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
              </div>
              <div className='break'>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
              </div>
              <div className='break'>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
              </div>
          </div>
        <h1>Produtos em destaque</h1>
      </div>
    </>
  );
}

export default Title;