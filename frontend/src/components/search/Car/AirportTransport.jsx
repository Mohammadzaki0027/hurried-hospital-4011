import { Button, HStack, Input, InputGroup, InputLeftElement, TagLabel, VStack } from '@chakra-ui/react'
import { IoLocationSharp } from 'react-icons/io5'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import React from 'react'

const AirportTransport = () => {
    return (
        <>
            <HStack mt=".7rem">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<IoLocationSharp  size={22} color='#343b53' />}
                    />
                    <Input type='text' placeholder='Leaving from' />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<HiBuildingOffice2 size={22} color='#343b53' />}
                    />
                    <Input type='text' placeholder='Going to' />
                </InputGroup>
                <InputGroup>
                    <Input type='date' />
                </InputGroup>
                <InputGroup>
                    <Input type='time' aria-label='Time' placeholder="Time"/>
                </InputGroup>
            </HStack>
            <VStack mt="1.7rem">
                <Button colorScheme='none' color="white" bg="#3763d8" w="12vw" h="12vh">Search</Button>
            </VStack>
        </>
    )
}

export default AirportTransport