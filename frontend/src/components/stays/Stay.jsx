import { Filter } from "./filter";
import { Box, Center } from "@chakra-ui/react";
import { Hotel } from "./HotelList";
import { useState } from "react";
import { SideImage } from "./SideImage";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
export const Stay = () => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/stay").then((r) => {
      setData(r.data.filter((item) => item.city.includes(query || "Mumbai")));
    });
  }, [query]);
  return (
    <>
      <Navbar />
      <Center width="90%" margin="auto">
        <Box display="flex" justifyContent="space-between" maxW="100%">
          <Filter setQuery={setQuery} />
          <Hotel prop={data} />
          <SideImage />
        </Box>
      </Center>
      <Footer />
    </>
  );
};

