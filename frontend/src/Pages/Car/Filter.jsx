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
const Filter = ({handlesortprice}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}  bg={"#00355d"} _hover={"none"} color={"white"}>Sorting</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sorting</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Button bg={"#00355d"} _hover={"none"} color={"white"} onClick={()=>handlesortprice("price")}>
                Price (Low to High)
              </Button>
            </FormControl>

            <FormControl>
              <Button bg={"#00355d"} _hover={"none"} color={"white"} onClick={()=>handlesortprice("rating")}>
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
