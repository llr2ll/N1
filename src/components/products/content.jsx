import React from 'react';
import { Link } from "react-router-dom";

const Content = (props) => {
  return (
    <>
      {
        props.jsonFilter.content.map((game) => 
          <Link className='products-game' to={`/products/${game.id}`} state={game}>
            <div key={game.id}>
                  <img className='products-img'src={game.img} />
                  <p className='products-name'>{game.name}</p>
            </div>
          </Link>
        )
      }
    </>
  )
}
export default Content;