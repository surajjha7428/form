import React, { useRef } from 'react'

const Form = () => {
    const PasswordRef = useRef()
    const Handleshow = () => {
        PasswordRef.current.type = "password"
    }
  return (
    <div>
      <label htmlFor="">
       <input type="text" placeholder='Enter Your Password' ref={PasswordRef}/>   
       <button onClick={Handleshow}> Show Password</button>       
     </label>
    </div>
  )
}

export default Form

