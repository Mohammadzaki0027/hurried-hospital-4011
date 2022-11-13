
import React from "react";
import Car from "../Pages/Car/Car";
import Flight from "../Flight/Flight";
import { FlightCheckout } from "../Flight/FlightCheckout";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { Signup } from "./Signup";
import Homepage from "./Homepage";
import StayPage from "./StayPage";
import FlightPage from "./FlightPage";
import CarPage from "./CarPage";
import { FlightPayment } from "../Flight/FlightPayment";
import Checkout from "../Pages/Car/Checkout";
import Carpayment from "../Pages/Car/Carpayment";
import { Stay } from "../components/stays/Stay";
import { SingleStay } from "../components/stays/SingleStay";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/flightpayment/:id" element={<FlightPayment/>}/>
      <Route path="/" element={<Homepage />} />
      <Route path="/car" element={<Car />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/flightcheckout/:id" element={<FlightCheckout />} />
      <Route path="/carcheckout" element={<Checkout />} />
      <Route path="/carpayment" element={<Carpayment />} />
      <Route path="/stay" element={<Stay/>} />
      <Route path="/stay/:id" element={<SingleStay />} />
      <Route path="/flight-page" element={<FlightPage />} />
      <Route path="/stay-page" element={<StayPage />} />
      <Route path="/car-page" element={<CarPage />} />
    </Routes>
  );
};

export default AllRoutes;
;