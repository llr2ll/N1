import React, {PureComponent} from 'react';
import { useSelector } from 'react-redux';


function Counter() {

  const count = useSelector(state => state.counter.value);
  
  return (
    <>    
        <div className='circle-nav'>{count}</div>
    </>
  );
}

export default Counter;