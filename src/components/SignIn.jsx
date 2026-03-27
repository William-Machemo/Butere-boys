import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// defining our hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


// useNavigate hok
  const navigate= useNavigate();

// function to send data to the database
  const submit = async (e) => {
    e.preventDefault()
    setLoading("Please wait.........")

    

    try {

      const data=new FormData()
          data.append("email",email)
          data.append("password",password)

      

      const response = await axios.post("http://williammachemo.alwaysdata.net/api/signin", data)


      // check if the response has user item
       if (response.data.user){
      // if user is found, store user details in local storage
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setSuccess(response.data.message);
    
    // Redirect to/get products component

    setTimeout(()=>{
      navigate("/");

        },2000)
    }
    else{
  // user not found, Show error message
  setError(response.data.message)
}
    
    
      
    } catch (error) {
      setLoading("");
      setError(error.data.message)
    }
  }

  return (
    
    <div>
      <section className='row justify-content-center'>

        <div className='card shadow col-md-6 p-4'>
      <h1>Log in</h1>
          <form onSubmit={submit}>

            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>

            <input
              type="email"
              placeholder='Enter your email'
              className='form-control'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <input
              type="password"
              placeholder='Enter your password'
              className='form-control'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <input
              type="submit"
              value='Sign In'
              className='btn bg-success text-white w-100'
            />

            <p className='mt-3'>
              Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </p>

          </form>

        </div>

      </section>
    </div>
  )
}

export default SignIn