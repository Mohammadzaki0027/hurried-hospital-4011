import { Box, Button, Checkbox, Divider, Flex, Heading, HStack, Image, Input, Select, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiLockClosed } from 'react-icons/hi2'
import Navbar from '../components/navbar/Navbar'
import {IoIosArrowForward} from "react-icons/io"
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
export const FlightPayment = () => {
    const alldata=useSelector(state=>state.TitleReducer.data)
    const stop=alldata.stoptime.split("")
    var today = new Date();
    var day= today.getDay()
    var month = today.toLocaleString('default', { month: 'short' });
    const weekday=today.toLocaleString("default",{weekday:"short"})
  return (
    <>
     <Navbar/>
      <Heading marginLeft={"5%"} size={"lg"}>Secure booking - only takes a few minutes!</Heading>
      <Box display={"flex"} gap="30px" >
          <Box 
        //   border={"1px solid blue"}
           width={["65%"]} marginTop="20px" marginLeft="5%" padding={"5px"}>
             <Box  padding={"15px"} borderRadius="5px"   
              boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px">
             <Heading size={"md"} marginBottom="20px">Who's travelling?</Heading>
                <Divider borderColor={"gray"}></Divider>
              <Heading size={"md"} marginTop="10px">Flight</Heading>
              <HStack marginTop={"10px"} width="80%">
                  <Box>
                <label>Title*</label>
                <Select color={"blue.500"} borderColor="gray.600">
                    <option></option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Miss</option>
                </Select>
                </Box>
                <Box>
                <label htmlFor="">Surname/Surname*</label>
                <Input borderColor="gray.600"/>
                </Box>
                <Box>
                <label htmlFor="">Given/First name*</label>
                <Input borderColor="gray.600"/>
                </Box>
              </HStack>
              <Box marginTop={"20px"}>
              <label >Country/Territory Code*</label>
                <Select color={"black"} borderColor="gray.600" w="60%">
                    <option>India +91</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Miss</option>
                </Select>
                </Box>
                <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
              <label >Phone number*</label>
                <Input  borderColor="gray.600" w="60%" placeholder='In casewe need to reach you'/>
                </Box>
                <Checkbox marginTop={"10px"} defaultChecked>Receive text alerts about this trip (free of charge).</Checkbox>
             </Box>
             
             <Box marginTop={"20PX"}  padding={"15px"} borderRadius="5px"    boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px">
             <Flex display="flex" gap={"10px"}  alignItems={"start"}>
             <HiLockClosed   size={20}/>
                <Heading textAlign={"center"} size={"md"} marginBottom="20px"> How would you like to pay?</Heading>
             </Flex>
            <Flex w={["20%"]} display="flex" gap={"10px"}>
                <Image w={"30px"} src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"></Image>
                <Image  w={"30px"} src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"></Image>
                <Image  w={"30px"} src="https://a.travel-assets.com/egds/marks/payment__visa.svg"></Image>
                <Image  w={"30px"} src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg"></Image>
            </Flex>
             <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
              <label >Name on Card*</label>
                <Input  marginTop={"10px"}  borderColor="gray.600" w="60%" />
                </Box>
                <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
                    <label >Debit/Credit card number*</label>
                    <Input marginTop={"10px"}  borderColor="gray.600" w="40%" />
                </Box>
                <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
                    <label >Expiry date*</label>
                 <Box display={"flex"} w="30%" gap="10px" >
                     <Select color={"blue.500"} borderColor="gray.600" w="60%">
                    <option>Month</option>
                    <option>01-Jan</option>
                    <option>02-Feb</option>
                    <option>03-Mar</option>
                    <option>04-Apr</option>
                    <option>05-May</option>
                    <option>06-Jun</option>
                    <option>07-Jul</option>
                    <option>08-Aug</option>
                    <option>09-Sep</option>
                    <option>10-Oct</option>
                    <option>11-Non</option>
                    <option>12- Dec</option>
                </Select>
                <Select color={"blue.500"} borderColor="gray.600" w="50%">
                    <option>Year</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                </Select>
                     </Box>
                     <Divider marginTop={"30px"} borderColor={"gray.700"}></Divider>
                </Box>
                 <Button display={"flex"}  marginTop={"20px"} width="30%" height={"50px"} colorScheme={"yellow"}>Complete booking  <IoIosArrowForward  /></Button>
             </Box>
             
             
          </Box>
          
           <Box marginTop="25px"
           boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" padding={"10px"} width={"25%"} height="max-content"  >
                <Text fontSize={"20px"} fontWeight="semibold" >One-way flight</Text>
                <Text>1 ticket: 1 adult</Text>
                <Divider marginTop={"5px"} borderColor={"gray.700"}/>
                <Text marginTop={"10px"}>Mumbai (BOM) to Delhi (DEL)</Text>
                <Text marginTop={"5px"} fontWeight={"bold"} fontSize="14px">
                {weekday},{day} {month}
              </Text>
              <Text marginTop={"5px"} fontSize={"14px"}>{alldata.time} {stop}</Text>
              <Flex
              display={"flex"}
              alignItems="center"
              gap={"10px"}
              fontSize={"15px"}
              marginTop="5px"
            >
              <Image w={"20px"} src={alldata.flight_logo}></Image>
              <Text>
                {alldata.flight_company} 
              </Text>
            </Flex>
              <Divider borderColor={"gray.700"} marginTop="30px"/>
              <Flex>
              <Text>Your price summary</Text>
              <Spacer/>
              <Text>₹{alldata.price}.00</Text>
              </Flex>
              <Divider borderColor={"gray.700"} marginTop="30px"/>
              <Text fontSize={"14px"} textAlign="end">Total: ₹{alldata.price}.00</Text>
              <Text marginTop={"30px"}>All prices quoted in Indian rupees.</Text>
           </Box>
      </Box>
      <Footer/>
    </>
  )
}
