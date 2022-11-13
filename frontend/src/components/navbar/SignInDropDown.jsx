import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoPersonCircle } from "react-icons/io5";
import React from "react";
import {Link } from "react-router-dom";

const SignInDropDown = () => {
  let data = localStorage.getItem("auth");
  data = JSON.parse(data);
  console.log(data);
  let isAuth = data.isAuth;



  const handelsignout = () => {
    localStorage.setItem("auth", JSON.stringify({ isAuth: false }));
    window.location.reload()
  };
  React.useEffect(() => {}, []);
  return (
    <>
      {isAuth ? (
        <Button onClick={handelsignout}>Sign out</Button>
      ) : (
        <Menu>
          <MenuButton
            background={"none"}
            _active={"none"}
            _hover={{ color: "#3763d8" }}
            p="0px"
            as={Button}
          >
            Sign in
          </MenuButton>
          <MenuList>
            <Box w="24vw" py="1.4rem" px="1.2rem">
              <VStack gap="4">
                <Image src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" />

                <Text
                  fontSize="1.3rem"
                  textAlign={"left"}
                  fontWeight="600"
                  lineHeight="1.5rem"
                >
                  Save an average of 15% on thousands of hotels when you're
                  signed in
                </Text>
              </VStack>
              <Link to="/login">
                <Button
                  mt="1.8rem"
                  w="100%"
                  colorScheme="none"
                  color="white"
                  bg="#3763d8"
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  colorScheme="none"
                  color="black"
                  _hover={{ color: "#3763d8" }}
                >
                  Create a free account
                </Button>
              </Link>
            </Box>
            <MenuItem>List of Favourites</MenuItem>
            <MenuItem>Expedia Rewards</MenuItem>
            <MenuDivider />
            <MenuItem>Feedback</MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export const SmSignInDropDown = () => {
  return (
    <Menu>
      <MenuButton
        background={"none"}
        _active={"none"}
        /*_hover={{ color: "#3763d8" }}*/ as={Button}
      >
        <IoPersonCircle />
      </MenuButton>
      <MenuList>
        <Box w="60vw" py="1.4rem" px="1.2rem">
          <VStack gap="4">
            <Image src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" />

            <Text
              fontSize="1.3rem"
              textAlign={"left"}
              fontWeight="600"
              lineHeight="1.5rem"
            >
              Save an average of 15% on thousands of hotels when you're signed
              in
            </Text>
          </VStack>
          <Link to="/login">
            <Button
              mt="1.8rem"
              w="100%"
              colorScheme="none"
              color="white"
              bg="#3763d8"
            >
              Sign in
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              colorScheme="none"
              color="black"
              _hover={{ color: "#3763d8" }}
            >
              Create a free account
            </Button>
          </Link>
        </Box>
        <MenuItem>List of Favourites</MenuItem>
        <MenuItem>Expedia Rewards</MenuItem>
        <MenuDivider />
        <MenuItem>Feedback</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SignInDropDown;
