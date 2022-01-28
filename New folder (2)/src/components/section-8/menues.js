import React from 'react';
import'./menues.css'
import menuspic from './menus.png'
function Menues() {
  return <>
    <div className='menus'>
        <div className='menustext'>
            <h1>Menus</h1>
            <p>Variety of Menu options made up of menubar, contextmenu, panelmenu build with the flexible menu api.</p>
        </div>
        <div className='menuspic'>
            <img src={menuspic} alt="" />
        </div>
    </div>
  
  </>;
}

export default Menues;
