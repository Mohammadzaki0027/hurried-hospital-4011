import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import FOneWay from './FOneWay'
import FReturn from './FReturn'

const FlightSearch = () => {
  return (
    <Tabs variant='unstyled'>
      <TabList>
        <Tab px="1.4rem" ml="1rem" mr=".6rem" _hover={{ color: '#3763d8', bg: '#e7edfd',  }} borderRadius='.7rem' _selected={{ color: '#3763d8', bg: '#e7edfd' }}>One-way</Tab>
        <Tab px="1.9rem" _hover={{ color: '#3763d8', bg: '#e7edfd' }} borderRadius='.7rem' _selected={{ color: '#3763d8', bg: '#e7edfd' }}>Return</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FOneWay />
        </TabPanel>
        <TabPanel>
          <FReturn />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default FlightSearch