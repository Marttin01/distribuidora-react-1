import { 
  Box, 
  Image, 
  Text, 
  VStack, 
  Heading, 
  Icon,
  Circle
} from "@chakra-ui/react";
import { FiShoppingBag } from 'react-icons/fi';

interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  imgSrc: string;
}

interface Props {
  producto: Producto;
}

function CardCategoriasProductoMainProducto({ producto }: Props) {
  return (
      <VStack 
          spacing={3}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="full"
          shadow="sm"
          maxW="280px"
          h="400px"
          justify="space-between"
          position="relative"
          overflow="hidden"
          transition="all 0.3s ease"
          p={4}
          _hover={{
              shadow: 'lg',
              transform: 'translateY(-5px)',
          }}
      >
          {/* Contenedor de imagen circular */}
          <Circle 
              size="180px"
              overflow="hidden"
              bg="gray.50"
          >
              <Image
                  src={producto.imgSrc}
                  alt={producto.nombre}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{
                      transform: 'scale(1.08)'
                  }}
              />
          </Circle>

          <VStack 
              spacing={2} 
              align="center" 
              w="100%" 
              px={6}
              flex={1}
          >
              <Heading 
                  size="sm" 
                  noOfLines={1}
                  textAlign="center"
                  fontWeight="600"
                  color="gray.700"
              >
                  {producto.nombre}
              </Heading>
              
              <Text 
                  color="gray.500" 
                  fontSize="sm"
                  noOfLines={2}
                  textAlign="center"
              >
                  {producto.descripcion}
              </Text>

              <Text 
                  fontSize="xl" 
                  fontWeight="bold" 
                  color="gray.700"
              >
                  ${producto.precio.toLocaleString()}
              </Text>

              {/* Botón circular más grande */}
              <Circle
                  as="button"
                  size="50px"
                  bg="gray.100"
                  transition="all 0.2s"
                  _hover={{
                      bg: 'gray.200',
                      transform: 'scale(1.1)',
                  }}
                  _active={{
                      bg: 'gray.300',
                      transform: 'scale(0.95)',
                  }}
              >
                  <Icon 
                      as={FiShoppingBag} 
                      boxSize={6}
                      color="gray.700"
                  />
              </Circle>
          </VStack>

          {/* Efecto de borde decorativo */}
          <Box
              position="absolute"
              top="-2px"
              left="-2px"
              right="-2px"
              bottom="-2px"
              borderRadius="full"
              borderWidth="2px"
              borderColor="gray.200"
              pointerEvents="none"
          />
      </VStack>
  );
}

export default CardCategoriasProductoMainProducto;
