import React from 'react';
import'./supports.css'
import supportspic from './supports.png'
function Supports() {
  return <>
  <div className='supports'>
    <div className='supportstext'>
        <h1>PrimeReact Pro Support</h1>
        <p>Professional support for your projects directly from the PrimeReact engineers themselves.</p>
        <p>PrimeReact PRO is a premium support service to secure the response of PrimeTek within 1 business day delivered via an exclusive application to skip the community forum and the github issue tracker to get ahead.</p>
        <button>Learn More</button>
    </div>
    <div className='supportspic'>
        <img src={supportspic} alt="" />
    </div>
  </div>
  
  </>;
}

export default Supports;
