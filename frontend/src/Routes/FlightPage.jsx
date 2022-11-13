import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import plan from "../Images/planahead.png"
import Footer from '../components/Footer'
import OurApp from '../components/homepage/OurApp'
import Navbar from '../components/navbar/Navbar'
import FlightSearch from '../components/search/Flight/FlightSearch'

const FlightPage = () => {
  return (
    <>
      <Navbar />
      <Box w={['95%', '95%', '95%', '78%']} margin="auto">
        <Text fontSize={['xl', 'xl', '2xl', '3xl']} fontWeight={600}>Search flights</Text>
        <FlightSearch />
        <Box display={"flex"} my="2rem" justifyContent={"center"}>
          <Image src="https://tpc.googlesyndication.com/simgad/12535850531646588924?" />
        </Box>
        <Box my="2rem" >
          <Text fontSize={['xl', '2xl', '3xl', '4xl']} fontWeight='600'>
            Explore, discover and save
          </Text>
          <Image w="100%" borderRadius=".6rem" src={plan} />
        </Box>
        <OurApp />
      </Box>
      <Footer />
    </>
  )
}

export default FlightPage