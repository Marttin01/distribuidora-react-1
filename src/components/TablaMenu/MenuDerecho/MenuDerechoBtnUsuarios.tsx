import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


const MenuDerechoBtnUsuarios = () => {

    return (
        <>
        <Menu>
            <MenuButton px={4} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' borderWidth='1px' borderColor={"gray.200"}   _hover={{   bg: 'gray.100', width:"225px", zIndex:1}} _expanded={{ bg: 'gray.200' }} _focus={{ boxShadow: 'none', bg:"gray.200"}} position={"relative"}>Usuarios</MenuButton>
            <MenuList>               
            <MenuItem>Crear Usuario
            </MenuItem>
            <MenuItem>Buscar Usuario</MenuItem>
            </MenuList>
        </Menu>

        <Box mt={25}/>

        <Menu>
            <MenuButton px={4} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' borderWidth='1px' borderColor={"gray.200"}   _hover={{   bg: 'gray.100', width:"225px", zIndex:1}} _expanded={{ bg: 'gray.200' }} _focus={{ boxShadow: 'none', bg:"gray.200"}} position={"relative"}>Productos</MenuButton>
            <MenuList>               
            <MenuItem>Crear Producto</MenuItem>
            <MenuItem>Buscar Producto</MenuItem>
            </MenuList>
        </Menu>



        </>
    )

}

export default MenuDerechoBtnUsuarios;