import React,{useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
// jiben api backend ajou auth user 
import { postAuth } from '../../api/authApi'
//  states elements 
import {useNavigate} from 'react-router-dom'
const Register = () => {
const Navigate=useNavigate()
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [userName,setUserName]=useState('')
 const [password,setPassword]=useState('')
 const[adresse,setAdresse]=useState('')
 const[phone,setPhone]=useState('')


 const handelAdd=async(values)=>{

 try{
 await postAuth(values)
 Navigate('/login')
 }catch(err){
console.log(err)
 }}



  return (
    <>
 
  <div className="wrapper register">
    <a href="index.html">
      <span className="icon-close">
        <ion-icon name="close-outline" />
      </span>
    </a>
    <h2>Registration</h2>

    <div className="input-box">
      <span className="icon">
        <i className="bx bx-user" />
      </span>
      <input type="text" required=""  value={userName} 
      onChange={(e)=>setUserName(e.target.value)}   />
      <label>Username</label>
    </div>


    <div className="input-box">
      <span className="icon">
        <i className="bx bx-user" />
      </span>
      <input type="text" required=""  value={name} onChange={(e)=>setName(e.target.value)}     />
      <label>Name</label>
    </div>



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



    <div className="input-box">
      <span className="icon">
        <i className="bx bx-user" />
      </span>
      <input type="text" required=""
         value={phone}
         onChange={(e)=>setPhone(e.target.value)}
      />
      <label>phone</label>
    </div>


    <div className="input-box">
      <span className="icon">
        <i className="bx bx-user" />
      </span>
      <input type="text" required="" 
         value={adresse}
         onChange={(e)=>setAdresse(e.target.value)}
      />
      <label>Adresse</label>
    </div>




    <>
      <button type="button" className="btn"
      onClick={()=>handelAdd({name,email,userName,password,phone,adresse})}
      
      >
        Register
      </button>
    </>
    <div className="login-register">
      <p>
        Already have an account?
        <a href="-" className="register-link">
          <button className="btn"  >  <Link to={'/login'}   >Login</Link> </button>
        </a>
      </p>
    </div>
  </div>
</>

  )
}

export default Register