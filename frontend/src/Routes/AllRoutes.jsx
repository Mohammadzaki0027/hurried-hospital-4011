import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import {Signup}  from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    
    
    </Routes>
  )
}

export default AllRoutes