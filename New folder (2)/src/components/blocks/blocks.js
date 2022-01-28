import React from 'react';
import'./blocks.css'
import blockspic from './blocks.png'
function Blocks() {
  return <>
  <div className='blocks'>
    <div className='blockstext'>
        <h1>PrimeBlocks</h1>
        <p>280+ ready to use UI blocks to build spectacular applications in no time.</p>
        <button>Learn More</button>
    </div>
    <div className='blockspic'>
        <img src={blockspic} alt="" />
    </div>
  </div>
  
  </>;
}

export default Blocks;
