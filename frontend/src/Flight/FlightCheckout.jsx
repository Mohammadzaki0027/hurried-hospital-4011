import { Box, Divider, Flex, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
export const FlightCheckout = (data) => {
    var today = new Date();
  var day= today.getDay()
  var month = today.toLocaleString('default', { month: 'short' });
  const weekday=today.toLocaleString("default",{weekday:"short"})
  console.log(data);
  const newdata = {
    flight_company: "Vistara",
    flight_logo:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/UK_sq.svg",
    location: "Mumbai (BOM) - Delhi (DEL)",
    price: "12,696",
    return: "Return per traveller",
    stoptime: "   1h 45m (Direct)",
    time: "17:35-19:20",
    _id: "636ba308c4879468fb52db24",
  };
  return (
    <>
      <Navbar />
      <Box width="90%" marginLeft={"3%"} display="flex" alignItems={"center"}>
        <Text>{newdata.flight_company} . </Text>
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
          _hover={{ "border-bottom": "1px solid blue", width: "fit-content" }}
          fontSize={"13px"}
        >
          Change flight
        </Text>
      </Link>
      <Box
        border={"1px solid red"}
        width={["100%"]}
        marginTop="25px"
        display={"flex"}
        justifyContent="space-evenly"
      >
        <Box width={["60%"]} padding="5px">
          <Box border="1px solid red" display={["flex"]}>
            <Image
              width="50px"
              src="https://images.trvl-media.com/media/content/expus/graphics/flights/no_change_fee.svg"
            ></Image>
            <Box
              marginLeft={"20px"}
              border={"1px solid black"}
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
              <Link to="/flight">Change flight</Link>
            </Box> 
          </Box>
          <Box border ="1px solid black" marginTop={"20px"} padding="5px">
              <Heading size={"md"}>Mumbai To Delhi</Heading>
              <Flex display={"flex"} alignItems="center" gap={"10px"} fontSize={"15px"} marginTop="5px">
              <Image w={"20px"} src={newdata.flight_logo}></Image>
              <Text>{newdata.flight_company} .{weekday},{day}{month}</Text>
              </Flex>
              <Flex marginTop={"20px"}>
                <Text fontWeight={"semibold"}>{newdata.time}</Text>
              </Flex>
              <Flex>
              <Text marginTop={"2px"}>{newdata.stoptime}</Text>
              </Flex>
              <Divider borderColor={"black"}></Divider>
            </Box>
        </Box>
        <Box border={"1px solid black"} width="30%"></Box>
      </Box>
    </>
  );
};
