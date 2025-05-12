import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


const MenuDerechoBtnUsuarios = () => {

    return (
        <>
        <Menu >
            <MenuButton paddingLeft={"0 !important"} sx={{boxSizing: "border-box"}} px={4} w={"150px"} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"}  _hover={{w:"100% !important", margin:"0 !important", backgroundColor:"white !important"}} _expanded={{ bg: 'white' }} _focus={{ boxShadow: 'none', bg:"gray.200"}} position={"relative"} fontWeight={"bold"}>Usuarios</MenuButton>
            <MenuList>               
            <MenuItem>Crear Usuario
            </MenuItem>
            <MenuItem>Buscar Usuario</MenuItem>
            </MenuList>
        </Menu>

        <Box mt={25}/>

        <Menu>
            <MenuButton px={4} w={"100%"} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"} _hover={{width:"100%", ml:0, backgroundColor:"white"}} _expanded={{ bg: 'white' }} _focus={{ boxShadow: 'none', bg:"gray.200"}} position={"relative"} fontWeight={"bold"}>Productos</MenuButton>
            <MenuList>               
            <MenuItem>Crear Producto</MenuItem>
            <MenuItem>Buscar Producto</MenuItem>
            </MenuList>
        </Menu>
        
        <Box mt={25}/>

        <Menu>
            <MenuButton px={4} w={"100%"} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"} _hover={{width:"100%", ml:0, backgroundColor:"white"}} _expanded={{ bg: 'white' }} _focus={{ boxShadow: 'none', bg:"gray.200"}} position={"relative"} fontWeight={"bold"}>Carritos</MenuButton>
            <MenuList>               
            <MenuItem>Buscar Carritos</MenuItem>
            </MenuList>
        </Menu>



        </>
    )

}

export default MenuDerechoBtnUsuarios;