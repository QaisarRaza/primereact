import React from 'react';
import'./data.css'
import datapic from './data.png'
function Data() {
  return <>
    <div className='form'>
        <div className='datatext'>
            <h1>Data</h1>
            <p>Led by the most powerful React Table component, Data components deliver performant and customizable solutions to assist you deal with complex UI requirements smoothly.</p>
        </div>
        <div className='datapic'>
            <img src={datapic} alt="" />
        </div>
    </div>
  
  </>;
}

export default Data;
