import React from 'react';
import'./theme.css'
import themepic from './designer.jpg'
function Theme() {
  return <>
  <div className='theme'>
    <div className='themetext'>
        <h1>PrimeReact Theme <br/> Designer</h1>
        <p>Have your own style guide? No problem. Theme Designer is the easiest way to design and implement your own themes for the PrimeReact components.</p>
        <p>Take a tour on the PrimeReact designer interactive live demos and create your theme on the fly.</p>
        <button>Learn More</button>
    </div>
    <div className='themepic'>
        <img src={themepic} alt="" />
    </div>
  </div>
  
  </>;
}

export default Theme;
