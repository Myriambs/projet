import React,{useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
//  states elements 
import {useNavigate} from 'react-router-dom'
const Login = () => {
const Navigate=useNavigate()

 const [email,setEmail]=useState('')

 const [password,setPassword]=useState('')

const submit=async(values)=>{

  const res = await axios.post('http://localhost:5002/auth/login',values)
  await console.log('reponse login',res.data)
 await localStorage.setItem('token',res.data.token)
 Navigate('/privateRoute')
}

 


  return (
    <>
 
  <div className="wrapper register">
    <a href="index.html">
      <span className="icon-close">
        <ion-icon name="close-outline" />
      </span>
    </a>
    <h2>Login</h2>


    <div className="input-box">
      <span className="icon">
        <i className="bx bx-envelope" />
      </span>
      <input type="email" required=""
      value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
      <label>Email</label>
    </div>

    <div className="input-box">
      <span className="icon">
        <ion-icon name="lock-closed-outline" />
      </span>
      <input type="password" required="" 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
      />
      <label>Password</label>
    </div>

    <>
      <button type="button" className="btn"
       onClick={()=>submit({email,password})}
      
      >
        Login
      </button>
    </>
    <div className="login-register">
      <p>
        u dont  have an account?
        <a href="-" className="register-link">
          <button className="btn"  >  <Link to={'/register'}   >REgister</Link> </button>
        </a>
      </p>
    </div>
  </div>
</>

  )
}

export default Login