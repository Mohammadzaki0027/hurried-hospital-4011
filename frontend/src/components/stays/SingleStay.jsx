import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { property } from "./Stay";

export const SingleStay = () => {
  const { id } = useParams();
  const [prop, setProp] = useState([]);

  useEffect(() => {
    setProp(property.filter((item) => item.id == id));
  }, []);
  console.log(property);
  console.log(prop);
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Center mt="2">
      <Stack width="75%">
        <Stack>
          <Grid
            h="250px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(8, 1fr)"
            gap={1}
          >
            <GridItem overflow="hidden" rowSpan={2} colSpan={4}>
              <Image
                height="100%"
                width="100%"
                src={prop[0]?.images[0]}
              ></Image>
            </GridItem>
            <GridItem overflow="hidden" colSpan={2}>
              <Image
                height="100%"
                width="100%"
                src={prop[0]?.images[1]}
              ></Image>
            </GridItem>
            <GridItem colSpan={2} />
            <GridItem overflow="hidden" colSpan={2}>
              <Image
                height="100%"
                width="100%"
                src={prop[0]?.images[2]}
              ></Image>
            </GridItem>

            <GridItem colSpan={2} />
          </Grid>
        </Stack>

        <Box display="flex" justifyContent="space-between" p="2">
          <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
            <Box>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Rooms</Tab>
                <Tab>Location</Tab>
                <Tab>Amenities</Tab>
                <Tab>Policies</Tab>
              </TabList>
              <TabPanels p="2rem">
                <TabPanel>{prop[0].description}</TabPanel>
                <TabPanel> 1 Room, 2 Room, 3 Room</TabPanel>
                <TabPanel>Red, yellow and blue.</TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
          <Box>
            {" "}
            <NavLink to="/payment">
              <Button float="left" colorScheme="teal" size="md">
                Reserve a room
              </Button>
            </NavLink>
          </Box>
        </Box>
        <Stack>
          <Stack>
            {prop?.map((item) => (
              <>
                <Heading>{item.name}</Heading>
                <Box display="flex" ml="7" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        color={i < item.stars ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
                <Box display="flex">
                  <Box
                    marginTop="20px"
                    as="span"
                    ml="1"
                    color="gray.600"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {item.rating.toFixed(1)}/5
                  </Box>
                  <Box
                    marginTop="20px"
                    as="span"
                    ml="1"
                    color="gray.600"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    {item.rating.toFixed(1) > 4.5
                      ? "Wonderfull"
                      : item.rating.toFixed(1) > 4
                      ? "Very Good"
                      : "Good"}
                  </Box>
                </Box>
              </>
            ))}
          </Stack>
          <Box
            display="flex"
            marginTop="25px"
            mr="0"
            width="100%"
            justifyContent="space-between"
          >
            <Box width="50%">
              <Heading as="h4" size="md">
                Popular Amenities
              </Heading>
              <Box display="flex" justifyContent="space-between">
                {" "}
                <Box alignItems="left" width="">
                  <Text fontSize="lg">Parking included</Text>
                  <Text fontSize="lg">Pool</Text>
                  <Text fontSize="lg">Spa</Text>
                </Box>
                <Box>
                  <Text fontSize="lg">Free WiFi</Text>
                  <Text fontSize="lg">Air conditioning</Text>
                  <Text fontSize="lg">Laundry</Text>
                </Box>
              </Box>
            </Box>
            <Box width="30%">
              <Heading as="h4" size="md">
                Explore the area
              </Heading>
              <Box alignItems="left" width="">
                <Text fontSize="lg">Ozran Beach</Text>
                <Text fontSize="lg">Anjuna Beach</Text>
                <Text fontSize="lg">Chapora Beach</Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Center>
  );
};
