import React, { useState } from 'react'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  const {user,loading,handleLogin}=useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleSubmit(e){
       e.preventDefault()

       await handleLogin({email, password})

      navigate("/")
  } 

  if(loading){
    return <main>
        <h1>Loading...</h1>
    </main>
  }


  return (
   <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup value={email}  onchange={(e)=>setEmail(e.target.value)} onchan label='Email' placeholder='Enter Your Email'/>
          <FormGroup value={password}  onchange={(e)=>setPassword(e.target.value)} label='Password' placeholder='Enter Your Password'/>

          <button className='button' type='submit'>Login</button>
        </form>
        <p>Don't have An Account ? <Link to="/register">Register</Link></p>
      </div>
   </main>
  )
}

export default Login