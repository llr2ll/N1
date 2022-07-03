import React from 'react';
import { Link } from "react-router-dom";

const Content = (props) => {
  return (
    <>
      {
        props.jsonFilter.content.map((game) => 
            <li key={game.id}>
              <div className='dropdown-btn'>
                <Link to={`/products/${game.id}`} state={game}>
                  <p>{game.name}</p>
                </Link>
              </div>
            </li>
        )
      }
    </>
  )
}
export default Content;