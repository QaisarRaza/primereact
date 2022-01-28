import React, {useState} from 'react';
import './navbar.css'
import logo from '../Navbar/logo.svg'
function Navbar() {
const [show, setShow] = useState(false);
  return <>
     <nav>
         <div className='logos'>
            <img src={logo} alt="" />
         </div>
         <div class="openmanue"><i class="fas fa-bars" onClick={ () =>setShow(!show)} ></i></div>
        <div className={show ? "nav-items active" : "nav-items"}>
           <li><a href="">COMPONENTS</a></li>
           <li><a href="">BLOCKS</a></li>
           <li><a href="">DESIGNER</a></li>
           <li><a href="">GITHUB</a></li>
        </div>
     </nav>
  
  </>;
   
}

export default Navbar;
