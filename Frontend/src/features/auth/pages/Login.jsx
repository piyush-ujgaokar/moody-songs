import React from 'react'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  const {user,loading,handleLoginr}=useAuth()


  return (
   <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <FormGroup label='Email' placeholder='Enter Your Email'/>
          <FormGroup label='Password' placeholder='Enter Your Password'/>

          <button className='button' type='submit'>Login</button>
        </form>
        <p>Don't have An Account ? <Link to="/register">Register</Link></p>
      </div>
   </main>
  )
}

export default Login