import React from 'react';
import'./container.css'
import containerpic from './panels.png'
function Container() {
  return <>
    <div className='container'>
        <div className='containerpic'>
            <img src={containerpic} alt="" />
        </div>
        <div className='containertext'>
            <h1>Containers</h1>
            <p>Collapsible Panel, Tabs and the mighty PrimeFlex Grid CSS are just the few examples of the container components to design and implement appealing layouts in no time.</p>
        </div>
    </div>
  
  </>;
}

export default Container;
