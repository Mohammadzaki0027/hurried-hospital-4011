import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";

const Checkout = () => {
  let data = localStorage.getItem("cartitem");
  let citydata = localStorage.getItem("tourdata");
  citydata = JSON.parse(citydata);
  let from = citydata.city1;
  let to = citydata.city2;
  let image;
  let price;
  if (data) {
    data = JSON.parse(data);

    image = data.image;
    price = data.price;
  }
  return (
    <>
      <Navbar />
      <Box
        width={["100%", "100%", "80%", "65%"]}
        border={"0.5px solid teal"}
        height={"auto"}
        margin={"auto"}
        bg={"grey"}
      >
        <Text textAlign={"center"} color={"black"}>
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
              <Button
                size="md"
                border="2px"
                width={"100px"}
                bg={"#00355d"}
                _hover={"none"}
                color={"white"}
                borderColor="green.500"
              >
                Book Now
              </Button>
            </Box>
          </Box>
          {/* first div */}

          <Box width={"40%"} textAlign={"center"}>
            <div style={{ marginTop: "20px" }}>
              <h1>Inclusive for Free</h1>
              <h1>Collision Waiver Damage</h1>
              <h1>Theif Protection</h1>
              <h1>Cancellation </h1>
            </div>
          </Box>
        </Box>
        <Box
          width={["90%", "90%", "70%", "70%"]}
          border={"2px solid black"}
          height={"auto"}
          margin={"auto"}
          mt={"50px"}
          alignContent={"center"}
          textAlign={"center"}
        >
          <div style={{ marginTop: "20px", color: "black" }}>
            <h1
              style={{
                marginTop: "20px",
                color: "black",
                fontFamily: "sans-serif",
                fontSize: "25px",
              }}
            >
              From {from} to {to}
            </h1>
          </div>
        </Box>
      </Box>
<Footer/>
    </>
  );
};

export default Checkout;
