import React, { useRef } from 'react'

const Form = () => {
    const PasswordRef = useRef()
    const Handleshow = () => {
        PasswordRef.current.type = "text"
    }
  return (
    <div>
      <label htmlFor="">
       <input type="password" placeholder='Enter Your Password' ref={PasswordRef}/>   
       <button onClick={Handleshow}> Show Password</button>       
     </label>
    </div>
  )
}

export default Form

