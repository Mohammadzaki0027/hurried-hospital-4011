import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Responsive from './responsive'

const NearBy = () => {
  return (
    <Box my="2rem">
        <Text fontSize="1.4rem" fontWeight="600" >Nearby destinations from New Delhi</Text>
        <Text fontSize=".96rem" >Explore cities and towns within driving distance.</Text>
        <Responsive/>
    </Box>
  )
}

export default NearBy