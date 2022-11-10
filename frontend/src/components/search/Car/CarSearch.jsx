import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import AirportTransport from './AirportTransport'
import CarHire from './CarHire'

const CarSearch = () => {
  return (
    <Tabs variant='unstyled'>
      <TabList>
        <Tab px="1.4rem" ml="1rem" mr=".6rem" _hover={{ color: '#3763d8', bg: '#e7edfd',  }} borderRadius='.7rem' _selected={{ color: '#3763d8', bg: '#e7edfd' }}>Car hire</Tab>
        <Tab px="1.9rem" _hover={{ color: '#3763d8', bg: '#e7edfd' }} borderRadius='.7rem' _selected={{ color: '#3763d8', bg: '#e7edfd' }}>Airport transport</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CarHire />
        </TabPanel>
        <TabPanel>
          <AirportTransport />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default CarSearch