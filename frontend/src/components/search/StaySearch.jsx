import { Button, Checkbox, CheckboxGroup, HStack, Input, InputGroup, InputLeftElement, Stack, VStack } from '@chakra-ui/react'
import { IoLocationSharp } from 'react-icons/io5'
import {MdPerson} from 'react-icons/md'
import React from 'react'

const StaySearch = () => {
  return (
    <>
      <Stack direction={['column','column','row','row']} mt=".7rem">
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<IoLocationSharp size={22} color='#343b53' />}
          />
          <Input type='text' placeholder='Leaving from' />
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
        <Button colorScheme='none' color="white" _hover={{ bg: "#2c4fac" }} bg="#3763d8" px="4rem" py="1.4rem">Search</Button>
      </VStack>
    </>
  )
}

export default StaySearch