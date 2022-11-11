import React from "react";
import style from "../../Styles/car/Right.module.css";
import { TiArrowMaximiseOutline, TiTickOutline } from "react-icons/ti";
import { BiAlarm } from "react-icons/bi";
import Carbox from "./Carbox";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import Infodiv from "./Infodiv";
import Pricediv from "./Pricediv";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
const Rightsidebar = () => {
  const [filterdata, setFilterdata] = React.useState([]);
  const [data, setData] = React.useState([]);
  function fetch() {
    if (data.length === 0) {
      axios.get("http://localhost:8080/getcar").then((r) => {
        if (selectrating.length > 0) {
          let newarray = r.data.data;

          let arr = newarray.sort(function (a, b) {
            return parseFloat(b.rating) - parseFloat(a.rating);
          });

          setData(arr);
        } else {
          setData(r.data.data);
        }
      });
    }
  }
  const [SearchParams, setSearchParams] = useSearchParams();
  const [selectrating, setSelectrating] = React.useState(
    SearchParams.getAll("tag") || []
  );

  const handelrating = (tag) => {
    let newtag = [...selectrating];
    if (newtag.includes(tag)) {
      newtag.splice(newtag.indexOf(tag), 1);
    } else {
      newtag.push(tag);
    }
    setSelectrating(newtag);
    setSearchParams({ tag: newtag });
  };
  let handlesortprice = (value) => {
    console.log(value);
    axios.get(`http://localhost:8080/filterdata/${value}`).then((r)=>{
    
     setData(r.data.data)
    })
    };


  React.useEffect(() => {
    axios.get("http://localhost:8080/getfilter").then((r) => {
      setFilterdata(r.data.data);
    });
  }, [selectrating]);
  React.useEffect(() => {
    fetch();
  }, [selectrating]);
 




  return (
    <div className={style.rightsidecontainer}>
      <div className={style.textbox}>
        <div className={style.symboltick}>
          <div className={style.textboxinner}>
            <div
              style={{
                borderRadius: "12.5px",
                border: "1px solid green",
                height: "25px",
                width: "25px",
                alignItems: "center",
                marginTop: "5px",
                marginLeft: "2px",
                textAlign: "center",
                backgroundColor: "green",
              }}
            >
              <h1 className={style.symbol}>
                <TiTickOutline style={{ color: "white" }} />
              </h1>
            </div>
            <h1 className={style.textboxinnerh1}>
              Flexible cancellation with every booking.
            </h1>
          </div>
        </div>
      </div>

      <div className={style.alaram}>
        <div className={style.symboltick}>
          <div
            style={{
              height: "35px",
              width: "100%",
              alignItems: "center",
              marginTop: "7px",
              marginLeft: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                borderRadius: "12.5px",

                height: "30px",
                width: "30px",
                alignItems: "center",
                marginTop: "5px",
                marginLeft: "2px",
                textAlign: "center",
                color: "#D64F06",
              }}
            >
              <h1 className={style.symbol}>
                <BiAlarm style={{ color: "#D64F06" }} />
              </h1>
            </div>
            <h1 className={style.textboxinnerh1}>
              Prices are rising, book now to lock in the price.
            </h1>
          </div>
        </div>
      </div>
      {/* box ending */}
 
      <div className={style.carbox}>
        {filterdata?.map((e) => (
          <Carbox {...e} handlesortprice={handlesortprice} key={e._id} />
        ))}
      </div>
 {/* model filter */}
 <div className={style.Filtercontainer}>
        <Filter handlesortprice={handlesortprice}/>
      </div>
{/* model end for check */}
      <div className={style.fitercontainer}>
        <div>
          <h1 style={{ marginTop: "10px" }}>Sort By</h1>
        </div>
        <div>
          <Button
            bg={"#00355d"}
            _hover={"none"}
            color={"white"}
            className={style.filterbutton}
            onClick={()=>handlesortprice("Economy")}
          >
            Recommended
          </Button>
        </div>
        <div>
          <Button
            bg={"#00355d"}
            _hover={"none"}
            color={"white"}
            className={style.filterbutton}
            onClick={() => handlesortprice("rating")}
          >
            Sort By Rating
          </Button>
        </div>
        <div>
          <Button
            bg={"#00355d"}
            _hover={"none"}
            color={"white"}
            className={style.filterbutton}
            onClick={()=>
            
              handlesortprice("price")
            
            
            }
          >
            Price(low to high)
          </Button>
        </div>
      </div>

    

      {data?.map((e) => (
        <div className={style.maindiv} key={e._id}>
          <Carbox {...e} handlesortprice={handlesortprice}/>
          <Infodiv />
          <Pricediv price={e.price} />
        </div>
      ))}
    </div>
  );
};

export default Rightsidebar;
