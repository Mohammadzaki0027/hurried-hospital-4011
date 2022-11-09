import { Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SignInDropDown = () => {
    return (
        <Menu>
            <MenuButton background={"none"} _active={"none"} _hover={{ color: "#3763d8" }} as={Button}>
                Sign in
            </MenuButton>
            <MenuList >
                <Box w="24vw" py="1.4rem" px="1.2rem">
                    <VStack gap="4">
                    <Image src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" />
                    
                    <Text fontSize="1.3rem" textAlign={"left"} fontWeight="600" lineHeight="1.5rem">
                        Save an average of 15% on thousands of hotels when you're signed in
                    </Text>
                    </VStack>
                    <Button mt="1.8rem" w="100%" colorScheme='none' color="white" bg="#3763d8">
                        Sign in
                    </Button>
                    <Button colorScheme='none' color="black" _hover={{ color: "#3763d8" }}>
                        Create a free account
                    </Button>
                </Box>
                <MenuItem>List of Favourites</MenuItem>
                <MenuItem>Expedia Rewards</MenuItem>
                <MenuDivider/>
                <MenuItem>Feedback</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SignInDropDown