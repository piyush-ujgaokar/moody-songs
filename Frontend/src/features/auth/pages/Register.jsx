import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import {Link, useNavigate} from 'react-router'
import '../style/register.scss'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

  const {loading,handleRegister}=useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

async function handleSubmit(e){
      e.preventDefault()

      await handleRegister({username,email,password})

      navigate("/")

}

  if(loading){
    return <main>
        <h1>Loading...</h1>
    </main>
  }

  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup value={username} onchange={(e)=>setUsername(e.target.value)} label='username' placeholder='Enter Your Username'/>
          <FormGroup value={email} onchange={(e)=>setEmail(e.target.value)} label='Email' placeholder='Enter Your Email'/>
          <FormGroup value={password} onchange={(e)=>setPassword(e.target.value)} label='Password' placeholder='Enter Your Password'/>

          <button className='button' type='submit'>Register</button>
        </form>
        <p>Don't have An Account ? <Link to="/login">Login</Link></p>
      </div>
   </main>
  )
}

export default Register