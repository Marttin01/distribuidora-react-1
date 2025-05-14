import { 
  Box, 
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  useDisclosure,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Divider,
  Icon,
  Text
} from "@chakra-ui/react";
import { useRef } from "react";
import { FiUsers, FiShoppingBag, FiDollarSign, FiActivity } from 'react-icons/fi';
import MenuDerechoBotones from "./MenuDerechoBotones";

function MenuDerechoAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
 
  return (
      <>
          <Button 
              ref={btnRef} 
              colorScheme='gray' 
              onClick={onOpen}
              leftIcon={<Icon as={FiUsers} />}
          >
              Menu Admin
          </Button>
          <Drawer 
              isOpen={isOpen} 
              placement='right' 
              onClose={onClose} 
              finalFocusRef={btnRef}
              size="md"
          >
              <DrawerOverlay/>
              <DrawerContent bg={"gray.200"}>
                  <DrawerCloseButton />
                  <DrawerHeader 
                      backgroundColor={"white"} 
                      borderBottomWidth="1px"
                      shadow="sm"
                  >
                      <Flex align="center" gap={2}>
                          <Icon as={FiUsers} />
                          <Text>Admin Panel</Text>
                      </Flex>
                  </DrawerHeader>

                  <DrawerBody padding={4} pl={0} pr={0}>
                      {/* Dashboard Stats */}
                      <StatGroup 
                          bg="white" 
                          p={4} 
                          borderRadius="none" 
                          shadow="sm"
                          mb={4}
                      >

                          <Stat>
                              <StatLabel>Ventas Totales</StatLabel>
                              <StatNumber>$45,000</StatNumber>
                          </Stat>
                          <Stat>
                              <StatLabel>Usuarios</StatLabel>
                              <StatNumber>150</StatNumber>
                          </Stat>
                          <Stat>
                              <StatLabel>Productos</StatLabel>
                              <StatNumber>89</StatNumber>
                          </Stat>

                                              </StatGroup>

                      <Divider my={4} />

                      {/* Quick Actions */}
                      <Box bg="white" p={4} borderRadius="none" shadow="sm" mb={4}>
                          <Text fontWeight="bold" mb={3}>Acciones Rápidas</Text>
                          <Flex gap={2} flexWrap="wrap">
                              <Button leftIcon={<Icon as={FiShoppingBag} />} size="sm">
                                  Nuevo Producto
                              </Button>
                              <Button leftIcon={<Icon as={FiDollarSign} />} size="sm">
                                  Nueva Venta
                              </Button>
                              <Button leftIcon={<Icon as={FiActivity} />} size="sm">
                                  Ver Reportes
                              </Button>
                          </Flex>
                      </Box>

                      {/* Menu Buttons */}
                      <Box w={"100%"} bg="gray.200" borderRadius="lg" shadow="sm" pl={0}>
                          <MenuDerechoBotones/>
                      </Box>
                  </DrawerBody>

                  <DrawerFooter borderTopWidth="none" bg="white" mt={0}>
                      <Text fontSize="sm" color="gray.500">
                          © 2025 Martin Admin Panel
                      </Text>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
      </>
  )
}

export default MenuDerechoAdmin;
