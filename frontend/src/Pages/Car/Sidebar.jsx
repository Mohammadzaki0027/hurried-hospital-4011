import React from "react";
import style from "../../Styles/car/sidebar.module.css";

import { AiOutlineEnvironment } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.summ}>
        <div className={style.texttrip}>
          <h1>Trip Summary</h1>
          <hr class={style.class1} />
          <div className={style.pickup}>
            <div>
              <h2 style={{ marginTop: "2px", fontSize: "20px" }}>
                <AiOutlineEnvironment />
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "15px",
                  fontFamily: "bold",
                  color: "#333333",
                }}
              >
                Pick-Up
              </h2>
            </div>
          </div>
          <div>mumbai to thane</div>
          <div className={style.pickup}>
            <div>date</div>
            <div>time</div>
          </div>
        </div>
      </div>
      <div className={style.filter}></div>
    </div>
  );
};

export default Sidebar;
