import React from 'react';
import'./forms.css'
import formpic from './forms.png'
function Forms() {
  return <>
    <div className='form'>
        <div className='formpic'>
            <img src={formpic} alt="" />
        </div>
        <div className='formtext'>
            <h1>Forms</h1>
            <p>Develop attractive forms with the variety of the form <br/> components compatible with the React form libraries  such as <br/>Formik.</p>
        </div>
    </div>
  
  </>;
}

export default Forms;
