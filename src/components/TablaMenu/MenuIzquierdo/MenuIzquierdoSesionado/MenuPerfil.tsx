import React from "react"
import { 
    Avatar, 
    Box, 
    Button, 
    Card, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    Flex, 
    Stack, 
    Text, 
    useDisclosure,
    Icon,
    Divider
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { FiUser, FiGift, FiHelpCircle, FiMessageCircle, FiClipboard, FiPhoneCall } from "react-icons/fi"
import MisDatosMenuPerfilBoton from "./MisDatosMenuPerfil"
import MisPedidosMenuPerfilBoton from "./MisPedidosMenuPerfil c"

function MenuPerfil() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

    return (
        <>
            <Button 
                ref={btnRef} 
                colorScheme='gray' 
                onClick={onOpen}
                size="sm"
                _hover={{ bg: 'gray.300' }}
                transition="all 0.2s"
            >
                <HamburgerIcon boxSize={5} />
            </Button>
            
            <Drawer 
                isOpen={isOpen} 
                placement='start' 
                onClose={onClose} 
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="gray.50">
                    <DrawerCloseButton />
                    <DrawerHeader 
                        borderBottom="1px" 
                        borderColor="gray.200"
                        bg="white"
                    >
                        <Flex align="center" gap={2}>
                            <Icon as={FiUser} />
                            <Text>Mi cuenta</Text>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody p={4}>
                        <Card 
                            variant="outline" 
                            w="100%" 
                            h="fit-content"
                            bg="white"
                            p={4}
                            shadow="sm"
                            borderRadius="lg"
                        >
                            <Flex align="center">
                                <Avatar 
                                    src='https://bit.ly/broken-link' 
                                    size="xl"
                                    border="3px solid"
                                    borderColor="gray.200"
                                />
                                <Stack direction='column' ml={6} spacing={1}>
                                    <Text fontSize="lg" fontWeight="bold">Cliente</Text>
                                    <Text color="gray.600">Dirección</Text>
                                </Stack>
                            </Flex>
                        </Card>

                        <Box h={8} />

                        <Card 
                            variant='outline' 
                            w="100%" 
                            bg="white"
                            p={4}
                            shadow="sm"
                            borderRadius="lg"
                        >
                            <Flex justify='space-around' align="center" w='100%'>
                                <MisDatosMenuPerfilBoton />
                                <Divider orientation='vertical' h="50px" />
                                <MisPedidosMenuPerfilBoton/>
                            </Flex>
                        </Card>

                        <Box h={8} />

                        <Card 
                            variant="outline"
                            p={4} 
                            w="100%"
                            bg="white"
                            shadow="sm"
                            borderRadius="lg"
                        >
                            <Stack spacing={4}>
                                <Flex 
                                    align="center" 
                                    gap={3} 
                                    _hover={{ color: "gray.600", cursor: "pointer" }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={FiGift} />
                                    <Text>Promociones</Text>
                                </Flex>
                                <Flex 
                                    align="center" 
                                    gap={3}
                                    _hover={{ color: "gray.600", cursor: "pointer" }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={FiHelpCircle} />
                                    <Text>Centro de Ayuda</Text>
                                </Flex>
                                <Flex 
                                    align="center" 
                                    gap={3}
                                    _hover={{ color: "gray.600", cursor: "pointer" }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={FiMessageCircle} />
                                    <Text>Mensajería</Text>
                                </Flex>
                                <Flex 
                                    align="center" 
                                    gap={3}
                                    _hover={{ color: "gray.600", cursor: "pointer" }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={FiClipboard} />
                                    <Text>Encuesta</Text>
                                </Flex>
                                <Flex 
                                    align="center" 
                                    gap={3}
                                    _hover={{ color: "gray.600", cursor: "pointer" }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={FiPhoneCall} />
                                    <Text>Contacto</Text>
                                </Flex>
                            </Stack>
                        </Card>
                    </DrawerBody>

                    <DrawerFooter 
                        borderTop="1px" 
                        borderColor="gray.200"
                        bg="white"
                    >
                        <Text fontSize="sm" color="gray.500">
                            © 2025 Martin
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MenuPerfil
