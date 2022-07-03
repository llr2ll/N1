import React from 'react';
import './products.css';
import Nav from '../nav/nav';
import {data} from '../dropdown/data';
import Content from './content';

function Products() {

  return (
    <>
      <div className='products-nav'>
        <Nav />
      </div>
      <div className='products-div'>
        {data.map( (obj) => 
          <div className='products-games' key={obj.id}>
            <Content jsonFilter={obj} />
          </div>
        )}
      </div>
    </>
  );
}
export default Products;