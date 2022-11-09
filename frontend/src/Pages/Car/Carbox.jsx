import React from "react";
import style from "../../Styles/car/box.module.css";
import { RiContactsFill } from "react-icons/ri";

import { BsFillBagFill } from "react-icons/bs";
const Carbox = () => {
  return (
    <div className={style.corboxcon}>
      <div className={style.text1}>
        <h1>Economy</h1>
      </div>
      <div className={style.symbol}>
        <div>
          <h1>25</h1>{" "}
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
          src="https://ctimg-fleet.cartrawler.com/generic/economy/primary.png?w=187.19999313354492&auto=compress"
          alt=""
          srcset=""
        />
      </div>
      <div className={style.price}>
        <h1>From Rs 5253</h1>
      </div>
    </div>
  );
};

export default Carbox;
