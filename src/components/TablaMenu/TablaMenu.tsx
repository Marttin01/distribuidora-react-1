import { Tabs, TabList, Tab, Flex,  } from '@chakra-ui/react'
import MenuPerfil from './MenuPerfil'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function TablaMenu () {

  const [modoOscuro, setModoOscuro] = useState(true);

  const handleClick = () => {
    setModoOscuro(!modoOscuro)
  }

  return (
    <Tabs align='end' size='lg' zIndex={"1000"} position={"fixed"} top={0} right={0} backgroundColor={"Menu"} w={"100%"}>
      <TabList display={"flex"} justifyContent={"space-between"}>
        <Tab sx={{ _selected: {boxShadow:"none", borderBottom:"none", background:"none" }}}>
          <MenuPerfil></MenuPerfil>
          {modoOscuro? (<MoonIcon marginLeft={6} onClick={handleClick}/>):(<SunIcon marginLeft={6} onClick={handleClick}/>)}
        
        </Tab>
        <Flex>
          <Tab>Inicio</Tab>
          <Tab>Productos</Tab>
          <Tab>Promos</Tab>
          <Tab>Favoritos</Tab>
          <Tab>Contacto</Tab>
        </Flex>
      </TabList>

    </Tabs>
  )
}

export default TablaMenu
