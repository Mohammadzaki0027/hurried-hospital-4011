import { Filter } from "./filter";
import { Box, Stack } from "@chakra-ui/react";
import { Hotel } from "./HotelList";
export const Stay = () => {
  return (
    <Box border="1px solid green" display="flex" maxW="100%">
      <Filter />
      <Hotel />
      <Stack width="30%"></Stack>
    </Box>
  );
};
