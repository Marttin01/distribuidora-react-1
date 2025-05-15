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
  VStack,
  Box,
  Text,
  Flex,
  Badge,
  Divider,
  Icon
} from '@chakra-ui/react'
import { FiPackage, FiClock, FiCheck, FiTruck } from 'react-icons/fi'
import { useState } from 'react'

// Tipo para los pedidos
interface Pedido {
  id: string;
  fecha: string;
  estado: 'completado' | 'en proceso' | 'enviado';
  total: number;
  productos: {
      nombre: string;
      cantidad: number;
      precio: number;
  }[];
}

function MisPedidosMenuPerfilBoton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  // Datos de ejemplo de pedidos
  const [pedidos] = useState<Pedido[]>([
      {
          id: "PED-001",
          fecha: "15/05/2024",
          estado: "completado",
          total: 12000,
          productos: [
              { nombre: "Coca Cola 500ml x6", cantidad: 2, precio: 2000 },
              { nombre: "Sprite 1L x6", cantidad: 1, precio: 8000 }
          ]
      },
      {
          id: "PED-002",
          fecha: "14/05/2024",
          estado: "enviado",
          total: 16000,
          productos: [
              { nombre: "Fanta 2L x6", cantidad: 2, precio: 8000 },
              { nombre: "Agua SmartWater 500ml x6", cantidad: 2, precio: 4000 }
          ]
      },
      {
          id: "PED-003",
          fecha: "13/05/2024",
          estado: "en proceso",
          total: 10000,
          productos: [
              { nombre: "Monster Energy x6", cantidad: 1, precio: 10000 }
          ]
      }
  ])

  // Función para obtener el color del estado
  const getEstadoColor = (estado: string) => {
      switch (estado) {
          case 'completado': return 'green';
          case 'en proceso': return 'orange';
          case 'enviado': return 'blue';
          default: return 'gray';
      }
  }

  // Función para obtener el icono del estado
  const getEstadoIcon = (estado: string) => {
      switch (estado) {
          case 'completado': return FiCheck;
          case 'en proceso': return FiClock;
          case 'enviado': return FiTruck;
          default: return FiPackage;
      }
  }

  return (
      <>
          <Button 
              onClick={onOpen}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ bg: 'gray.50' }}
          >
              Mis Pedidos
          </Button>

          <Modal 
              isOpen={isOpen} 
              onClose={onClose} 
              size="lg"
              scrollBehavior="inside"
              isCentered
          >
              <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)"/>
              <ModalContent 
                  bg="white" 
                  borderRadius="20px"
                  shadow="xl"
                  maxH="90vh"
              >
                  <ModalHeader 
                      borderBottom="1px solid" 
                      borderColor="gray.200"
                      pb={4}
                      position="sticky"
                      top={0}
                      bg="white"
                      zIndex={1}
                      borderTopRadius="20px"
                  >
                      Historial de Pedidos
                      <ModalCloseButton />
                  </ModalHeader>

                  <ModalBody py={6}>
                      <VStack spacing={4} align="stretch">
                          {pedidos.map((pedido) => (
                              <Box
                                  key={pedido.id}
                                  bg="gray.50"
                                  p={4}
                                  borderRadius="xl"
                                  border="1px solid"
                                  borderColor="gray.200"
                                  _hover={{ shadow: 'md' }}
                                  transition="all 0.2s"
                              >
                                  <Flex justify="space-between" align="center" mb={3}>
                                      <Flex align="center" gap={2}>
                                          <Icon 
                                              as={getEstadoIcon(pedido.estado)} 
                                              color={`${getEstadoColor(pedido.estado)}.500`}
                                          />
                                          <Text fontWeight="bold">Pedido {pedido.id}</Text>
                                      </Flex>
                                      <Badge 
                                          colorScheme={getEstadoColor(pedido.estado)}
                                          borderRadius="full"
                                          px={3}
                                          py={1}
                                      >
                                          {pedido.estado}
                                      </Badge>
                                  </Flex>

                                  <Text color="gray.600" fontSize="sm" mb={3}>
                                      Fecha: {pedido.fecha}
                                  </Text>

                                  <Divider my={2} />

                                  <VStack align="stretch" spacing={2} mt={3}>
                                      {pedido.productos.map((producto, index) => (
                                          <Flex 
                                              key={index} 
                                              justify="space-between"
                                              fontSize="sm"
                                          >
                                              <Text>{producto.nombre} x{producto.cantidad}</Text>
                                              <Text fontWeight="medium">
                                                  ${producto.precio.toLocaleString()}
                                              </Text>
                                          </Flex>
                                      ))}
                                  </VStack>

                                  <Divider my={2} />

                                  <Flex justify="space-between" mt={3}>
                                      <Text fontWeight="bold">Total</Text>
                                      <Text fontWeight="bold">
                                          ${pedido.total.toLocaleString()}
                                      </Text>
                                  </Flex>
                              </Box>
                          ))}
                      </VStack>
                  </ModalBody>

                  <ModalFooter 
                      borderTop="1px solid" 
                      borderColor="gray.200"
                      pt={4}
                      position="sticky"
                      bottom={0}
                      bg="white"
                      borderBottomRadius="20px"
                  >
                      <Button
                          onClick={onClose}
                          bg="black"
                          color="white"
                          rounded="full"
                          px={8}
                          _hover={{ bg: 'gray.800' }}
                      >
                          Cerrar
                      </Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
      </>
  )
}

export default MisPedidosMenuPerfilBoton
