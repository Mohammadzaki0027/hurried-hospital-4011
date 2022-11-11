import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Infodiv from "../../Pages/Car/Infodiv";
const Checkout = () => {
  let data = localStorage.getItem("cartitem");

  let image;
  let price;
  if (data) {
    data = JSON.parse(data);

    image = data.image;
    price = data.price;
  }
  return (
    <Box
      width={["100%", "100%", "80%", "65%"]}
      border={"0.5px solid teal"}
      height={"auto"}
      margin={"auto"}
      bg={"grey"}
    >
      <Text textAlign={"center"} color={"teal"}>
        Booking Page
      </Text>
      <Box
        width={["90%", "90%", "70%", "70%"]}
        border={"2px solid black"}
        height={"auto"}
        margin={"auto"}
        mt={"50px"}
        alignContent={"center"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        {/* first div strting */}
        <Box width={"30%"} textAlign={"center"}>
          <img src={image} />
          <Box>
            <span>Price</span>
            <h1>{price}</h1>
          </Box>
          <Box textAlign={"center"}>
            <Button  size='md'   border='2px' width={"100px"}       bg={"#00355d"}
            _hover={"none"}
            color={"white"}  borderColor='green.500'>Pay</Button>
          </Box>
        </Box>
        {/* first div */}

        <Box width={"40%"} textAlign={"center"} >
          <div style={{ marginTop: "20px" }}>
            <h1>Inclusive for Free</h1>
            <h1>Collision Waiver Damage</h1>
            <h1>Theif Protection</h1>
            <h1>Cancellation </h1>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
