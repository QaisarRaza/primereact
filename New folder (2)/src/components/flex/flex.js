import React from 'react';
import'./flex.css'
import flexpic from './flex.png'
function Flex() {
  return <>
  <div className='flex'>
    <div className='flextext'>
        <h1>PrimeFlex</h1>
        <p>PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</p>
        <button>Learn More</button>
    </div>
    <div className='flexpic'>
        <img src={flexpic} alt="" />
    </div>
  </div>
  
  </>;
}

export default Flex;
