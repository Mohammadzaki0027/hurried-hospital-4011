import {
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Heading,
  Checkbox,
  Radio,
  SimpleGrid,
  Box,
  Center,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  RadioGroup,
  Show,
} from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";

export const Filter = ({ setQuery }) => {
  return (
    <Hide below="720px">
      <Stack maxW="30%">
        <Stack width="250px">
          <Heading as="h4" size="sm">
            Search by property name
          </Heading>
          <InputGroup margin="1rem">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="black.300" />}
            />
            <Input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="e.g. Marriott"
            />
          </InputGroup>
        </Stack>
        <hr></hr>
        <Heading as="h4" size="sm">
          Filter by
        </Heading>
        {/* ..........Popular Filters............. */}
        <Heading as="h6" size="xs">
          Popular filters
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Sea view
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Breakfast included
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Pool
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Hotel resort
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Hot tub
        </Checkbox>
        {/*.............. Price per night ..........*/}
        <Heading as="h6" size="xs">
          Price per night
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Less than ₹2,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          ₹2,000 to ₹4,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          ₹4,000 to ₹8,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          ₹8,000 to ₹11,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Greater than ₹11,000
        </Checkbox>
        {/*.............. Slider ..........*/}
        <Heading as="h6" size="xs">
          Price per night
        </Heading>
        <Slider
          size="md"
          width="80%"
          aria-label="slider-ex-1"
          defaultValue={100}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        {/*.............. Guest Rating ..........*/}
        <Heading as="h6" size="xs">
          Guest rating
        </Heading>
        <RadioGroup defaultValue="1">
          <Stack>
            <Radio
              size="md"
              name="1"
              value="1"
              colorScheme="blue"
              defaultChecked
            >
              Any
            </Radio>{" "}
            <Radio size="md" name="1" value="2" colorScheme="blue">
              Wonderfull 4.5+
            </Radio>{" "}
            <Radio size="md" name="1" value="3" colorScheme="blue">
              Very good 4+
            </Radio>{" "}
            <Radio size="md" name="1" value="4" colorScheme="blue">
              Good 3.5+
            </Radio>
          </Stack>
        </RadioGroup>
        {/*.............. Property class ..........*/}
        <Heading as="h6" size="xs">
          Property class
        </Heading>
        <SimpleGrid minChildWidth="20%" spacing="4px">
          <Box border="1px solid" borderRadius="10px" height="auto">
            <Center>
              1<StarIcon />
            </Center>
          </Box>

          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              2<StarIcon />
            </Center>
          </Box>
          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              3<StarIcon />
            </Center>
          </Box>
          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              4<StarIcon />
            </Center>
          </Box>
          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              5<StarIcon />
            </Center>
          </Box>
        </SimpleGrid>
        {/*.............. Payment type ..........*/}
        <Heading as="h6" size="xs">
          Payment type
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Fully refundable
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Reserve now, pay later
        </Checkbox>
        {/*.............. Property type ..........*/}
        <Heading as="h6" size="xs">
          Property type
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Hotel resort
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Villa
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Apartment
        </Checkbox>
      </Stack>
    </Hide>
  );
};

export const Filter2 = () => {
  return (
    <Show below="720px">
      <Stack maxW="30%">
        <Heading as="h4" size="sm">
          Filter by
        </Heading>
        {/* ..........Popular Filters............. */}
        <Heading as="h6" size="xs">
          Popular filters
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Sea view
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Breakfast included
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Pool
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Hotel resort
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Hot tub
        </Checkbox>
        {/*.............. Price per night ..........*/}
        <Heading as="h6" size="xs">
          Price per night
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Less than ₹2,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          ₹2,000 to ₹4,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          ₹4,000 to ₹8,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          ₹8,000 to ₹11,000
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Greater than ₹11,000
        </Checkbox>
        {/*.............. Slider ..........*/}
        <Heading as="h6" size="xs">
          Price per night
        </Heading>
        <Slider
          size="md"
          width="80%"
          aria-label="slider-ex-1"
          defaultValue={100}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        {/*.............. Guest Rating ..........*/}
        <Heading as="h6" size="xs">
          Guest rating
        </Heading>
        <RadioGroup defaultValue="1">
          <Stack>
            <Radio
              size="md"
              name="1"
              value="1"
              colorScheme="blue"
              defaultChecked
            >
              Any
            </Radio>{" "}
            <Radio size="md" name="1" value="2" colorScheme="blue">
              Wonderfull 4.5+
            </Radio>{" "}
            <Radio size="md" name="1" value="3" colorScheme="blue">
              Very good 4+
            </Radio>{" "}
            <Radio size="md" name="1" value="4" colorScheme="blue">
              Good 3.5+
            </Radio>
          </Stack>
        </RadioGroup>
        {/*.............. Property class ..........*/}
        <Heading as="h6" size="xs">
          Property class
        </Heading>
        <SimpleGrid minChildWidth="20%" spacing="4px">
          <Box border="1px solid" borderRadius="10px" height="auto">
            <Center>
              1<StarIcon />
            </Center>
          </Box>

          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              2<StarIcon />
            </Center>
          </Box>
          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              3<StarIcon />
            </Center>
          </Box>
          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              4<StarIcon />
            </Center>
          </Box>
          <Box border="1px solid" borderRadius="10px" height="40px">
            <Center>
              5<StarIcon />
            </Center>
          </Box>
        </SimpleGrid>
        {/*.............. Payment type ..........*/}
        <Heading as="h6" size="xs">
          Payment type
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Fully refundable
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Reserve now, pay later
        </Checkbox>
        {/*.............. Property type ..........*/}
        <Heading as="h6" size="xs">
          Property type
        </Heading>
        <Checkbox size="md" colorScheme="blue">
          Hotel resort
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Villa
        </Checkbox>
        <Checkbox size="md" colorScheme="blue">
          Apartment
        </Checkbox>
      </Stack>
    </Show>
  );
};
