import React from "react";
import style from "../../Styles/car/box.module.css";
import { RiContactsFill } from "react-icons/ri";

import { BsFillBagFill } from "react-icons/bs";
const Carbox = ({seat,image,vehtype,price,handelclick}) => {

  return (
    <div className={style.corboxcon} onClick={()=>{
      handelclick(vehtype)
    }}>
      <div className={style.text1}>
        <h1>{vehtype}</h1>
      </div>
      <div className={style.symbol}>
        <div>
          <h1>{seat}</h1>{" "}
        </div>
        <div>
          <h1 style={{ fontSize: "18px" }}>
            <RiContactsFill />
          </h1>
        </div>
        <div>
          <h1>2</h1>{" "}
        </div>
        <div>
          <h1 style={{ fontSize: "18px" }}>
            <BsFillBagFill />
          </h1>
        </div>
      </div>
      <div className={style.image}>
        <img
          src={image}
          alt="car_image"
         
        />
      </div>
      <div className={style.price}>
        <h1>From Rs {price}</h1>
      </div>
    </div>
  );
};

export default Carbox;
