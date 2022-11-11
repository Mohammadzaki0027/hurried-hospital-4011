import React from 'react'



import Car from '../Pages/Car/Car';



import Flight from '../Flight/Flight';
import { FlightCheckout } from '../Flight/FlightCheckout';

import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import { Signup } from './Signup'





import Homepage from './Homepage';
import StayPage from './StayPage';
import FlightPage from './FlightPage';
import CarPage from './CarPage';



const AllRoutes = () => {
  return (
    <Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/stay-page" element={<StayPage />} />
      <Route path="/flight-page" element={<FlightPage />} />
      <Route path="/car-page" element={<CarPage />} />
      <Route path="/car" element={<Car />} />
      <Route path='/flight' element={<Flight />} />
      <Route path="/flightcheckout" element={<FlightCheckout />} />




    </Routes>
  )
}

export default AllRoutes