import React, { useState } from 'react'

const MyModal=({closeModel})=>{
    const[message, setMessage] = useState(false)
    return(
        <>
        <div className='modelWrapper'></div>
        <div className='model-Container'>
        <h1>Welcome User</h1>
       <strong><label> user Name : </label></strong><br />
        <input type="text" name='name' autoComplete='off' placeholder='Enter Your Name' /><br /><br />
        <strong><label> Email : </label></strong><br />
        <input type="email" name='email' autoComplete='off' placeholder='Enter Your Email' /><br />
        <strong><label> Password : </label></strong><br />
        <input type="password" name='password'  /><br />
        <button className='model1-button' onClick={()=>setMessage(true)}>Login</button>
        {message && <Message/>}
        <button type='button' className='btn btn-danger' onClick={closeModel}>Close</button>

        </div>
        </>
    )
}

const Message=()=>{
    return(
        <>
        <h1>Thank You for Login</h1>
        </>
    )
}
export default MyModal;