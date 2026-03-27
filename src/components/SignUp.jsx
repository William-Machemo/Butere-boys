import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import  axios  from 'axios'

const Signup = () => {
  // initialize the hooks
  const[username,SetUsername]=useState("")
  const[email,SetEmail]=useState("")
  const[phone,SetPhone]=useState("")
  const[password,SetPassword]=useState("")


  //  initialize other hooks
  const[loading,SetLoading]=useState("")
  const[success,SetSuccess]=useState("")
  const[error,SetError]=useState("")
  // functions to send out data to the server


  const submit=async(e)=>{

    e.preventDefault()

    SetLoading("Please wait..........")

    try {
      
      const data=new FormData()

      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      // calling the api

      const response= await axios.post("http://kiruialvin.alwaysdata.net/api/signup",data)

      SetLoading("")
      SetSuccess(response.data.message)


      // reset your form
      SetUsername("")
      SetEmail("")
      SetPhone("")
      SetPassword("")





    } catch (error) {
      SetLoading("")
      SetError(error.message)





      
    }










  }

  return (
    <div className='row justify-content-center mt-3'>
      <div className='card shadow col-md-6'>
        <h1>Sign up</h1>
        <form action="" onSubmit={submit}>


        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>


        <input type="text" placeholder='Enter your username' className='form-control' required value={username} onChange={(e)=>SetUsername(e.target.value)}/>
        <br />
        
        <input type="email" placeholder='Enter your email'  className='form-control' required value={email} onChange={(e)=>SetEmail(e.target.value)}/>
        <br />
        
        <input type="tel" placeholder='Enter your phone number' className='form-control'required value={phone} onChange={(e)=>SetPhone(e.target.value)}/>
        <br />
        
        <input type="password" placeholder='enter your password' className='form-control'rel=''value={password} onChange={(e)=>SetPassword(e.target.value)}/>
        <br />

        <input type="submit" value="sign up" className='bg-info w-100 form-control text-white' />
        <br />
        <p>already have an account?  <Link to="/Signin">Sign in</Link></p>
        </form>









      </div>

    </div>
  )
}

export default Signup