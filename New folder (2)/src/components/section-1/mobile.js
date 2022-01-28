import React from 'react';
import './mobile.css';
import mobile from '../section-1/mobile.png';
import logo1 from '../section-1/faces.svg';
import logo2 from '../section-1/angular.svg';
import logo3 from '../section-1/vue.svg';
function Mobile() {
  return <>
  <div className='mobile'>
      <div className='component'>
          <h1>NextGen React UI Components</h1>
          <p>The ultimate collection of design-agnostic, flexible and accessible React UI Components.</p>
          <button>Get Started</button>
          <p>Also available for Angular, Vue and Java</p>
          <div className='logo'>
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
          </div>
      </div>
      <div className='mpic'>
          <img src={mobile} alt="" />
      </div>
  </div>
  
  </>;
}

export default Mobile;
