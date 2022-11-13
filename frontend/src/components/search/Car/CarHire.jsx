import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarHire = () => {
  let [leave, setLeave] = useState("");
  let [pick, setPick] = useState("");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const handleSearch = () => {
    leave = leave.toLocaleLowerCase();

    if (leave !== "" && pick !== "") {
      navigate("/car");
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <>
      {showAlert && (
        <Box
          style={{
            position: "sticky",
            top: "12px",
            zIndex: "10",
            width: "40%",
            margin: "auto",
          }}
        >
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>Fill the correct City</AlertDescription>
          </Alert>
        </Box>
      )}

      <Stack mt=".7rem">
        <Box display="flex" gap={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<IoLocationSharp size={22} color="#343b53" />}
            />
            <Input
              type="text"
              placeholder="Pick-up"
              onChange={(e) => setPick(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<IoLocationSharp size={22} color="#343b53" />}
            />
            <Input
              type="text"
              placeholder="Same as pick-up"
              onChange={(e) => setLeave(e.target.value)}
            />
          </InputGroup>
        </Box>
        {/* <Stack direction={['column','column','row','row']}> */}
        <Box display={["block", "block", "flex", "flex"]} gap={4}>
          <InputGroup gap={2}>
            <Input type="date" />
            <Input type="time" aria-label="Time" placeholder="Time" />
          </InputGroup>
          <InputGroup gap={2}>
            <Input type="date" />
            <Input type="time" aria-label="Time" placeholder="Time" />
          </InputGroup>
        </Box>
        {/* </Stack> */}
      </Stack>
      <VStack mt="1.7rem">
        <Button
          colorScheme="none"
          color="white"
          _hover={{ bg: "#2c4fac" }}
          bg="#3763d8"
          px="4rem"
          py="1.4rem"
          onClick={handleSearch}
        >
          Search
        </Button>
      </VStack>
    </>
  );
};

export default CarHire;
