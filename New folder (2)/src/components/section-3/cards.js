import React from 'react';
import './cards.css'
import Card from './cardapi'

function Cards() {
  return <>
   <div className='section3'>
       <div className='text'>
           <h1>Features</h1>
           <p>PrimeTek Informatics is the author of PrimeReact, a UI Component vendor with well known vastly popular projects including PrimeFaces, PrimeNG and PrimeVue.</p>
                <div className='card'>
{
    Card.map((api)=>{

             return <div className='card1'>
                        <img src={api.img} alt="" />
                        <h5>{api.tittle}</h5>
                        <p>{api.content}</p>
                    </div>
    })
}
                </div>
       </div>
   </div>
  
  </>;
}

export default Cards;
