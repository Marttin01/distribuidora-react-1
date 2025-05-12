import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import MenuDerechoBtnUsuarios from "./MenuDerechoBtnUsuarios";


function MenuDerechoAdmin () {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
   
    return (
        <>
          <Button ref={btnRef} colorScheme='gray' onClick={onOpen}>
            Menu Admin
          </Button>
          <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay/>
            <DrawerContent bg={"gray.200"}>
              <DrawerCloseButton />
              <DrawerHeader>Admin panel</DrawerHeader>

              <DrawerBody>
                <Box w={"100%"}>
                  <MenuDerechoBtnUsuarios/>
                </Box>
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose} bg={"lightgray"}>
                  Cerrar menu
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
    )

}

export default MenuDerechoAdmin;