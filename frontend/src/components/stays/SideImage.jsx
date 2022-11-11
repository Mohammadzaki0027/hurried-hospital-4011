import { Box, Stack, Image, Hide } from "@chakra-ui/react";

export const SideImage = () => {
  return (
    <Hide below="720px">
      <Stack width="30%" float="right">
        <Box p="2">
          <Image
            mb="5"
            src="https://tpc.googlesyndication.com/simgad/680227074443010515?"
          ></Image>
          <Image src="https://tpc.googlesyndication.com/simgad/17447823249981941085?"></Image>
        </Box>
      </Stack>
    </Hide>
  );
};
