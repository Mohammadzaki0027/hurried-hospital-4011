import { Box, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react'
import foot from '../Images/Footimg.png'
import React from 'react'

const Footer = () => {
    return (
        <Box mt="2rem">
            <Box /*w="30%"*/ w={['97%', '97%', '95%', '74%']} textAlign="center" margin="auto" mt="1.5rem" mb="2rem" >
                <Text fontSize=".999rem" fontWeight="700">Explore a world of travel with Expedia</Text>
                <Text fontSize=".8rem" color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Discover new places and experiences</Text>
            </Box>
            <Box /*w="74%"*/ w={['97%', '97%', '95%', '74%']} margin="auto" >
                <Box borderBottom="1px solid #c5c7ce">
                    <Grid templateColumns='repeat(5, 1fr)' textAlign={'start'} lineHeight='7' gap={6}>
                        <GridItem>
                            <Image w="100%" src={foot} />
                        </GridItem>
                        <GridItem>

                            <Text fontSize=".999rem" fontWeight="700">Company</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>About us</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Jobs</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>List your property</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Partnerships</Text>

                        </GridItem>
                        <GridItem>

                            <Text fontSize=".999rem" fontWeight="700">Explore</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>India travel guide</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Hotels in India</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Holiday rentals in India</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Holiday packages in India</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Domestic flights</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Car hire in India</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>All accommodation types</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Travel blog</Text>

                        </GridItem>
                        <GridItem>

                            <Text fontSize=".999rem" fontWeight="700">Policies</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Statement</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Terms of use</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Vrbo terms and conditions</Text>

                        </GridItem>
                        <GridItem>

                            <Text fontSize=".999rem" fontWeight="700">Help</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Suuport</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Change or cancel your booking</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Refund process and timelines</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Book a flight using an airline credit</Text>
                            <Text fontSize={['.52rem', '.52rem', '.8rem', '.8rem']} color="#3662D8" _hover={{ textDecoration: "underline", cursor: "pointer" }}>International travel documents</Text>

                        </GridItem>
                    </Grid>
                </Box>
                <Box>
                    <VStack gap="4" py="1.5rem">
                        <Image src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" />
                        <Text fontSize=".75rem" fontWeight="400" color="#343B53">
                            © 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.
                        </Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer