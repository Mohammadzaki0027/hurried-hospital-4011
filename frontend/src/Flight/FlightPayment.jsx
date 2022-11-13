import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Checkbox, Divider, Flex, Heading, HStack, Image, Input, Select, Spacer, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { HiLockClosed } from 'react-icons/hi2'
import Navbar from '../components/navbar/Navbar'
import {IoIosArrowForward} from "react-icons/io"
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export const FlightPayment = () => {
  const [data,setData]=useState({})
  const {id}=useParams()
    useEffect(()=>{
      axios.get(`http://localhost:8080/flightcheckout/${id}`).then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
    },[])
    var today = new Date();
    var day= today.getDate()
    var month = today.toLocaleString('default', { month: 'short' });
    const weekday=today.toLocaleString("default",{weekday:"short"})
    const [surname,setSurname]=useState("")
    const [first,setFirst]=useState("")
    const [phone,setPhone]=useState("")
    const [Name,setName]=useState("")
    const [cardNo,setCard]=useState("")
    const [months,setMonth]=useState("")
    const [year,setYear]=useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [showPay,setShowpay]=useState(false)
    const navigate=useNavigate()
    const handleData=()=>{
      if(surname!=""&&first!=""&&phone.length==10&&Name!=""&&cardNo.length==16&&month!=""&&year!=""){
          setShowpay(true)
          setTimeout(()=>{
            navigate("/")
            setShowpay(false)
          },3000)
          setShowAlert(false)
      }
      else{
       setShowAlert(true)
       setTimeout(()=>{
        setShowAlert(false)
       },5000)
      
      }
    }
  
  return (
    <>
     <Navbar/>
     {showAlert && (
      <Box style={{position:"sticky",top:"2px",zIndex:"10",width:"40%",margin:"auto"}}>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>Wrong Crenditials/Something Missing</AlertDescription>
        </Alert>
      </Box> 
      )
      }
{showPay&&(
  <Box style={{position:"sticky",top:"2px",zIndex:"10",width:"40%",margin:"auto"}}>
  <Alert
  status='success'
  variant='subtle'
  borderRadius={"10px"}
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='150px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Payment sucessfull
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for Using our application.
  </AlertDescription>
</Alert>
</Box>
)}

      <Heading marginLeft={"5%"} size={"lg"}>Secure booking - only takes a few minutes!</Heading>
      <Box display={"flex"}  gap="30px" >
        
          <Box 
          // border={"1px solid blue"}
           width={["90%","90%","90%","65%"]} marginTop="20px" marginLeft="5%" padding={"5px"}>
            <Box marginTop="10px" marginBottom={"20px"}
           boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" padding={"10px"} 
            width={"100%"} 
            display={["block","block","block","none"]}
           height="max-content"  >
                <Text fontSize={"20px"} fontWeight="semibold" >One-way flight</Text>
                <Text>1 ticket: 1 adult</Text>
                <Divider marginTop={"5px"} borderColor={"gray.700"}/>
                <Text marginTop={"10px"}>Mumbai (BOM) to Delhi (DEL)</Text>
                <Text marginTop={"5px"} fontWeight={"bold"} fontSize="14px">
                {weekday},{day} {month}
              </Text>
              <Text marginTop={"5px"} fontSize={"14px"}>{data.time} {data.stoptime}</Text>
              <Flex
              display={"flex"}
              alignItems="center"
              gap={"10px"}
              fontSize={"15px"}
              marginTop="5px"
            >
              <Image w={"20px"} src={data.flight_logo}></Image>
              <Text>
                {data.flight_company} 
              </Text>
            </Flex>
              <Divider borderColor={"gray.700"} marginTop="30px"/>
              <Flex>
              <Text>Your price summary</Text>
              <Spacer/>
              <Text>₹{data.price}.00</Text>
              </Flex>
              <Divider borderColor={"gray.700"} marginTop="30px"/>
              <Text fontSize={"14px"} textAlign="end">Total: ₹{data.price}.00</Text>
              <Text marginTop={"30px"}>All prices quoted in Indian rupees.</Text>
           </Box>
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
                <Input value={surname} onChange={(e)=>setSurname(e.target.value)} borderColor="gray.600"/>
                </Box>
                <Box>
                <label htmlFor="">Given/First name*</label>
                <Input  value={first} onChange={(e)=>setFirst(e.target.value)} borderColor="gray.600"/>
                </Box>
              </HStack>
              <Box marginTop={"20px"}>
              <label >Country/Territory Code*</label>
                <Select color={"black"} borderColor="gray.600" w="60%">
                    <option>India +91</option>
                    {/* <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Miss</option> */}
                </Select>
                </Box>
                <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
              <label >Phone number*</label>
                <Input value={phone} onChange={(e)=>setPhone(e.target.value)}  borderColor="gray.600" w="60%" placeholder='In casewe need to reach you'/>
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
                <Input value={Name} onChange={(e)=>setName(e.target.value)}  marginTop={"10px"}  borderColor="gray.600" w="60%" />
                </Box>
                <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
                    <label >Debit/Credit card number*</label>
                    <Input type={"number"}  value={cardNo} onChange={(e)=>setCard(e.target.value)} marginTop={"10px"}  borderColor="gray.600" w="40%" />
                </Box>
                <Box  display="flex" flexDirection={"column"} marginTop={"20px"}>
                    <label >Expiry date*</label>
                 <Box display={"flex"} w="30%" gap="10px" >
                     <Select color={"blue.500"} borderColor="gray.600" w="60%" value={months} onChange={(e)=>setMonth(e.target.value)}>
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
                <Select color={"blue.500"} borderColor="gray.600" w="50%" value={year} onChange={(e)=>setYear(e.target.value)}>
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
                 <Button onClick={handleData} display={"flex"}  marginTop={"20px"} width="30%" height={"50px"} colorScheme={"yellow"}>Complete booking  <IoIosArrowForward  /></Button>
             </Box>
             
             
          </Box>
          
           <Box marginTop="25px"
            display={["none","none","none","block"]}
           style={{position:"sticky",top:"10px"}}
           boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" padding={"10px"} 
            width={"25%"} 
           height="max-content"  >
                <Text fontSize={"20px"} fontWeight="semibold" >One-way flight</Text>
                <Text>1 ticket: 1 adult</Text>
                <Divider marginTop={"5px"} borderColor={"gray.700"}/>
                <Text marginTop={"10px"}>Mumbai (BOM) to Delhi (DEL)</Text>
                <Text marginTop={"5px"} fontWeight={"bold"} fontSize="14px">
                {weekday},{day} {month}
              </Text>
              <Text marginTop={"5px"} fontSize={"14px"}>{data.time} {data.stoptime}</Text>
              <Flex
              display={"flex"}
              alignItems="center"
              gap={"10px"}
              fontSize={"15px"}
              marginTop="5px"
            >
              <Image w={"20px"} src={data.flight_logo}></Image>
              <Text>
                {data.flight_company} 
              </Text>
            </Flex>
              <Divider borderColor={"gray.700"} marginTop="30px"/>
              <Flex>
              <Text>Your price summary</Text>
              <Spacer/>
              <Text>₹{data.price}.00</Text>
              </Flex>
              <Divider borderColor={"gray.700"} marginTop="30px"/>
              <Text fontSize={"14px"} textAlign="end">Total: ₹{data.price}.00</Text>
              <Text marginTop={"30px"}>All prices quoted in Indian rupees.</Text>
           </Box>
      </Box>
      <Footer/>
    </>
  )
}
