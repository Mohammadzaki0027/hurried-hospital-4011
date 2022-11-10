import { Button, HStack, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react'
import { IoLocationSharp } from 'react-icons/io5'
import React from 'react'

const FOneWay = () => {
    return (
        <>
            <HStack mt=".7rem">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<IoLocationSharp size={22} color='#343b53' />}
                    />
                    <Input type='text' placeholder='Leaving from' />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<IoLocationSharp size={22} color='#343b53' />}
                    />
                    <Input type='text' placeholder='Going to' />
                </InputGroup>
                <InputGroup>
                    <Input type='date' />
                </InputGroup>
            </HStack>
            <VStack mt="1.7rem">
                <Button colorScheme='none' color="white" bg="#3763d8" w="12vw" h="12vh">Search</Button>
            </VStack>
        </>
    )
}

export default FOneWay