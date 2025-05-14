import {  ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { useState } from "react";
import CrearUsuario from "./MenuDerechoBtnFunciones/CrearUsuario";
import BuscarUsuario from "./MenuDerechoBtnFunciones/BuscarUsuario";
import Usuarios from "./MenuDerechoBtnFunciones/Usuarios";
import CrearProducto from "./MenuDerechoBtnFunciones/CrearProducto";
import CargarProductos from "./MenuDerechoBtnFunciones/CargarProductos";
import BuscarProducto from "./MenuDerechoBtnFunciones/BuscarProducto";
import BuscarCarrito from "./MenuDerechoBtnFunciones/BuscarCarrito";


const MenuDerechoBotones = () => {
    
    const [botonApretado, setBotonApretado] = useState<boolean>(false);

    const handleClickbutton = () => {
        setBotonApretado(botonApretado?false:true);
    }

    return (
        <>

        <Box mb={4} pt={1}>
            <Text fontSize="xxs" fontWeight="bold" mb={2} mt={4} ml={4}>USUARIOS</Text>
            <Menu>
                <MenuButton borderStartEndRadius={"none"} px={4} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"} _hover={{ backgroundColor: "white" }} _expanded={{ bg: 'white', width:"100%",outline:"none !important" }} _focus={{ boxShadow: 'none'}} position={"relative"} fontWeight={"bold"} onClick={handleClickbutton}>
                <Flex alignItems="center" justifyContent={"space-between"}>Usuarios{botonApretado && (<Icon as={ChevronRightIcon} ml={2} />)}{!botonApretado && (<Icon as={ChevronDownIcon} ml={2} />)} </Flex>
                </MenuButton>

                <MenuList bg={"none !important"} boxShadow={"none"} >
                    <CrearUsuario></CrearUsuario>
                    <BuscarUsuario></BuscarUsuario>
                    <Usuarios></Usuarios>
                </MenuList>
            </Menu>
      </Box>

        <Box mt={25}/>
        <Text fontSize="xxs" fontWeight="bold" mb={2} mt={4} ml={4}>PRODUCTOS</Text>
        <Menu>
            <MenuButton _focusVisible={{outline:"none", boxShadow:"none"}} px={4} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"} _hover={{ backgroundColor: "white" }} _expanded={{ bg: 'white', width:"100%", outline:"none !important"}} _focus={{ outline:"none",boxShadow: 'none'}} position={"relative"} fontWeight={"bold"} onClick={handleClickbutton} _active={{outline:"none !important", boxShadow:"none !important"}} >
            <Flex alignItems="center" justifyContent={"space-between"}>Productos{botonApretado && (<Icon as={ChevronRightIcon} ml={2} />)}{!botonApretado && (<Icon as={ChevronDownIcon} ml={2} />)} </Flex>
            </MenuButton>
            <MenuList bg={"none !important"} boxShadow={"none"}>               
                <CrearProducto></CrearProducto>
                <CargarProductos></CargarProductos>
                <BuscarProducto></BuscarProducto>
            </MenuList>
        </Menu>
        
        <Box mt={25}/>
        <Text fontSize="xxs" fontWeight="bold" mb={2} mt={4} ml={4}>CARRITOS</Text>
        <Menu>
            <MenuButton _focusVisible={{outline:"none", boxShadow:"none"}} px={4} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"} _hover={{ backgroundColor: "white" }} _expanded={{ bg: 'white', width:"100%"}} _focus={{ outline:"none",boxShadow: 'none'}} position={"relative"} fontWeight={"bold"} onClick={handleClickbutton} _active={{outline:"none !important", boxShadow:"none !important"}} >
            <Flex alignItems="center" justifyContent={"space-between"}>Carritos{botonApretado && (<Icon as={ChevronRightIcon} ml={2} />)}{!botonApretado && (<Icon as={ChevronDownIcon} ml={2} />)} </Flex>
            </MenuButton>
            <MenuList bg={"none !important"} boxShadow={"none"}> 
                <BuscarCarrito></BuscarCarrito>
            </MenuList>
        </Menu>



        </>
    )

}

export default MenuDerechoBotones;