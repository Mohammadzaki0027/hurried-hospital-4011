import { Box, Button, HStack, Image, Input, InputGroup, Stack, Text } from '@chakra-ui/react'
import smapp from '../../Images/smapp.png'
import qr from '../../Images/QR.png'
import React from 'react'

const OurApp = () => {
    return (
        <Box display={['block', 'block', "flex", "flex"]} my="2rem" border="1px solid #c5c7ce" borderRadius=".6rem">
            <Box display={['none', 'none', 'block', 'block']} w={["100%", "100%", "37%", "33%"]}>
                <Image h='100%' borderLeftRadius=".6rem" src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" />
            </Box>
            <Box display={['block', 'block', 'none', 'none']}>
                <Image src={smapp} />
            </Box>
            <Box pl='1rem' w={['100%', '100%', '63%', "49%"]} >
                <Stack >
                    <Box>
                        <Text fontSize={[".8rem","1rem","1.3rem","1.7rem"]} fontWeight='700' >Our app takes you further</Text>
                        <Text fontSize={['.5rem','.6rem','.7rem','.75rem']} >When you book on the app you can save even more up to 20% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.
                        </Text>
                    </Box>

                    <Box>
                        <Box display={['none', 'none', 'none', 'block']}>
                            <Text fontSize={['.8rem','.9rem','1rem','1rem']}  fontWeight='600'>
                                Text yourself a download link for easy access
                            </Text>
                        </Box>
                        <HStack gap={1}>
                            <Box display={['none', 'none', 'none', 'block']}>
                                <InputGroup gap={4} >
                                    <Box border="1px solid #c5c7ce" pl=".6rem" pr='1rem' borderRadius=".4rem">
                                        <Text fontSize=".5rem">Country code</Text>
                                        <select style={{ paddingRight: '3rem' }}>
                                            <option value="">India +91</option>
                                            <option value="">USA +1</option>
                                            <option value="">UK +44</option>
                                            <option value="">UAE +971</option>
                                        </select>
                                    </Box>
                                    <Input type="tel" py="1.3rem" placeholder='Phone number' />
                                </InputGroup>
                            </Box>
                            <Button color="white" _hover={{ bg: "#2c4fac" }} bg="#3763d8" px="2.8rem" py="1.4rem" >Get the app</Button>
                        </HStack>
                    </Box>

                    <Box display={['none', 'none', 'none', 'block']}>
                        <Text fontSize='.7rem'>
                            By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text
                            message rates may apply.
                        </Text>
                    </Box>
                </Stack>
            </Box>
            <Box w="18%" display={['none', 'none', 'none', 'block']}>
                <Image  borderRightRadius=".7rem" src={qr} />
            </Box>
        </Box>
    )
}

export default OurApp