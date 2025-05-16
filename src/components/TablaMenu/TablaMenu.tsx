import { 
  Tabs, 
  TabList, 
  Tab, 
  Flex, 
  Box, 
  Text, 
  Icon,
  VStack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FiHome, FiShoppingBag, FiHeart, FiMessageCircle, FiClock } from "react-icons/fi"
import { useState } from 'react';
import MenuPerfil from './MenuIzquierdo/MenuIzquierdoSesionado/MenuPerfil';
import MenuNoPerfil from './MenuIzquierdo/MenuIzquierdoNoSesionado/MenuNoPerfil';
import MenuDerechoAdmin from './MenuDerecho/MenuDerechoAdmin';

interface Props {
sesionado: boolean;
admin: boolean;
}

function TablaMenu ({sesionado, admin}: Props) {
const [modoOscuro, setModoOscuro] = useState(true);

const handleClick = () => {
  setModoOscuro(!modoOscuro)
}

return (
  <Tabs 
    align='end' 
    size='sm' 
    zIndex={"1000"} 
    position={"fixed"} 
    top={0} 
    right={0} 
    backgroundColor={"Menu"} 
    w={"100%"}
  >
    <TabList display={"flex"} justifyContent={"space-between"} alignItems={"center"} h="65px">
      <Tab 
        sx={{ 
          _selected: {boxShadow:"none", borderBottom:"none", background:"none"},
          height: "100%",
          padding: "0 10px"
        }}
      >
        {sesionado? <MenuPerfil/> : <MenuNoPerfil/>}
        {modoOscuro? (
          <MoonIcon ml={3} w={4} h={4} onClick={handleClick}/>
        ):(
          <SunIcon ml={3} w={4} h={4} onClick={handleClick}/>
        )}
      </Tab>


      <Flex 
        flex={1} 
        justifyContent={"center"} 
        alignItems={"center"} 
        gap={2}
        height="100%"
      >
        <Tab 
          display="flex" 
          gap={1.5} 
          alignItems="center"
          _hover={{ color: "gray.600" }}
          transition="all 0.2s"
          height="100%"
          fontSize="md"
          padding="0 12px"
        >
          <Icon as={FiHome} w={4} h={4} marginBottom="1px" />
          <Text>Inicio</Text>
        </Tab>

        <Tab 
          display="flex" 
          gap={1.5} 
          alignItems="center"
          _hover={{ color: "gray.600" }}
          transition="all 0.2s"
          height="100%"
          fontSize="md"
          padding="0 12px"
        >
          <Icon as={FiShoppingBag} w={4} h={4} marginBottom="1px" />
          <Text>Productos</Text>
        </Tab>

        <Box 
          bg={"white"} 
          px={3}
          py={1}
          pt={3}
          height="75%"
          display="flex"
          alignItems="center"
          borderColor={"gray.100"} 
          borderBottom={"0px solid"}
          _hover={{
            transform: "translateY(-1px)",
            transition: "transform 0.2s"
          }}
        >
          {(sesionado && !admin) &&  (
         <VStack spacing={1} align="start">
            <Flex align="center" gap={1.5} borderBottom={0}>
              <Icon as={FiClock} color="gray.500" w={3} h={3} marginBottom="1px" />
              <Text fontSize={"xs"} color={"gray.500"} mt={1}>
                Proxima entrega: 15/may/2025
              </Text>
            </Flex>
            <Flex align="center" gap={1.5}>
              <Icon as={FiClock} color="gray.500" w={3} h={3} marginBottom="1px" />
              <Text fontSize={"xs"} color={"gray.500"}>
                Límite: 15/may/2025
              </Text>
            </Flex>
          </VStack>
          )
          } 

        </Box>

        <Tab 
          display="flex" 
          gap={1.5} 
          alignItems="center"
          _hover={{ color: "gray.600" }}
          transition="all 0.2s"
          height="100%"
          fontSize="md"
          padding="0 12px"
        >
          <Icon as={FiHeart} w={4} h={4} marginBottom="1px" />
          <Text>Favoritos</Text>
        </Tab>

        <Tab 
          display="flex" 
          gap={1.5} 
          alignItems="center"
          _hover={{ color: "gray.600" }}
          transition="all 0.2s"
          height="100%"
          fontSize="md"
          padding="0 12px"
        >
          <Icon as={FiMessageCircle} w={4} h={4} marginBottom="1px" />
          <Text>Contacto</Text>
        </Tab>
      </Flex>

      {admin && <MenuDerechoAdmin/>}
    </TabList>
  </Tabs>
)
}

export default TablaMenu
