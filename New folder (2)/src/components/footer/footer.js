import React from 'react';
import './footer.css';
import footer from './footer.svg'
function Footer() {
  return <>
  
  <div className='footer'>
      <div className='footerpic'>
        <img src={footer} alt="" />
      </div>
      <div className='icons'>
          <div className='github'><i class="fab fa-github"></i></div>
          <div className='github'><i class="fab fa-twitter"></i></div>
      </div>
  </div>
  
  </>;
}

export default Footer;
