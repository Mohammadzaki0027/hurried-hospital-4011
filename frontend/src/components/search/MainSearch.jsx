import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import CarSearch from './Car/CarSearch'
import FlightSearch from './Flight/FlightSearch'
import StaySearch from './StaySearch'

const MainSearch = () => {
    return (
        <Box p="1.5rem" border="1px solid #c5c7ce" borderRadius=".7rem">
            <Tabs align='center'>
                <TabList>
                    <Tab>Stays</Tab>
                    <Tab>Flights</Tab>
                    <Tab>Cars</Tab>
                    <Tab>Packages</Tab>
                    <Tab>Things to do</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <StaySearch/>
                    </TabPanel>
                    <TabPanel>
                        <FlightSearch/>
                    </TabPanel>
                    <TabPanel>
                        <CarSearch/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default MainSearch