import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  let data = localStorage.getItem("cartitem");
  let nav = useNavigate();
  let image;
  let price;
  if (data) {
    data = JSON.parse(data);
    // from = citydata.city1;
    // to = citydata.city2;
    image = data.image;
    price = data.price;
  }
  const handlepayment = () => {
    nav("/carpayment",{replace:true});
  };
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
              <h1 style={{color:"black" ,fontStyle:"bold", fontSize:"22px"}}>{price}</h1>
            </Box>
            <Box textAlign={"center"}>
              <Button
                size="md"
                border="2px"
                width={"100px"}
                bg={"#00355d"}
                _hover={"none"}
                color={"white"}
           
                onClick={handlepayment}
              >
                Book Now
              </Button>
            </Box>
          </Box>
          {/* first div */}

          <Box width={"40%"} textAlign={"center"}  >
            <div style={{ marginTop: "20px" }}>
              <h1 style={{color:"black" ,fontStyle:"italic", fontSize:"20px"}}>Inclusive for Free</h1>
              <h1 style={{color:"black" ,fontStyle:"italic", fontSize:"20px"}}>Collision Waiver Damage</h1>
              <h1 style={{color:"black" ,fontStyle:"italic", fontSize:"20px"}}>Theif Protection</h1>
              <h1 style={{color:"black" ,fontStyle:"italic", fontSize:"20px"}}>Cancellation </h1>
            </div>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Checkout;
