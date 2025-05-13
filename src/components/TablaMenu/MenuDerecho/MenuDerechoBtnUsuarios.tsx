import { ArrowForwardIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useState } from "react";


const MenuDerechoBtnUsuarios = () => {
    
    const [botonApretado, setBotonApretado] = useState<boolean>(false);
    const [mouseEncima, setMouseEncima] = useState<boolean>(true);

    const handleClickbutton = () => {
        setBotonApretado(botonApretado?false:true);
    }

    const handleMouseOver = () => {
        setMouseEncima(true)
    }

    const handleMouseLeave = () => {
        setMouseEncima(false)
    }

    return (
        <>

        <Box mb={4}>
            <Text fontSize="xxs" fontWeight="bold" mb={2} mt={4} ml={4}>USUARIOS</Text>
            <Menu>
                <MenuButton px={4} py={2} width={"150px"} transition='all 0.2s' borderRadius='md' bg={"gray.200"} borderWidth='1px' borderColor={"gray.200"} _hover={{ backgroundColor: "gray.300" }} _expanded={{ bg: 'gray.300', width:"100%",outline:"none !important" }} _focus={{ boxShadow: 'none'}} position={"relative"} fontWeight={"bold"} onClick={handleClickbutton}>
                <Flex alignItems="center" justifyContent={"space-between"}>Usuarios{botonApretado && (<Icon as={ChevronRightIcon} ml={2} />)}{!botonApretado && (<Icon as={ChevronDownIcon} ml={2} />)} </Flex>
                </MenuButton>

                <MenuList bg={"none !important"} boxShadow={"none"} >

                <MenuItem mt={-4} sx={{ backgroundColor: "gray.200 !important"}} _highlighted={{ bg: "gray.200 !important" }}> <Flex  position={"relative"} alignItems={"center"}><Icon className="icon" left={mouseEncima?"16px":"0px"} position={"absolute"} transition="margin-left 0.2s ease-in-out" transitionDelay="0.1s" as={ArrowForwardIcon}/>
                <Text mt={3} ml={9} onMouseEnter={handleMouseOver} _hover={{fontColor:"gray.600"}} onMouseLeave={handleMouseLeave}>Crear Usuario</Text></Flex></MenuItem>

                {/* <MenuItem>Buscar Usuario</MenuItem> */}

                </MenuList>
            </Menu>
      </Box>

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