import { Tabs, TabList, Tab, Flex, Button, Box, Text,  } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
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

    <Tabs align='end' size='lg' zIndex={"1000"} position={"fixed"} top={0} right={0} backgroundColor={"Menu"} w={"100%"}>

      <TabList display={"flex"} justifyContent={"space-between"} alignItems={"center"}>

        <Tab sx={{ _selected: {boxShadow:"none", borderBottom:"none", background:"none" }}}>
          {sesionado? <MenuPerfil/> : <MenuNoPerfil/>}
          {modoOscuro? (<MoonIcon marginLeft={6} onClick={handleClick}/>):(<SunIcon marginLeft={6} onClick={handleClick}/>)}
        </Tab>

        <Flex flex={1} justifyContent={"center"}>
          <Tab>Inicio</Tab>
          <Tab>Productos</Tab>
          {/* <Tab>Promos</Tab> */}          
          <Box bg={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} p={2} mb={"-6px"} borderRadius={"md"} border={"3px solid"} borderColor={"gray.100"} borderTop={0} borderLeft={0} borderRight={0} >
            <Text fontSize={"xs"} color={"gray.500"}>Proxima entrega: 15/may/2025</Text>
            <Text fontSize={"xs"} color={"gray.500"}>Límite: 15/may/2025</Text>
          </Box>
          <Tab>Favoritos</Tab>
          <Tab>Contacto</Tab>
        </Flex>

        {admin &&
          (
            <MenuDerechoAdmin/>
          )
        }

      </TabList>

    </Tabs>

  )
}

export default TablaMenu
