import React from 'react';
import'./charts.css'
import chartspic from './charts.png'
function Container() {
  return <>
    <div className='charts'>
        <div className='chartspic'>
            <img src={chartspic} alt="" />
        </div>
        <div className='chartstext'>
            <h1>Charts</h1>
            <p>Establish stunning user interfaces with the aid of the pie, line, bar, polararea, doughnut and radar charts</p>
        </div>
    </div>
  
  </>;
}

export default Container;
