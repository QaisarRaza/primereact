import React from 'react';
import './logo.css'
import logo1 from '../section-2/airbus.svg'
import logo2 from '../section-2/amex.svg'
import logo3 from '../section-2/ebay.svg'
import logo4 from '../section-2/ford.svg'
import logo5 from '../section-2/fox.svg'
import logo6 from '../section-2/intel.svg'
import logo7 from '../section-2/lufthansa.svg'
import logo8 from '../section-2/mercedes.svg'
import logo9 from '../section-2/nvidia.svg'
import logo10 from '../section-2/sap.svg'
import logo11 from '../section-2/verizon.svg'
import logo12 from '../section-2/unicredit.svg'
import logo13 from '../section-2/viacom.svg'
import logo14 from '../section-2/vw.svg'

function Logos() {
  return <>
  
  <div className='all-logo'>
    <div className='first-row'>
        <img src={logo5} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
    </div>
    <div className='second-row'>
    <img src={logo8} alt="" />
        <img src={logo9} alt="" />
        <img src={logo10} alt="" />
        <img src={logo11} alt="" />
        <img src={logo12} alt="" />
        <img src={logo13} alt="" />
        <img src={logo14} alt="" />
    </div>
  </div>
  
  </>;
}

export default Logos;
