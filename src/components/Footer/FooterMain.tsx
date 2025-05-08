import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function FooterMain () {
  return (
    <Box bg="#F7F7F7" py={8} mt={16}>
    <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" color="#333">
          Tu Empresa
        </Text>
        <Text fontSize="sm" color="#666">
          &copy; {new Date().getFullYear()} Todos los derechos reservados
        </Text>
      </Box>
        <Box>
        <Text fontSize="lg" fontWeight="bold" color="#333">
          Enlaces útiles
        </Text>
        <Link href="#" fontSize="sm" color="#666" _hover={{ color: "#333" }} display="block" mb={4}>
          Acerca de nosotros
        </Link>
        <Link href="#" fontSize="sm" color="#666" _hover={{ color: "#333" }} display="block" mb={4}>
          Contacto
        </Link>
        <Link href="#" fontSize="sm" color="#666" _hover={{ color: "#333" }} display="block">
          FAQ
        </Link>
        </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" color="#333">
          Síguenos
        </Text>
        <Flex>
          <Link href="#" mx={2}>
            <Icon as={FaFacebookF} w={6} h={6} color="#666" _hover={{ color: "#333" }} />
          </Link>
          <Link href="#" mx={2}>
            <Icon as={FaTwitter} w={6} h={6} color="#666" _hover={{ color: "#333" }} />
          </Link>
          <Link href="#" mx={2}>
            <Icon as={FaInstagram} w={6} h={6} color="#666" _hover={{ color: "#333" }} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  </Box>
  );
};

export default FooterMain;