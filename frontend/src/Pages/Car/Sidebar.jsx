import React from "react";
import style from "../../Styles/car/sidebar.module.css";
import { Button, Checkbox, useDisclosure } from "@chakra-ui/react";
import {
  AiOutlineEnvironment,
  AiTwotoneTag,
  AiFillSetting,
} from "react-icons/ai";

import { BiAbacus } from "react-icons/bi";
import ModalComp from "./ModalComp";
import Createtour from "./Createtour";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [filtercheckbox, setFiltercheckbox] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [des, setDes] = React.useState("");
  const [final, setFinal] = React.useState("");
 
  const handelcity = (a, b) => {
    localStorage.setItem("tourdata", JSON.stringify({ city1: a, city2: b }));
    let data = localStorage.getItem("tourdata");
    data = JSON.parse(data);
  
    setDes(data.city1);
    setFinal(data.city2);
  };

  React.useEffect(() => {}, [des, final]);

  return (
    <div className={style.container}>
      <div className={style.summ}>
        <div className={style.texttrip}>
          <h1>Trip Summary</h1>
          <hr className={style.class1} />
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
                  color: "grey",
                }}
              >
                Pick-Up
              </h2>
            </div>
          </div>
          <div> {final}</div>
          <div className={style.pickup}>
            <div>date</div>
            <div>time</div>
          </div>

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
                  color: "grey",
                }}
              >
                Droup-Up
              </h2>
            </div>
          </div>

          <div>{des}</div>
          <div className={style.pickup}>
            <div>date</div>
            <div>time</div>
          </div>
          <Button
            bg={"#00355d"}
            color={"white"}
            textAlign="end"
            _hover={"none"}
            onClick={onOpen}
          >
            Edit
          </Button>
          <Createtour
            isOpen={isOpen}
            onClose={onClose}
            handelcity={handelcity}
          />
        </div>
      </div>

      <div className={style.filter}>
        <div className={style.filtertrip}>
          <h1 className={style.filterh1}>Filter</h1>
          <hr className={style.class1} />

          <div className={style.pickup}>
            <div>
              <h2 style={{ marginTop: "2px", fontSize: "20px" }}>
                <AiTwotoneTag />
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                }}
              >
                Price-Range
              </h2>
            </div>
          </div>
          <div>
            <h2>The average car price is ₨ 11 (per rental)</h2>
          </div>
          <hr className={style.class1} />

          <div className={style.pickup}>
            <div>
              <h2
                style={{
                  marginTop: "2px",
                  fontSize: "20px",
                  marginLeft: "12px",
                }}
              >
                <BiAbacus />
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                }}
              >
                Transmisson
              </h2>
            </div>
          </div>

          <div className={style.pickup}>
            <div>
              <Checkbox
                border={"1px solid black"}
                borderRadius={"2px"}
                marginTop={"5px"}
              ></Checkbox>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                }}
              >
                Automatic
              </h2>
            </div>
          </div>

          <div className={style.pickup}>
            <div>
              <Checkbox
                border={"1px solid black"}
                borderRadius={"2px"}
                marginTop={"5px"}
              ></Checkbox>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                  marginLeft: "15px",
                }}
              >
                Manual
              </h2>
            </div>
          </div>

          <hr className={style.class1} />

          <div className={style.pickup}>
            <div>
              <h2
                style={{
                  marginTop: "2px",
                  fontSize: "20px",
                  marginLeft: "15px",
                }}
              >
                <AiFillSetting />
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                }}
              >
                Car-Specification
              </h2>
            </div>
          </div>

          <div className={style.pickup}>
            <div>
              <Checkbox
                border={"1px solid black"}
                borderRadius={"2px"}
                marginTop={"5px"}
                ml={"15px"}
              ></Checkbox>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                }}
              >
                Air-Conditioning
              </h2>
            </div>
          </div>

          <div className={style.pickup}>
            <div>
              <Checkbox
                border={"1px solid black"}
                borderRadius={"2px"}
                marginTop={"5px"}
                marginLeft={"-22px"}
                value={"Petrol"}
              ></Checkbox>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontFamily: "bold",
                  color: "grey",
                }}
              >
                Petrol
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
