import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Stack, TagLabel, VStack } from '@chakra-ui/react'
import { IoLocationSharp } from 'react-icons/io5'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import React from 'react'

const CarHire = () => {
  return (
    <>
      <Stack mt=".7rem">
        <Box display="flex" gap={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<IoLocationSharp size={22} color='#343b53' />}
            />
            <Input type='text' placeholder='Pick-up' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<IoLocationSharp size={22} color='#343b53' />}
            />
            <Input type='text' placeholder='Same as pick-up' />
          </InputGroup>
        </Box>
        <Box display="flex" gap={4}>
          <InputGroup gap={2}>
            <Input type='date' />
            <Input type='time' aria-label='Time' placeholder="Time" />
          </InputGroup>
          <InputGroup gap={2}>
            <Input type='date' />
            <Input type='time' aria-label='Time' placeholder="Time" />
          </InputGroup>
        </Box>

      </Stack>
      <VStack mt="1.7rem">
        <Button colorScheme='none' color="white" _hover={{ bg: "#2c4fac" }} bg="#3763d8" px="4rem" py="1.4rem">Search</Button>
      </VStack>
    </>
  )
}

export default CarHire