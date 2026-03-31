import React from 'react'
import FormGroup from '../components/FormGroup'
import {Link} from 'react-router'
import '../style/register.scss'

const Register = () => {
  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <FormGroup label='username' placeholder='Enter Your Username'/>
          <FormGroup label='Email' placeholder='Enter Your Email'/>
          <FormGroup label='Password' placeholder='Enter Your Password'/>

          <button className='button' type='submit'>Register</button>
        </form>
        <p>Don't have An Account ? <Link to="/login">Login</Link></p>
      </div>
   </main>
  )
}

export default Register