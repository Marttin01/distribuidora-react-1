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
  Avatar,
  FormControl,
  FormLabel,
  Input,
  Box,
  IconButton,
  useToast
} from '@chakra-ui/react'
import { FiCamera, FiSave } from 'react-icons/fi'
import { useRef, useState } from 'react'

function MisDatosMenuPerfilBoton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const toast = useToast()
  
  const [userData, setUserData] = useState({
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      telefono: '1234567890',
      direccion: 'Calle Ejemplo 123'
  })
  
  const [avatarUrl, setAvatarUrl] = useState('https://bit.ly/sage-adebayo')

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
          const url = URL.createObjectURL(file)
          setAvatarUrl(url)
          toast({
              title: 'Imagen cargada',
              description: "La imagen se actualizó correctamente",
              status: 'success',
              duration: 3000,
              isClosable: true,
          })
      }
  }

  const handleSave = () => {
      toast({
          title: 'Datos guardados',
          description: "Tus datos se actualizaron correctamente",
          status: 'success',
          duration: 3000,
          isClosable: true,
      })
      onClose()
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
              Mis datos
          </Button>

          <Modal 
              isOpen={isOpen} 
              onClose={onClose} 
              size="md"
              scrollBehavior="inside" // Esto habilita el scroll dentro del modal
              isCentered // Esto centra el modal en la pantalla
          >
              <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)"/>
              <ModalContent 
                  bg="white" 
                  borderRadius="20px"
                  shadow="xl"
                  maxH="90vh" // Altura máxima del 90% de la ventana
                  my="auto" // Margen automático arriba y abajo
              >
                  <ModalHeader 
                      borderBottom="1px solid" 
                      borderColor="gray.200"
                      pb={4}
                      position="sticky" // Header fijo
                      top={0}
                      bg="white"
                      zIndex={1}
                      borderTopRadius="20px"
                  >
                      Mi Perfil
                      <ModalCloseButton />
                  </ModalHeader>

                  <ModalBody py={6}>
                      <VStack spacing={6}>
                          <Box position="relative">
                              <Avatar 
                                  size="2xl" 
                                  src={avatarUrl}
                                  border="3px solid white"
                                  shadow="lg"
                              />
                              <IconButton
                                  aria-label="Cambiar foto"
                                  icon={<FiCamera />}
                                  position="absolute"
                                  bottom={0}
                                  right={0}
                                  rounded="full"
                                  bg="white"
                                  shadow="md"
                                  size="sm"
                                  onClick={() => fileInputRef.current?.click()}
                              />
                              <Input 
                                  type="file"
                                  accept="image/*"
                                  ref={fileInputRef}
                                  display="none"
                                  onChange={handleFileUpload}
                              />
                          </Box>

                          <VStack spacing={4} w="100%">
                              <FormControl>
                                  <FormLabel fontSize="sm" color="gray.600">Nombre</FormLabel>
                                  <Input 
                                      value={userData.nombre}
                                      onChange={(e) => setUserData({...userData, nombre: e.target.value})}
                                      bg="gray.50"
                                      border="1px solid"
                                      borderColor="gray.200"
                                      _hover={{ borderColor: 'gray.300' }}
                                      _focus={{ borderColor: 'gray.400', shadow: 'sm' }}
                                      rounded="full"
                                  />
                              </FormControl>

                              <FormControl>
                                  <FormLabel fontSize="sm" color="gray.600">Email</FormLabel>
                                  <Input 
                                      value={userData.email}
                                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                                      bg="gray.50"
                                      border="1px solid"
                                      borderColor="gray.200"
                                      _hover={{ borderColor: 'gray.300' }}
                                      _focus={{ borderColor: 'gray.400', shadow: 'sm' }}
                                      rounded="full"
                                  />
                              </FormControl>

                              <FormControl>
                                  <FormLabel fontSize="sm" color="gray.600">Teléfono</FormLabel>
                                  <Input 
                                      value={userData.telefono}
                                      onChange={(e) => setUserData({...userData, telefono: e.target.value})}
                                      bg="gray.50"
                                      border="1px solid"
                                      borderColor="gray.200"
                                      _hover={{ borderColor: 'gray.300' }}
                                      _focus={{ borderColor: 'gray.400', shadow: 'sm' }}
                                      rounded="full"
                                  />
                              </FormControl>

                              <FormControl>
                                  <FormLabel fontSize="sm" color="gray.600">Dirección</FormLabel>
                                  <Input 
                                      value={userData.direccion}
                                      onChange={(e) => setUserData({...userData, direccion: e.target.value})}
                                      bg="gray.50"
                                      border="1px solid"
                                      borderColor="gray.200"
                                      _hover={{ borderColor: 'gray.300' }}
                                      _focus={{ borderColor: 'gray.400', shadow: 'sm' }}
                                      rounded="full"
                                  />
                              </FormControl>
                          </VStack>
                      </VStack>
                  </ModalBody>

                  <ModalFooter 
                      borderTop="1px solid" 
                      borderColor="gray.200"
                      pt={4}
                      position="sticky" // Footer fijo
                      bottom={0}
                      bg="white"
                      borderBottomRadius="20px"
                  >
                      <Button
                          onClick={onClose}
                          mr={3}
                          variant="ghost"
                          rounded="full"
                          _hover={{ bg: 'gray.100' }}
                      >
                          Cancelar
                      </Button>
                      <Button
                          onClick={handleSave}
                          bg="black"
                          color="white"
                          rounded="full"
                          px={8}
                          _hover={{ bg: 'gray.800' }}
                          leftIcon={<FiSave />}
                      >
                          Guardar
                      </Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
      </>
  )
}

export default MisDatosMenuPerfilBoton
