import { Box, Button, Divider, Flex, Heading, Image, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import OurApp from "../components/homepage/OurApp";
import Navbar from "../components/navbar/Navbar";
export const FlightCheckout = (data) => {
  const alldata=useSelector(state=>state.TitleReducer.data)
  console.log(alldata);
    var today = new Date();
  var day= today.getDay()
  var month = today.toLocaleString('default', { month: 'short' });
  const weekday=today.toLocaleString("default",{weekday:"short"})
 
  // const alldata = {
  //   flight_company: "Vistara",
  //   flight_logo:
  //     "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/UK_sq.svg",
  //   location: "Mumbai (BOM) - Delhi (DEL)",
  //   price: "12,696",
  //   return: "Return per traveller",
  //   stoptime: "   1h 45m (Direct)",
  //   time: "17:35-19:20",
  //   _id: "636ba308c4879468fb52db24",
  // };
  return (
    <>
      <Navbar />
      <Box width="90%" marginLeft={"3%"} display="flex" alignItems={"center"}>
        <Text>{alldata.flight_company} . </Text>
        <Text marginRight={"5px"}> BOM</Text>
        <BsArrowRight />
        <Text marginLeft={"5px"} marginRight="15px">
          DEL
        </Text>
        <MdKeyboardArrowRight size={"20"} />
        <Heading size={"xs"}>Review your trip</Heading>
      </Box>
      <Link to="/flight">
        <Text
          colorScheme={"blue"}
          marginLeft="3%"
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
          fontSize={"13px"}
        >
          Change flight
        </Text>
      </Link>
      <Box
        // border={"1px solid red"}
        width={["100%"]}
        marginTop="25px"
        display={"flex"}
        justifyContent="space-evenly"
        paddingBottom={"20px"}
      >
        <Box   width={["90%","90%","90%","60%"]} padding="5px">
              <Box 
              // border={"1px solid red"}
           boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
           borderRadius={"5px"}
          display={["flex"]} padding="5px">
            <Image
              width="50px"
              src="https://images.trvl-media.com/media/content/expus/graphics/flights/no_change_fee.svg"
            ></Image>
            <Box
              marginLeft={"20px"}
              // border={"1px solid black"}
              display
              textAlign="start"
            >
              <Heading size={"sm"} textAlign="start">
                Stay flexible with no change fees
              </Heading>
              <Text fontSize={"sm"}>
                We recommend booking a flight with no change fees in case your
                plans change
              </Text>
              <Link to="/flight" >Change flight</Link>
            </Box>
              </Box>
              <Box 
           boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
           borderRadius={"5px"}
           marginTop={"20px"} padding="10px">
            <Heading size={"md"}>Mumbai To Delhi</Heading>
            <Flex
              display={"flex"}
              alignItems="center"
              gap={"10px"}
              fontSize={"15px"}
              marginTop="5px"
            >
              <Image w={"20px"} src={alldata.flight_logo}></Image>
              <Text>
                {alldata.flight_company} .{weekday},{day}
                 {month}
              </Text>
            </Flex>
            <Flex marginTop={"20px"}>
              <Text fontWeight={"semibold"}>{alldata.time}</Text>
            </Flex>
            <Flex>
              <Text marginTop={"2px"}>{alldata.stoptime}</Text>
            </Flex>
            <Text
              fontSize={"14px"}
              color="blue.500"
              cursor={"pointer"}
              marginTop="20px"
              marginBottom={"20px"}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Show Details
            </Text>
            <Divider borderColor={"black"}></Divider>
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              Fare: Eco Standard
            </Text>
            <Text
              fontSize={"14px"}
              color="blue.500"
              cursor={"pointer"}
              marginTop="5px"
              marginBottom={"20px"}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Show Details
            </Text>

            <Flex borderTop={"1px solid gray"} width="100%">
              <Link to="/flight" >
                <Text
                  colorScheme={"blue"}
                  marginLeft="3%"
                  width={"100%"}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  fontSize={"13px"}
                  color="blue.500"
                >
                  Change flight
                </Text>
              </Link>
            </Flex>
             </Box>
             <Box display={"flex"} flexDirection="column" gap={"10px"}  margin={"auto"}>

            
               <Text margin={"auto"} fontSize="14px" fontWeight={"semibold"} marginTop={"30px"}>Tell us how we can improve our site</Text>
               <Button margin={"auto"} border="1px solid gray"  textColor={"blue"} w={["55%","40%","40%","20%"]}>Share feeedback</Button>
               </Box>
               <Box display={["none","none","none","block"]} marginTop="20px" >
                <Image margin={"auto"} width={["100%"]} src="https://tpc.googlesyndication.com/simgad/9701240269539084891?"></Image>
               </Box>
        </Box>
        <Box   display={["none","none","none","block"]}    boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
 width="30%" height={"max-content"} padding="15px" borderRadius={"5px"}>
              <Heading size={"md"}>Price summary</Heading>
              <Flex marginTop={"10px"} >
                <Text fontWeight={"semibold"}>Traveller 1:Adult</Text>
                <Spacer/>
                <Text fontWeight={"semibold"}>₹{alldata.price}.00</Text>
              </Flex>
              <Flex marginTop={"10px"} >
                <Text fontSize={"15px"}>Flight</Text>
                <Spacer/>
                <Text fontSize={"15px"}>₹{alldata.price}.00</Text>
              </Flex>
              <Flex marginTop={"10px"} marginBottom="10px" display={"flex"} alignItems="center" gap={"5px"}>
                <Text fontSize={"14px"}>Taxes and fees</Text>
                 <BiInfoCircle/>
              </Flex>
              <Divider></Divider>
              <Flex marginTop="25px">
                <Text fontWeight={"semibold"} fontSize="20px">Trip Total</Text>
                <Spacer/>
                <Text  fontWeight={"semibold"} fontSize="20px">₹{alldata.price}.00</Text>
              </Flex>
              <Text fontSize={"12px"}>Rates are quoted in Indian rupees</Text>
              <Button marginTop={"20px"} colorScheme={"blue"} w={"100%"}>Checkout</Button>
        </Box>
      </Box>
      <Box display={["flex","flex","flex","none"]}
      boxShadow="rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
      position="sticky" zIndex={"10"}  padding="10px" margin="auto"  alignItems="center" width={["80%","80%","80%"]} >
          <Flex display>
            <Text>Trip total</Text>
            <Heading size={"lg"}>₹{alldata.price}</Heading>
            <Text color={"blue"} fontSize="15px">view Price Summary</Text>
          </Flex>
          <Spacer/>
          <Flex>
            <Button colorScheme={"blue"}>Check Out</Button>
          </Flex>
      </Box>
      <Box w={"90%"} margin="auto">
      <OurApp/>
      </Box>
      <Footer/>
    </>
  );
};
