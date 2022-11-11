import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Sorting</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sorting</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Button bg={"#00355d"} _hover={"none"} color={"white"}>
                Price (Low to High)
              </Button>
            </FormControl>

            <FormControl>
              <Button bg={"#00355d"} _hover={"none"} color={"white"}>
                Rating
              </Button>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Filter;
