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
const Createtour = ({ isOpen, onClose, handelcity }) => {
  const [from, setFrom] = React.useState("");

  const [to, setTo] = React.useState("");
  const handelchangeto = (e) => {
    setTo(e.target.value);
  };

  const handelchangefrom = (e) => {
    setFrom(e.target.value);
  };

  const handelsubmit = () => {
    handelcity(to, from);
  };
  return (
    <div>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Destinaton</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>From</FormLabel>
              <Input
                type="text"
                placeholder="From"
                onChange={handelchangefrom}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Enter City</FormLabel>
              <Input type="text" placeholder="TO" onChange={handelchangeto} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handelsubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Createtour;
