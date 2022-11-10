import styles from "./Flight.module.css";
import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HiOutlineSun } from "react-icons/hi";
import { BsFillMoonStarsFill, BsFillSunriseFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { flightData } from "../Redux/Flightreducer/action";
import { useEffect } from "react";
function Flight() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Flightreducer.flight);

  useEffect(() => {
    dispatch(flightData()).then((res) => {
      console.log(res);
      console.log(data);
    });
  }, [dispatch]);
  return (
    <>
      <Box display={"flex"} bgColor="#F8F5F4" gap={"20px"}>
        <Box
          w="25%"
          display={["none", "none", "none", "block"]}
          border={"1px solid red"}
          textAlign={"start"}
        >
          <Heading size="md" marginLeft="20px">
            Filter By
          </Heading>
          <Flex w="90%" margin="auto" marginTop={"10px"}>
            <Text fontWeight={"bold"}>Stop</Text>
            <Spacer />
            <Text fontWeight={"bold"}>From</Text>
          </Flex>
          <Flex w="88%" margin="auto" marginTop={"10px"}>
            <Checkbox>Direct</Checkbox>
            <Spacer />
            <Text>₹12,271</Text>
          </Flex>
          <Flex w="88%" margin="auto" marginTop={"10px"}>
            <Checkbox>1 Stop</Checkbox>
            <Spacer />
            <Text>₹12,271</Text>
          </Flex>
          <Flex w="90%" margin="auto" marginTop={"20px"}>
            <Text fontWeight={"bold"}>Airlines</Text>
            <Spacer />
            <Text fontWeight={"bold"}>From</Text>
          </Flex>
          <Flex w="88%" margin="auto" marginTop={"10px"}>
            <Checkbox>Vistra</Checkbox>
            <Spacer />
            <Text>₹12,271</Text>
          </Flex>
          <Flex w="88%" margin="auto" marginTop={"10px"}>
            <Checkbox>SpiceJet</Checkbox>
            <Spacer />
            <Text>₹13,690</Text>
          </Flex>
          <Flex w="90%" margin="auto" marginTop={"20px"}>
            <Text fontWeight={"bold"}>Departure time in Mumbai</Text>
          </Flex>
          <Grid
            templateColumns="repeat(2,1fr)"
            gap="10px"
            w="60%"
            marginTop="10px"
            marginLeft={"20px"}
          >
            <Box
              border={"1px solid black"}
              borderRadius="5px"
              display={"flex"}
              flexDirection="column"
              padding={"2px"}
              alignItems={"center"}
              justifyContent="center"
            >
              <HiOutlineSun size={20} />
              <Heading size={"xs"}>Morning</Heading>
              <Text fontSize={"xs"}>(05:00 - 11:59)</Text>
            </Box>
            <Box
              border={"1px solid black"}
              borderRadius="5px"
              display={"flex"}
              flexDirection="column"
              padding={"2px"}
              alignItems={"center"}
              justifyContent="center"
            >
              <BsFillSunriseFill />
              <Heading size={"xs"}>Afternoon</Heading>
              <Text fontSize={"xs"}>(12:00 - 17:59)</Text>
            </Box>
            <Box
              border={"1px solid black"}
              borderRadius="5px"
              display={"flex"}
              flexDirection="column"
              padding={"2px"}
              alignItems={"center"}
              justifyContent="center"
            >
              <BsFillMoonStarsFill />
              <Heading size={"xs"}>Evening</Heading>
              <Text fontSize={"xs"}>(18:00 - 23:59)</Text>
            </Box>
          </Grid>
          <Flex w="90%" margin="auto" marginTop={"20px"}>
            <Text fontWeight={"bold"}>Arrive time in Delhi</Text>
          </Flex>
          <Grid
            templateColumns="repeat(2,1fr)"
            gap="10px"
            w="60%"
            marginTop="10px"
            marginLeft={"20px"}
          >
            <Box
              border={"1px solid black"}
              borderRadius="5px"
              display={"flex"}
              flexDirection="column"
              padding={"2px"}
              alignItems={"center"}
              justifyContent="center"
            >
              <HiOutlineSun size={20} />
              <Heading size={"xs"}>Morning</Heading>
              <Text fontSize={"xs"}>(05:00 - 11:59)</Text>
            </Box>
            <Box
              border={"1px solid black"}
              borderRadius="5px"
              display={"flex"}
              flexDirection="column"
              padding={"2px"}
              alignItems={"center"}
              justifyContent="center"
            >
              <BsFillSunriseFill />
              <Heading size={"xs"}>Afternoon</Heading>
              <Text fontSize={"xs"}>(12:00 - 17:59)</Text>
            </Box>
            <Box
              border={"1px solid black"}
              borderRadius="5px"
              display={"flex"}
              flexDirection="column"
              padding={"2px"}
              alignItems={"center"}
              justifyContent="center"
            >
              <BsFillMoonStarsFill />
              <Heading size={"xs"}>Evening</Heading>
              <Text fontSize={"xs"}>(18:00 - 23:59)</Text>
            </Box>
          </Grid>
        </Box>
        <Box w={["100%", "100%", "100%","65%"]} padding={["15px","15px","15px","0px"]}>
          <Breadcrumb
            spacing="8px"
            fontSize={"14px"}

            separator={<ChevronRightIcon color="gray.900" />}
          >
            <BreadcrumbItem>
              <a textDecoration={"none"} style={{ fontWeight: "bold" }}>
                Choose departing flight
              </a>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <a>Choose returning flight</a>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <a>Review your trip</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box
            boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            marginTop={"10px"}
            textAlign="start"
            padding={"10px"}
            paddingBottom={"10px"}
            borderRadius={"5px"}
            cursor="pointer"
          >
            <Heading size={"sm"}>Flexible dates</Heading>
            <Flex fontSize="14px" marginRight={"10px"}>
              <p>Compare prices for nearby days</p>
              <Spacer />
              <BiChevronDown size={"20"} />
            </Flex>
          </Box>
          <Divider marginTop="20px" borderColor="black" />
          <Box
            display={["none","none","none","flex"]}
            justifyContent="space-between"
            marginTop={"10px"}
          >
            <p style={{ fontSize: "12px", textAlign: "justify", width: "70%" }}>
              Prices displayed include taxes and may change based on
              availability. You can review any additional fees before checkout.
              Prices are not final until you complete your purchase.
            </p>
            <select
              id="cars"
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px 5px 10px 5px",
              }}
            >
              <option value="">Price (Lowest)</option>
              <option value="">Price(Highest)</option>
              <option value="">Duration(Shortest)</option>
              <option value="">Duration(Longest)</option>
            </select>
          </Box>
          <SimpleGrid>
            {data &&
              data.map((item) => {
                return (
                  <Box
                    boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    marginTop={"10px"}
                    textAlign="start"
                    padding={"10px"}
                    paddingBottom={"10px"}
                    borderRadius={"5px"}
                    cursor="pointer"
                  >
                    <Flex>
                      <Heading size={"sm"}>{item.time}</Heading>
                      <Spacer></Spacer>
                      <Text fontSize={"sm"}>{item.stoptime}</Text>
                      <Spacer></Spacer>
                      <Heading size={"md"}>₹{item.price}</Heading>
                    </Flex>
                    <Flex>
                      <Text fontSize={"sm"}>{item.location}</Text>
                      <Spacer></Spacer>
                      <Spacer></Spacer>
                      <Text>{item.return}</Text>
                    </Flex>
                    <Flex>
                      <img
                        src={item.flight_logo}
                        style={{ width: "15px" }}
                        alt=""
                      />
                      <Text marginLeft={"10px"} fontSize={"xs"}>
                        {item.flight_company}
                      </Text>
                    </Flex>
                  </Box>
                );
              })}
          </SimpleGrid>
        </Box>
        <Box display={["none", "none", "none", "block"]}>
          <img
            src="https://tpc.googlesyndication.com/simgad/680227074443010515?"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
}

export default Flight;
