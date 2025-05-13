import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";


function CargarProductos() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mouseEncima, setMouseEncima] = useState<boolean>(true);
    
    const handleMouseOver = () => {
        setMouseEncima(true)
    }

    const handleMouseLeave = () => {
        setMouseEncima(false)
    }

    return (
      <>
        <MenuItem onClick={onOpen} mt={-4} sx={{ backgroundColor: "gray.200 !important"}} _highlighted={{ bg: "gray.200 !important" }}> <Flex  position={"relative"} alignItems={"center"}><Icon className="icon" left={mouseEncima?"16px":"0px"} position={"absolute"} transition="margin-left 0.2s ease-in-out" transitionDelay="0.1s" as={ArrowForwardIcon}/>
        <Text mt={3} ml={9} onMouseEnter={handleMouseOver} _hover={{fontColor:"gray.600"}} onMouseLeave={handleMouseLeave}>Cargar productos</Text></Flex></MenuItem>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>ESto es un texto de manera de ejemplo</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default CargarProductos;