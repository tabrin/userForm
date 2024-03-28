import React, { useState } from 'react'
import MyModel from './ShowModel'
const Login=()=>{
    const[show, setShow]= useState(false)

 const closeModel =()=>{
    setShow(false)
 }
   
    return(
        <>
        <div>
            <p>Please Click on the Login button of this page for the Login Form </p>
            <button className='model-button' onClick={()=>setShow(true)}>Login</button>
            {show && <MyModel closeModel={closeModel}/>}
        </div>
        </>
    )
}
export default Login;