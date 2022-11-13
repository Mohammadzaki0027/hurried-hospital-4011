import { Box, Button, Image } from '@chakra-ui/react';
import Logo from '../../Images/Logo.png'
import DropDown, { SmDropDown } from './DropDown';
import { GrLanguage } from 'react-icons/gr'
import {IoMdBriefcase} from 'react-icons/io'
import { BsFillBellFill } from 'react-icons/bs'
import SignInDropDown, { SmSignInDropDown } from './SignInDropDown';
import { useNavigate} from "react-router-dom"
const Navbar = () => {
  const nav=useNavigate()
  const handelnavigate=()=>{
nav("/")
  }
  return (
    <Box borderBottom="1px solid #c5c7ce" mb="2rem">
      <Box m="auto" w={["100%","100%","100%","76%"]} display="flex" py=".8rem" >
        <Box display="flex" w="100%" justifyContent={"space-between"}>
          <Box display="flex" >
     
            
            <Image w={["75%","55%","26%","26%"]} src={Logo}  onClick={handelnavigate}/>
          
            <Box display={['none','none','block','block']}>
              <DropDown />
            </Box>
          </Box>
          <Box display={['none','none','flex',"flex"]}>
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
            <SignInDropDown />
          </Box>

          <Box display={['flex',"flex",'none','none']}>
            <Button colorScheme='none' mr='-1rem' color="black" /*_hover={{ color: "#3763d8" }}*/ >
              <SmDropDown />
            </Button>
            <Button colorScheme='none' color="black" /*_hover={{ color: "#3763d8" }}*/>
              <IoMdBriefcase />
            </Button>
            <SmSignInDropDown />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar