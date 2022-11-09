import { Box, Button, Image } from '@chakra-ui/react';
import Logo from '../../Images/Logo.png'
import DropDown from './DropDown';
import { GrLanguage } from 'react-icons/gr'
import { BsFillBellFill } from 'react-icons/bs'
import SignInDropDown from './SignInDropDown';

const Navbar = () => {
  return (
    <Box borderBottom="1px solid #c5c7ce" mb="2rem">
      <Box m="auto" w="76%" display="flex" py=".8rem" >
        <Box display="flex" justifyContent={"space-between"}>
          <Box display="flex">
            <Image w="20%" src={Logo} />
            <Box>
              <DropDown />
            </Box>
          </Box>
          <Box display={"flex"}>
            <Button leftIcon={<GrLanguage />} colorScheme='none' color="black" _hover={{ color: "#3763d8" }}>
              Settings
            </Button>
            <Button colorScheme='none' color="black" _hover={{ color: "#3763d8" }}>
              Support
            </Button>
            <Button colorScheme='none' color="black" _hover={{ color: "#3763d8" }}>
              Trips
            </Button>
            <Button colorScheme='none' color="black" _hover={{ color: "#3763d8" }}>
              <BsFillBellFill />
            </Button>
            {/* <Button colorScheme='none' color="black" _hover={{ color: "#3763d8" }}>
              Sign in
            </Button> */}
            <SignInDropDown />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar