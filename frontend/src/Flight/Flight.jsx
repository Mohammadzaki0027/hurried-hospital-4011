import styles from "./Flight.module.css";
import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Grid,
  Heading,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { HiCurrencyDollar, HiOutlineSun } from "react-icons/hi";
import { BsCheck2, BsFillMoonStarsFill, BsFillSunriseFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import {GoSettings} from "react-icons/go"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { flightData } from "../Redux/Flightreducer/action";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { useState } from "react";
function Flight() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Flightreducer.flight);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { 
    isOpen: isOpenModal, 
    onOpen: onOpenModal, 
    onClose: onCloseModal 
} = useDisclosure()
const { 
  isOpen: isOpenModal1, 
  onOpen: onOpenModal1, 
  onClose: onCloseModal1 
} = useDisclosure()
const { 
  isOpen: isOpenModal2, 
  onOpen: onOpenModal2, 
  onClose: onCloseModal2 
} = useDisclosure()
  const [single,setSingle]=useState({})
  var today = new Date();
  var day= today.getDay()
  var month = today.toLocaleString('default', { month: 'short' });
  const weekday=today.toLocaleString("default",{weekday:"short"})
// console.log(month,day,weekday)

  useEffect(() => {
    dispatch(flightData()).then((res) => {
      // console.log(res);
      // console.log(data);
    });
  }, [dispatch]);
  const handleData=(item)=>{
    // console.log(item)
       onOpenModal1()
       setSingle(item)
  }
  return (
    <>
      <Navbar />
       <Box onClick={onOpenModal2}  display={["block","block","block","none"]} border={"1px solid red"} marginTop="-25px" padding={"4px"} paddingLeft="30px">
          <Text fontSize={"20px"} color="rgb(54,98,216)">Mumbai To Delhi</Text>
          <Text color="rgb(54,98,216)" fontSize={"15px"}>{weekday},{month} {day} .1 traveller</Text>
       </Box>
       <Modal  blockScrollOnMount={false} onClose={onCloseModal2} isOpen={isOpenModal2} isCentered>
        <ModalOverlay />
        <ModalContent  height="400px">
          <ModalHeader>Return</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <HStack padding={"10px"}>
          <InputGroup >
          <InputLeftElement
            pointerEvents="none"
            children={<IoLocationSharp size={22} color="#343b53" />}
          />
          <Input  type="text" placeholder="Leaving from" />
        </InputGroup>
        <HiOutlineArrowsRightLeft color="blue" size={"60"} />
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoLocationSharp  size={22} color="#343b53" />}
          />
          <Input type="text" placeholder="Going to" />
        </InputGroup>
        </HStack>
        <HStack>
        <InputGroup w="100%"  gap="10px">
          <Input type="date" />
          <Input type="date" />
        </InputGroup>
        </HStack>
        <Divider borderColor="black" marginTop="20px"/>
      
          <Button colorScheme="none" color="white" bg="#3763d8" w="50%" h="10vh" marginTop={"40px"}>
            Search
          </Button>
 
          </ModalBody>
          <ModalFooter fontWeight={"bold"} color={"rgb(54,98,216)"} display={"flex"} justifyContent="center">
            <Text   onClick={onCloseModal2}>Close</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <HStack
        // border={"1px solid red"}
        flexDirection="row"
        display={["none", "none", "none", "flex"]}
        marginTop="-20px"
        padding={"15px"}
        width={["85%"]}
        marginLeft="30px"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoLocationSharp size={22} color="#343b53" />}
          />
          <Input type="text" placeholder="Leaving from" />
        </InputGroup>
        <HiOutlineArrowsRightLeft color="blue" size={"60"} />
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoLocationSharp  size={22} color="#343b53" />}
          />
          <Input type="text" placeholder="Going to" />
        </InputGroup>
        <InputGroup w="20vw" h="7vh" gap="10px">
          <Input type="date" />
          <Input type="date" />
        </InputGroup>
        <VStack>
          <Button colorScheme="none" color="white" bg="#3763d8" w="9vw" h="7vh">
            Search
          </Button>
        </VStack>
      </HStack>
      <Box display={"flex"} bgColor="#F8F5F4" gap={"20px"}>
        {/* sidebar flter box */}
        <Box
          w="25%"
          display={["none", "none", "none", "block"]}
          // border={"1px solid red"}
          textAlign={"start"}
          marginLeft="10px"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
            >
              <BsFillMoonStarsFill />
              <Heading size={"xs"}>Evening</Heading>
              <Text fontSize={"xs"}>(18:00 - 23:59)</Text>
            </Box>
          </Grid>
        </Box>
          {/* sidebar flter box end*/}
          {/* main contentent box start */}
        <Box
          w={["100%", "100%", "100%", "65%"]}
          padding={["15px", "15px", "15px", "0px"]}
        >
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
          {/* sort filter for tab start */}
          <Box display={["flex","flex","flex","none"]} marginTop="10px" onClick={onOpenModal}  padding="7px" borderRadius={"5px"}  boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" alignItems={"center"} justifyContent="center" color={"blue"} gap="15px">
            <GoSettings/> Sort & Filter
          </Box>
          <Modal  onClose={onCloseModal} isOpen={isOpenModal} isCentered>
        <ModalOverlay />
        <ModalContent h="300px" overflow={"scroll"}>
          <ModalHeader fontWeight={"bold"}>Sort& filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Select
              width={"100%"}
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
            </Select>
            <Box
          w="100%"
           display={["block","block","block","none"]}
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
            templateColumns="repeat(3,1fr)"
            gap="10px"
            w="90%"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
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
            templateColumns="repeat(3,1fr)"
            gap="10px"
            w="90%"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
              justifyContent="center"
            >
              <BsFillMoonStarsFill />
              <Heading size={"xs"}>Evening</Heading>
              <Text fontSize={"xs"}>(18:00 - 23:59)</Text>
            </Box>
          </Grid>
        </Box>
          </ModalBody>
          <ModalFooter>
            <Button w={"100%"} colorScheme="blue"   onClick={onCloseModal}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
           {/* sort filter for tab end */}
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
            display={"flex"}
            justifyContent="space-between"
            marginTop={"10px"}
          >
            <p style={{ fontSize: "12px", textAlign: "justify", width: "70%" }}>
              Prices displayed include taxes and may change based on
              availability. You can review any additional fees before checkout.
              Prices are not final until you complete your purchase.
            </p>
            <Select
              width={"20%"}
              display={["none", "none", "none", "block"]}
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
            </Select>
          
          </Box>
          <SimpleGrid > 
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
                    onClick={()=>handleData(item)}
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
               
              <Button margin={"auto"} marginTop="20px" w={["30%","25%","15%"]} colorScheme={"blue"}>Show More</Button>
               <Text margin={"auto"} fontSize="14px" marginTop={"30px"}>Tell us how we can improve our site</Text>
               <Button margin={"auto"} border="1px solid gray"  textColor={"blue.400"} w={["35%","30%","20%"]}>Share feeedback</Button>
            <Drawer   isOpen={isOpenModal1} placement="right" onClose={onCloseModal1} size={"sm"}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton color={"blue"} size="md" marginRight={"85%"} paddingBottom={"5px"} />
                <DrawerHeader borderBottomWidth="1px" marginTop={"5px"}>
            
                </DrawerHeader>

                <DrawerBody>
                  <Stack>
                    <Box>
                      <Heading size={"md"}>Mumbai To Delhi</Heading>
                      <Flex  marginTop="10px">
                      <img
                        src={single.flight_logo}
                        style={{ width: "15px" }}
                        alt=""
                      />
                      <Text marginLeft={"10px"}  fontSize={"sm"}>
                        {single.flight_company}
                      </Text>
                    </Flex>
                    <Flex marginTop="10px">
                      <Heading size={"sm"}>{single.time}</Heading>
                    </Flex>
                    <Text marginTop="10px" fontSize={"sm"}>{single.stoptime}</Text>
                    </Box>
                    <DrawerHeader borderBottomWidth="1px">
            
            </DrawerHeader>
                
            <Heading size={"md"}>Selected fare To Delhi</Heading>
            <Box border="1px solid gray" borderRadius={"5px"} padding="10px">
            <Heading size={"md"}>₹{single.price}</Heading>
            <Text marginTop={"10px"} fontSize={"10px"}>₹{single.price}.00 return for 1 traveller</Text>
             <Text marginTop={"10px"}>Cabin:Economy</Text>
             <Box>
                <Flex display={"flex"} alignItems="center" gap={"20px"} marginTop="10px">
                  <BsCheck2/>
                  <Text fontSize={"14px"}>Seat Choice</Text>
                </Flex>
                <Flex display={"flex"} alignItems="center" gap={"20px"} marginTop="10px">
                <HiCurrencyDollar/>
                  <Text fontSize={"14px"}>Cancellation</Text>
                </Flex>
                <Flex display={"flex"} alignItems="center" gap={"20px"} marginTop="10px">
                <HiCurrencyDollar/>
                  <Text fontSize={"14px"}>Changes</Text>
                </Flex>
             </Box>
             <DrawerFooter borderTopWidth="1px">
                
                </DrawerFooter>
                <Flex fontSize={"16px"}>
                  <Text>Carry-on:</Text>
                  <Spacer></Spacer>
                  <Text>Included up to 7 kg</Text>
                </Flex>
                <Flex fontSize={"16px"}>
                  <Text>1st checkedbag:</Text>
                  <Spacer></Spacer>
                  <Text>Included up to 15 kg</Text>
                </Flex>
                <Flex>

                  <Button marginTop={"10px"} width="100%" colorScheme="blue">Select</Button>
                </Flex>
            </Box>
                   
                  </Stack>
                </DrawerBody>

                
              </DrawerContent>
            </Drawer>
          </SimpleGrid>
        </Box>
         {/* main contentent box start end */}
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
