import React, { useEffect, useState } from 'react'
//api fetch user
import { fetchUser } from '../../api/authApi'
import UserProfil from '../userProfil/UserProfil'
import Admin from '../admin/Admin'
import { useNavigate } from 'react-router-dom'


const PrivateRoute = () => {
const [userAcount,setUserAcount]=useState('')
  const getAcount=async()=>{
 const data = await fetchUser()
 console.log('data fetch user',data)
 setUserAcount(data)
  }
console.log('data jdidia get user',userAcount)
useEffect(()=>{
getAcount()
},[])

const navigate=useNavigate()
const logout=()=>{
  localStorage.removeItem('token')
  navigate('/')
}


  return (
    <div>{
      userAcount.role==="user" ? <UserProfil logout={logout}  userAcount={userAcount}  /> : <Admin  userAcount={userAcount} logout={logout}   />
      }
      </div>
  )
}

export default PrivateRoute