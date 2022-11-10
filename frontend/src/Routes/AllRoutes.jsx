import React from 'react'

import { Route, Routes } from "react-router-dom";
import Flight from '../Flight/Flight';
import { FlightCheckout } from '../Flight/FlightCheckout';
import Homepage from './Homepage';


const AllRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path='/flight' element={<Flight/>}/>
        <Route path="/flightcheckout" element={<FlightCheckout/>} />
    </Routes>
  )
}

export default AllRoutes