import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, useDisclosure, Stack , Card} from "@chakra-ui/react"
import React from "react"
import RegistrarseMenuPerfil from "./RegistrarseMenuPerfil"


function MenuNoPerfil(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    return (
        <>
            <Button ref={btnRef} colorScheme='gray' onClick={onOpen}>
                    <HamburgerIcon boxSize={5} />
                  </Button>
                  <Drawer isOpen={isOpen} placement='start' onClose={onClose} finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Menu Principal</DrawerHeader>
            
                      <DrawerBody >
            
                        <Box h={12}></Box>

                            <RegistrarseMenuPerfil></RegistrarseMenuPerfil>
            
                        <Box h={12}></Box>
            
                        <Card border={"none"}  p={4} w={"100%"} boxShadow={"none"}>
                            <Stack direction={"column"} align={"start"} spacing={2}>
                                <Text>Promociones</Text>
                                <Text>Centro de Ayuda</Text>
                                <Text>Mensajeria</Text>
                                <Text>Encuesta</Text>
                                <Text>Contacto</Text>
                            </Stack>
                        </Card>
                      </DrawerBody>
            
                      <DrawerFooter>
            
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MenuNoPerfil