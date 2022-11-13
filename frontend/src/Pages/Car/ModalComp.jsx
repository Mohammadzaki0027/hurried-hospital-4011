import React from "react";

import { Box, Button, useDisclosure } from "@chakra-ui/react";

import Createtour from "./Createtour";
const ModalComp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Box m="1rem" textAlign={"center"}>
        <Button onClick={onOpen}>Create New Task</Button>
      </Box>
      <Createtour isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ModalComp;
