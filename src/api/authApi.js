 import axios from 'axios'


 export const postAuth=async(values)=>{
  const addingAuth = await axios.post('http://localhost:5002/auth/register',{...values})
 }


 export const fetchUser=async()=>{
const token = localStorage.getItem('token')
const {data}=await axios.get('http://localhost:5002/auth/myaccount',{headers:{Authorization:token}})
return data 
 }