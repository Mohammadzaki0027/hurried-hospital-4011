import { Box, Image } from '@chakra-ui/react'
import reward from "../Images/Reward.png"
import plan from "../Images/planahead.png"
import discover from "../Images/discover.png"
import React from 'react'
import MainSearch from '../components/search/MainSearch'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import NearBy from '../components/homepage/NearBy.jsx'
import OurApp from '../components/homepage/OurApp'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Box /*w="74%"*/ w={['95%','95%','95%','78%']} margin="auto">
                <MainSearch />
                <br />
                <br />
                <Image borderRadius=".6rem" src={reward} />
                <OurApp />
                <NearBy />
                <Image border="1px solid #c5c7ce" borderRadius=".6rem" my="2rem" src={discover} />
                <Box display={"flex"} my="2rem" justifyContent={"center"}>
                    <Image src="https://tpc.googlesyndication.com/simgad/4477719789317755579?" />
                </Box>
                <Box display={"flex"} justifyContent="center" my="2rem" >
                    <Image w="100%" borderRadius=".6rem" src={plan} />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Homepage