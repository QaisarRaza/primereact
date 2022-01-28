import React from 'react';
import './pcard.css'
import Card from './pcardapi'

function Pcard() {
  return <>
   <div className='section10'>
       <div className='ptext'>
           <h1>Premium Application Templates</h1>
           <p>Designed by professional designers and and implemented as create-react-app templates, premium themes will boost your productivity by giving you a head start to bring thrilling applications to your users.</p>
                <div className='pcard'>
{
    Card.map((api)=>{

             return <div className='pcard1'>
                        <img src={api.img} alt="" />
                
                    </div>
    })
}
                </div>
       </div>
   </div>
  
  </>;
}

export default Pcard;
