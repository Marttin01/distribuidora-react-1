import { Tabs, TabList, Tab,  } from '@chakra-ui/react'

function TablaMenu () {
  return (
    <Tabs align='end' size='lg'>
      <TabList>
        <Tab>Inicio</Tab>
        <Tab>Productos</Tab>
        <Tab>Promos</Tab>
        <Tab>Favoritos</Tab>
        <Tab>Contacto</Tab>
      </TabList>

    </Tabs>
  )
}

export default TablaMenu
