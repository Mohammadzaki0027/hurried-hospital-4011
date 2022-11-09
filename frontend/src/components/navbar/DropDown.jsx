import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { ImAirplane } from "react-icons/im"
import { IoCarSportSharp } from 'react-icons/io5'
import { FaSuitcaseRolling, FaTicketAlt } from 'react-icons/fa'
import React from 'react'

const DropDown = () => {
  return (
    <Menu>
      <MenuButton background={"none"} _active={"none"} _hover={{ color: "#3763d8" }} as={Button} rightIcon={<AiOutlineDown />}>
        More travel
      </MenuButton>
      <MenuList w="24vw">
        <MenuItem minH='48px'>
          <HiBuildingOffice2 size={21} />
          <span style={{ marginLeft: "12px" }}>Stays</span>
        </MenuItem>
        <MenuItem minH='40px'>
          <ImAirplane size={21} />
          <span style={{ marginLeft: "12px" }}>Flights</span>
        </MenuItem>
        <MenuItem minH='40px'>
          <IoCarSportSharp size={21} />
          <span style={{ marginLeft: "12px" }}>
            Cars
          </span>
        </MenuItem>
        <MenuItem minH='48px'>
          <FaSuitcaseRolling size={21} />
          <span style={{ marginLeft: "12px" }}>
            Packages
          </span>
        </MenuItem>
        <MenuItem minH='48px'>
          <FaTicketAlt size={21} />
          <span style={{ marginLeft: "12px" }}>
            Holiday activities
          </span>
        </MenuItem>
        <MenuItem>Deals</MenuItem>
        <MenuItem>Groups & meetings</MenuItem>
        <MenuItem>Mobile</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DropDown