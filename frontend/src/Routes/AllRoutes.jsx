import React from 'react'

import { Route, Routes } from "react-router-dom";
import Car from '../Pages/Car/Car';
import Homepage from './Homepage';


const AllRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/car" element={<Car/>}/>
    </Routes>
  )
}

export default AllRoutes