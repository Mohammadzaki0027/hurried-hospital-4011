import React from 'react'
import style from "../../Styles/car/info.module.css"
import { Button } from '@chakra-ui/react'
const Pricediv = ({price}) => {
  return (
    <div className={style.pricediv}>
<h1 >{price}</h1>
        <Button bg={"#00355d"} _hover={"none"} color={"white"}>Select</Button>
    </div>
  )
}

export default Pricediv