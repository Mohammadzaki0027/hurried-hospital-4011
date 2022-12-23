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
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  VStack,
  ModalContent,
  Divider,
  HStack,
  Select,
  Checkbox,
  Flex,
  Spacer,
  Input,
  useToast,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons";
import axios from "axios";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { HiLockClosed } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export const SingleStay = () => {
  const { id } = useParams();
  const [prop, setProp] = useState([]);
  const [mprice, setMprice] = useState();
  const toast = useToast();
  useEffect(() => {
    axios.get("https://waytoglobe.onrender.com/stay").then((r) => {
      setProp(r.data.filter((item) => item.id == id));
      console.log(r.data);
    });
  }, []);
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  const handleModal = (p) => {
    setMprice(p);
    onOpen();
  };
  return (
    <>
      <Navbar />
      <Center display="block">
        <Box margin="auto" width="70%">
          <Box>
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
                      <TabPanel>{prop[0]?.description}</TabPanel>
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
          </Box>
        </Box>
        <Box margin="auto" mt="50px" width="70%">
          <Box display="flex">
            <Box maxW="sm" borderRadius="lg" overflow="hidden">
              <Image
                src="https://images.trvl-media.com/hotels/3000000/2190000/2185200/2185154/1d4b82d8.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                alt="error"
              />

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  Superior Room
                </Box>
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt="5px"
                  alignItems="center"
                >
                  <Heading as="h4" size="md">
                    ₹{prop[0]?.price}
                  </Heading>
                  <Button
                    colorScheme="facebook"
                    onClick={() => handleModal(prop[0]?.price)}
                  >
                    Reserve
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src="https://images.trvl-media.com/hotels/3000000/2190000/2185200/2185154/859ff7c1.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                alt="error"
              />

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  Suite Room
                </Box>
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt="5px"
                  alignItems="center"
                >
                  <Heading as="h4" size="md">
                    ₹{prop[0]?.price + 500}
                  </Heading>
                  <Button
                    colorScheme="facebook"
                    onClick={() => handleModal(prop[0]?.price + 500)}
                  >
                    Reserve
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src="https://images.trvl-media.com/hotels/3000000/2190000/2185200/2185154/981f028c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                alt="error"
              />

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  Delux Room
                </Box>
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt="5px"
                  alignItems="center"
                >
                  <Heading as="h4" size="md">
                    ₹{prop[0]?.price + 1000}
                  </Heading>
                  <Button
                    colorScheme="facebook"
                    onClick={() => handleModal(prop[0]?.price + 1000)}
                  >
                    Reserve
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box display={"flex"} gap="30px">
                  <Box
                    //   border={"1px solid blue"}
                    width={["90%"]}
                    marginTop="20px"
                    marginLeft="5%"
                    padding={"5px"}
                  >
                    <Box
                      padding={"15px"}
                      borderRadius="5px"
                      boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    >
                      <Heading size={"md"} marginBottom="20px">
                        Your Payment Option
                      </Heading>
                      <Divider borderColor={"gray"}></Divider>

                      <HStack marginTop={"10px"} width="90%">
                        <Box>
                          <label>Title*</label>
                          <Select color={"blue.500"} borderColor="gray.600">
                            <option></option>
                            <option>Mr.</option>
                            <option>Ms.</option>
                            <option>Mrs.</option>
                            <option>Miss</option>
                          </Select>
                        </Box>
                        <Box>
                          <label htmlFor="">Surname/Surname*</label>
                          <Input borderColor="gray.600" />
                        </Box>
                        <Box>
                          <label htmlFor="">First name*</label>
                          <Input borderColor="gray.600" />
                        </Box>
                      </HStack>
                      <Box marginTop={"20px"}>
                        <label>Country/Territory Code*</label>
                        <Select color={"black"} borderColor="gray.600" w="60%">
                          <option>India +91</option>
                          <option>Mr.</option>
                          <option>Ms.</option>
                          <option>Mrs.</option>
                          <option>Miss</option>
                        </Select>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={"column"}
                        marginTop={"20px"}
                      >
                        <label>Phone number*</label>
                        <Input
                          borderColor="gray.600"
                          w="60%"
                          placeholder="In casewe need to reach you"
                        />
                      </Box>
                      <Checkbox marginTop={"10px"} defaultChecked>
                        Receive text alerts about this trip (free of charge).
                      </Checkbox>
                    </Box>

                    <Box
                      marginTop={"20PX"}
                      padding={"15px"}
                      borderRadius="5px"
                      boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    >
                      <Flex display="flex" gap={"10px"} alignItems={"start"}>
                        <HiLockClosed size={20} />
                        <Heading
                          textAlign={"center"}
                          size={"md"}
                          marginBottom="20px"
                        >
                          {" "}
                          How would you like to pay?
                        </Heading>
                      </Flex>
                      <Flex w={["20%"]} display="flex" gap={"10px"}>
                        <Image
                          w={"30px"}
                          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
                        ></Image>
                        <Image
                          w={"30px"}
                          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
                        ></Image>
                        <Image
                          w={"30px"}
                          src="https://a.travel-assets.com/egds/marks/payment__visa.svg"
                        ></Image>
                        <Image
                          w={"30px"}
                          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg"
                        ></Image>
                      </Flex>
                      <Box
                        display="flex"
                        flexDirection={"column"}
                        marginTop={"20px"}
                      >
                        <label>Name on Card*</label>
                        <Input
                          marginTop={"10px"}
                          borderColor="gray.600"
                          w="60%"
                        />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={"column"}
                        marginTop={"20px"}
                      >
                        <label>Debit/Credit card number*</label>
                        <Input
                          marginTop={"10px"}
                          borderColor="gray.600"
                          w="40%"
                        />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={"column"}
                        marginTop={"20px"}
                      >
                        <label>Expiry date*</label>
                        <Box display={"flex"} w="30%" gap="10px">
                          <Select
                            color={"blue.500"}
                            borderColor="gray.600"
                            w="60%"
                          >
                            <option>Month</option>
                            <option>01-Jan</option>
                            <option>02-Feb</option>
                            <option>03-Mar</option>
                            <option>04-Apr</option>
                            <option>05-May</option>
                            <option>06-Jun</option>
                            <option>07-Jul</option>
                            <option>08-Aug</option>
                            <option>09-Sep</option>
                            <option>10-Oct</option>
                            <option>11-Non</option>
                            <option>12- Dec</option>
                          </Select>
                          <Select
                            color={"blue.500"}
                            borderColor="gray.600"
                            w="50%"
                          >
                            <option>Year</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                          </Select>
                        </Box>
                        <Divider
                          marginTop={"30px"}
                          borderColor={"gray.700"}
                        ></Divider>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <NavLink to="/">
                  <Button
                    variant="ghost"
                    onClick={() =>
                      toast({
                        title: "Otp Auto detected.",
                        description: "Booking Done. Redirected to Home",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                      })
                    }
                  >
                    Book
                  </Button>
                </NavLink>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Center>
      <Footer />
    </>
  );
};
