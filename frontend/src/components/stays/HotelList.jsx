import { Stack, Box, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const Hotel = () => {
  const property = {
    id: "412c0468-3637-4563-a111-6cc49c271d16",
    name: "Hotel Taj",
    country: "India",
    city: "Mumbai",
    price: 340,
    images: [
      "https://media.gettyimages.com/photos/the-taj-mahal-palace-hotel-at-dusk-picture-id520443060?k=20&m=520443060&s=612x612&w=0&h=PaGOxrU9P1yUCXeFGrPFkkcXl7aLdOAG2pzpqPDJl6g=",
      "https://media.gettyimages.com/photos/taj-mahal-hotel-bombay-picture-id521916998?k=20&m=521916998&s=612x612&w=0&h=COz7tCsUbUVDXefmtMON3sKMsDYq7o0XORWmfDKO7-M=",
      "https://media.gettyimages.com/photos/the-taj-mahal-palace-hotel-picture-id989771498?k=20&m=989771498&s=612x612&w=0&h=rKnbobhJte0htD8rGUGFLErOD3eD4BcRk8azGzqaFG8=",
      "https://media.gettyimages.com/photos/diners-enjoying-their-meals-at-machan-coffee-shop-taj-mahal-hotel-new-picture-id90565443?k=20&m=90565443&s=612x612&w=0&h=3RXZseNan-PdYBHUHNl-vrE1gQDwpHRELqovuq5FWcI=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-07-08T23:13:40.977Z",
    stars: 3,
    rating: 4.2260803038065373,
    description:
      "Amet quas voluptas. Cum excepturi voluptatem alias eos eaque eveniet. Quae at ipsam excepturi reprehenderit. Quisquam consequatur et possimus aspernatur omnis velit facere pariatur.",
  };
  return (
    <Stack border="1px solid" maxW="100%" p="2">
      <Box
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        maxH="220px"
      >
        <Box maxW="30%">
          <Box>
            <Carousel infiniteLoop>
              {property.images.map((slide) => {
                return (
                  <Box>
                    <Image
                      key={slide}
                      h="220px"
                      src={slide}
                      width="auto"
                      alt={property.imageAlt}
                    />
                  </Box>
                );
              })}
            </Carousel>
          </Box>
          {/* <Image minH="100%" src={property.images[0]} alt={property.imageAlt} /> */}
        </Box>

        <Box width="100%">
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              fontSize="x-large"
              as="h1"
              // lineHeight="tight"
              noOfLines={1}
            >
              {property.name}
            </Box>

            <Box>
              {property.city}
              <br></br>
              <p>Pool</p>
            </Box>
          </Box>
          <Box display="flex" ml="7" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.stars ? "teal.500" : "gray.300"}
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
                {property.rating.toFixed(1)}/5
              </Box>
              <Box
                as="span"
                ml="1"
                color="gray.600"
                fontWeight="bold"
                fontSize="md"
              >
                {property.rating.toFixed(1) > 4.5
                  ? "Wonderfull"
                  : property.rating.toFixed(1) > 4
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
                ₹{property.price}
                <br></br>
                <Text
                  mr="0.5rem"
                  fontWeight="light"
                  float="right"
                  fontSize="sm"
                >
                  {property.price + 500} total
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
