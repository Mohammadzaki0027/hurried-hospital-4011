import React from "react";
import style from "../../Styles/car/Car.module.css"

import Rightsidebar from "./Rightsidebar";
import Sidebar from "./Sidebar";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/Footer";
const Car = () => {
  return (
    <>
     <Navbar/> 
    <div className={style.carcontainer}>
   
      <div className={style.Sidebarcontainer}>
        <Sidebar />
      </div>
     
      <div className={style.rightcontainer}>
        <Rightsidebar />
      </div>
    </div >
    <Footer></Footer>
    </>
  );
};

export default Car;
