import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
const Carpayment = () => {
  const navigate=useNavigate();
  const toast = useToast();
  const [price, setPrice] = React.useState("");
  const [paymentdata, setPaymentdata] = React.useState({
    name: "",
    cardno: "",
    cvv: "",
  });
  let data = localStorage.getItem("cartitem");
  data = JSON.parse(data);
  const handelchange = (e) => {
    let { name, value } = e.target;
    setPaymentdata({ ...paymentdata, [name]: value });
  };

  const handelsubmit = () => {
    if (
      paymentdata.name !== "" &&
      paymentdata.cvv !== "" &&
      paymentdata.cardno != ""
    ) {
      fetchpayment();
    } else {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",

        render: () => (
          <Box color="white" p={3} bg="red">
            Bad crendential
          </Box>
        ),
      });
    }
  };
  const fetchpayment = () => {
    axios
      .post("https://way-to-globe-unit-6.onrender.com/carpayment", paymentdata)
      .then((r) => {
        console.log(r);
        toast({
          title: "Sucessfully Book.",
          description: "We've  sucessfully booked .",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        navigate('/')
        return r;
      })
      .then((r) => {})
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    if (data) {
      setPrice(data.price);
    }
  }, [price]);

  return (
    <>
      <Navbar />
      <Box
        width={["100%", "100%", "80%", "65%"]}
        border={"1px solid teal"}
        height={"auto"}
        margin={"auto"}
        bg={"grey"}
        boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
      >
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Payment Page</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Enjoy Your Drive Pay {price}
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Enter Card No</FormLabel>
                  <Input
                    type="text"
                    pattern={"0-9"}
                    maxlength={"16"}
                    name="cardno"
                    value={paymentdata.cardno}
                    onChange={handelchange}
                    required
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Enter the Name on Card</FormLabel>
                  <Input
                    type="text"
                    onChange={handelchange}
                    name="name"
                    value={paymentdata.name}
                    required
                  />
                </FormControl>

                <FormControl id="cvv" isRequired>
                  <FormLabel>Enter the cvv</FormLabel>
                  <Input
                    type="password"
                    minlength="3"
                    maxlength="3"
                    name="cvv"
                    value={paymentdata.cvv}
                    onChange={handelchange}
                    required
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handelsubmit}
                  >
                    Pay Now
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Carpayment;
