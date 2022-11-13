import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Checkbox, CheckboxGroup, HStack, Input, InputGroup, InputLeftElement, Stack, VStack } from '@chakra-ui/react'
import { IoLocationSharp } from 'react-icons/io5'
import {MdPerson} from 'react-icons/md'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StaySearch = () => {
  let [leave,setLeave]=useState("")
   
    const navigate=useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    const handleSearch=()=>{
        leave=leave.toLocaleLowerCase()
   
        if(leave=="mumbai"||leave=="delhi"||leave=="goa"||leave=="bangalore"){
            
           navigate("/stay")
      
        }else{
            setShowAlert(true)
            setTimeout(()=>{
             setShowAlert(false)
            },2000)
        }
    }
  return (
    <>

{showAlert && (
      <Box style={{position:"sticky",top:"12px",zIndex:"10",width:"40%",margin:"auto"}}>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>Fill the correct City</AlertDescription>
        </Alert>
      </Box> 
      )
      }
      <Stack direction={['column','column','row','row']} mt=".7rem">
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<IoLocationSharp size={22} color='#343b53' />}
          />
         
          <Input type='text'  placeholder='Leaving from' onChange={(e)=>setLeave(e.target.value)}/>
        </InputGroup>
        <InputGroup>
          <Input type='date' placeholder='Going to' />
          <Input type='date' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<MdPerson size={22} color='#343b53'/>}
          />
          <Input value="1 room, 2 travellers" fontWeight='500' />
        </InputGroup>
      </Stack>
      <HStack mt='.8rem' ml='.6rem'>
        <CheckboxGroup >
        <Checkbox mr='4rem' >Add a flight</Checkbox>
        <Checkbox >Add a car</Checkbox>
        </CheckboxGroup>
      </HStack>
      <VStack mt="1.7rem">

        <Button colorScheme='none' color="white" _hover={{ bg: "#2c4fac" }} bg="#3763d8" px="4rem" py="1.4rem" onClick={handleSearch} >Search</Button>
      </VStack>
    </>
  )
}

export default StaySearch