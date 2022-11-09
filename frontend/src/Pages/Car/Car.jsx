import React from "react";
import style from "../../Styles/car/Car.module.css"
import Filter from "./Filter";
import Rightsidebar from "./Rightsidebar";
import Sidebar from "./Sidebar";
const Car = () => {
  return (
    <div className={style.carcontainer}>
      <div className={style.Sidebarcontainer}>
        <Sidebar />
      </div>
      <div className={style.Filtercontainer}>
        <Filter />
      </div>
      <div className={style.rightcontainer}>
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Car;
