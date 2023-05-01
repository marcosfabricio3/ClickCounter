import React from 'react';
import '../style-sheets/counter.css'

function Counter({ numberOfClicks }){
  return(
    <div className='counter'>
      {numberOfClicks}
    </div>
  );
}

export default Counter;