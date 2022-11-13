import * as React from "react";
import {Box,Input} from "@chakra-ui/react";
// import TextField from "@mui/material/TextField";

export default function FullWidthTextField({ text, handle, name }) {
  return (
    <Box
      sx={{
        width: 400,
        maxWidth: "100%",
      }}
    >
      <Input
      padding={"5px"}
        fullWidth
        placeholder={text}
        id="fullWidth"
        name={name}
        onChange={handle}
      />
    </Box>
  );
}