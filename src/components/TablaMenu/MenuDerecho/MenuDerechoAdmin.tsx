import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";


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
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Admin panel</DrawerHeader>

              <DrawerBody>
                
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
    )

}

export default MenuDerechoAdmin;