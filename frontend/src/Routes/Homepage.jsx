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
                <Box display={"flex"} my="2rem" justifyContent={"center"}>
                    <Image src="https://tpc.googlesyndication.com/simgad/4477719789317755579?" />
                </Box>
                <Box display={"flex"} my="2rem" justifyContent={"center"}>
                    <Image src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg" />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Homepage