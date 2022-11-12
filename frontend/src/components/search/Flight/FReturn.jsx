import { Alert, AlertIcon, Box, Button, Input, InputGroup, InputLeftElement, Stack, VStack } from '@chakra-ui/react'
import { IoLocationSharp } from 'react-icons/io5'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { HiOutlineSwitchVertical } from 'react-icons/hi'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const FReturn = () => {
    const [leave,setLeave]=useState("")
    const [going,setGoing]=useState("")
    const navigate=useNavigate()
    const handleSearch=()=>{
        if(leave=="Mumbai"||"mumbai"&&going=="Delhi"||"delhi"){
            const data={
                leave:leave,
                going:going
            }
            localStorage.setItem("Go",JSON.stringify(data))
           navigate("/flight")
    
        }else{
          alert('Fill the all details');
         
        }
    }

    return (
        <>
            <Stack direction={['column', 'column', 'column', 'row']} mt=".7rem">
                <Stack direction={['column', 'row', 'row', 'row']}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<IoLocationSharp size={22} color='#343b53' />}
                        />
                        <Input type='text' value={leave} onChange={(e)=>setLeave(e.target.value)} placeholder='Leaving from' />
                    </InputGroup>
                    <Box display={['none', 'block', 'block', 'block']} border="1px solid #c5c7ce" h='2rem' p='.3rem' borderRadius='full'>
                        <HiOutlineSwitchHorizontal size={22} color='#343b53' />
                    </Box>
                    <Box display={['block', 'none', 'none', 'none']} border="1px solid #c5c7ce" h='2rem' w='2.1rem' p='.3rem' borderRadius='full'>
                        <HiOutlineSwitchVertical size={22} color='#343b53' />
                    </Box>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<IoLocationSharp size={22} color='#343b53' />}
                        />
                        <Input type='text' placeholder='Going to' value={going} onChange={(e)=>setGoing(e.target.value)} />
                    </InputGroup>
                </Stack>
                <InputGroup>
                    <Input type='date' />
                    <Input type='date' />
                </InputGroup>
            </Stack>
            <VStack mt="1.7rem">
                <Button onClick={handleSearch} colorScheme='none' color="white" _hover={{ bg: "#2c4fac" }} bg="#3763d8" px="4rem" py="1.4rem" >Search</Button>
            </VStack>
        </>
    )
}

export default FReturn