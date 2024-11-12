import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import HomePage from './components/HomePage/HomePage'
import UserProfil from './components/userProfil/UserProfil'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Admin from './components/admin/Admin'
const App = () => {
  return (
    <div>

<Routes>
  <Route path='/' element={<HomePage/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/login" element={<Login/>}/>
<Route path='/user' element={<UserProfil/>}/>
<Route path='/admin' element={<Admin/>}/>

<Route path='/privateRoute' element={<PrivateRoute/>}/>
</Routes>

    </div>
  )
}

export default App