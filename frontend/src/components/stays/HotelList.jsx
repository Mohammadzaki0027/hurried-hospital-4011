import {
  Stack,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  useDisclosure,
  Show,
  Image,
  Select,
  Hide,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Filter2 } from "./filter";

export const Hotel = ({ prop }) => {
  const [filter, setFilter] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const handleChnageFilter = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "option1") {
      prop = prop.sort((a, b) => b.price - a.price);
    } else {
      setFilter(e.target.value);
      prop = prop.sort((a, b) => a.price - b.price);
    }
  };

  const sizes = ["full"];

  if (prop.length === 0) {
    return (
      <Stack border="1px solid" maxW="100%" p="2">
        <Box maxW="100%"> No Result Found</Box>
      </Stack>
    );
  }
  return (
    <Stack>
      {/*......... Below 720 Sort filter ........*/}
      <Show below="720px">
        <Stack minW="95%">
          <Box>
            <>
              {sizes.map((size) => (
                <Button
                  width="95%"
                  onClick={() => handleSizeClick(size)}
                  key={size}
                  m={4}
                  color="blue"
                >{`Sort  filter`}</Button>
              ))}

              <Modal onClose={onClose} size={size} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Sort and Filter</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Filter2 />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </Box>
        </Stack>
      </Show>
      {/*......... Below 720 Sort filter End........*/}

      <Hide below="720px">
        <Stack alignItems="flex-end">
          <Select
            placeholder="Recommended"
            width="30%"
            onChange={handleChnageFilter}
          >
            <option value="option1">Price</option>
            <option value="option2">Guest Rating</option>
            <option value="option3">Property Class</option>
          </Select>
        </Stack>
      </Hide>
      <Stack border="1px solid" maxW="100%" minW="60%" p="2">
        {prop?.map((item) => (
          <Box
            key={item.id}
            maxW="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            maxH="220px"
          >
            <Box maxW="30%">
              <Box>
                <Carousel showThumbs={false} infiniteLoop>
                  {item.images.map((slide) => {
                    return (
                      <Box key={item.rating}>
                        <Image
                          key={slide}
                          h="220px"
                          src={slide}
                          width="auto"
                          alt={item.imageAlt}
                        />
                      </Box>
                    );
                  })}
                </Carousel>
              </Box>
              {/* <Image minH="100%" src={property.images[0]} alt={property.imageAlt} /> */}
            </Box>

            <Box width="100%">
              <NavLink to={`/stay/${item.id}`}>
                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    fontSize="x-large"
                    as="h1"
                    // lineHeight="tight"
                    noOfLines={1}
                  >
                    {item.name}
                  </Box>

                  <Box>
                    {item.city}
                    <br></br>
                    <p>Pool</p>
                  </Box>
                </Box>
                <Box display="flex" ml="7" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        color={i < item.stars ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>

                <Box
                  ml="7"
                  alignItems="baseline"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Box
                      as="span"
                      ml="1"
                      color="gray.600"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      {item.rating.toFixed(1)}/5
                    </Box>
                    <Box
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
                  <Box>
                    <Box
                      p="5"
                      as="span"
                      ml="1"
                      color="black"
                      fontWeight="semibold"
                      fontSize="3xl"
                    >
                      ₹{item.price}
                      <br></br>
                      <Text
                        mr="0.5rem"
                        fontWeight="light"
                        float="right"
                        fontSize="sm"
                      >
                        {item.price + 500} total
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </NavLink>
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
