import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import {Signup}  from './Signup'



import Homepage from './Homepage';



const AllRoutes = () => {
  return (
    <Routes>

    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    
    


        <Route path="/" element={<Homepage/>}/>


    </Routes>
  )
}

export default AllRoutes