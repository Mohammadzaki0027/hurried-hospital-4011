import React from "react";
import style from "../../Styles/car/info.module.css";
import { Button } from "@chakra-ui/react";

const Pricediv = ({ price, handelcart, _id ,image}) => {
 

  return (
    <div className={style.pricediv}>
      <h1>{price}</h1>
      <Button
        bg={"#00355d"}
        _hover={"none"}
        color={"white"}
        onClick={() => handelcart(price, _id,image)}
      >
        Select
      </Button>
    </div>
  );
};

export default Pricediv;
