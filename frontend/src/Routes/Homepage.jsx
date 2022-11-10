import { Box, Image } from '@chakra-ui/react'
import reward from "../Images/Reward.png"
import React from 'react'
import MainSearch from '../components/search/MainSearch'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Box w="74%" margin="auto">
                <MainSearch />
                <br />
                <br />
                <h1>Homepage</h1>
                <br />
                <br />
                <Image borderRadius=".6rem" src={reward} />
            </Box>
            <Footer />
        </>
    )
}

export default Homepage