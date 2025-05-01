import React from "react"
import { Avatar, Box, Button, Card, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import MisDatosMenuPerfilBoton from "./MisDatosMenuPerfil"
import MisPedidosMenuPerfilBoton from "./MisPedidosMenuPerfil c"



function MenuPerfil () {

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
          <DrawerHeader>Mi cuenta</DrawerHeader>

          <DrawerBody >
            <Card variant={"unstyled"} w={"fit-content"} h={"fit-content"}>
                <Flex>
                    <Stack direction='row'>
                        <Avatar src='https://bit.ly/broken-link' size={"xl"}/>
                    </Stack>
                    <Stack direction='column' marginLeft={8} gap={0}>
                        <Text >Cliente </Text>
                        <Text >Direccion </Text>
                    </Stack>
                </Flex>
            </Card>

            <Box h={12}></Box>

            <Card variant='unstyled' w={"100%"} h='fit-content'>
                <Flex direction='row' justifyContent='center' alignItems={"center"} w='100%'>
                    <MisDatosMenuPerfilBoton />
                    <Text ml={10}></Text>
                    <MisPedidosMenuPerfilBoton/>
                </Flex>
            </Card>

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

export default MenuPerfil