import React from 'react';

const Content = (props) => {
  return (
    <>
      {
        props.jsonFilter.content.map((game) => 
            <li key={game.id}>
              <div className='dropdown-btn'>
                <a href={game.link}>{game.name}</a>
              </div>
            </li>
        )
      }
    </>
  )
}
export default Content;