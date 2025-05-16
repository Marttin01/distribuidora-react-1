import { Box, VStack, Button, Collapse, Icon, Text, Flex } from "@chakra-ui/react";
import { 
    FiUsers, 
    FiUserPlus, 
    FiSearch, 
    FiList, 
    FiChevronDown,
    FiPackage,
    FiPlusCircle,
    FiUpload,
    FiShoppingCart
} from "react-icons/fi";
import { useState } from "react";

interface MenuSectionProps {
    title: string;
    icon: any;
    options: {
        name: string;
        icon: any;
        onClick?: () => void;
    }[];
}

const MenuSection = ({ title, icon, options }: MenuSectionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box mb={4}>
            {/* Botón principal de la sección */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                width="100%"
                bg={isOpen ? "white" : "gray.200"}
                border="1px solid"
                borderColor={isOpen ? "gray.300" : "gray.200"}
                borderRadius="lg"
                py={6}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                transition="all 0.2s"
                _hover={{
                    bg: "white",
                    shadow: "sm"
                }}
            >
                <Flex align="center" gap={3}>
                    <Icon as={icon} boxSize={5} />
                    <Text fontWeight="medium">{title}</Text>
                </Flex>
                <Icon
                    as={FiChevronDown}
                    transform={isOpen ? "rotate(-180deg)" : ""}
                    transition="transform 0.2s"
                />
            </Button>

            {/* Menú desplegable */}
            <Collapse in={isOpen}>
                <VStack
                    spacing={2}
                    mt={2}
                    pl={4}
                >
                    {options.map((option, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            width="100%"
                            justifyContent="flex-start"
                            borderRadius="full"
                            py={5}
                            leftIcon={<Icon as={option.icon} />}
                            onClick={option.onClick}
                            _hover={{
                                bg: "gray.100"
                            }}
                        >
                            {option.name}
                        </Button>
                    ))}
                </VStack>
            </Collapse>
        </Box>
    );
};

const MenuDerechoBotones = () => {
    const sections = [
        {
            title: "Usuarios",
            icon: FiUsers,
            options: [
                { name: "Crear Usuario", icon: FiUserPlus },
                { name: "Buscar Usuario", icon: FiSearch },
                { name: "Lista de Usuarios", icon: FiList }
            ]
        },
        {
            title: "Productos",
            icon: FiPackage,
            options: [
                { name: "Crear Producto", icon: FiPlusCircle },
                { name: "Cargar Productos", icon: FiUpload },
                { name: "Buscar Producto", icon: FiSearch }
            ]
        },
        {
            title: "Carritos",
            icon: FiShoppingCart,
            options: [
                { name: "Buscar Carrito", icon: FiSearch }
            ]
        }
    ];

    return (
        <Box p={4} bg="white" borderRadius="2xl" shadow="sm">
            <VStack spacing={6} align="stretch">
                {sections.map((section, index) => (
                    <Box key={index}>
                        <Text 
                            fontSize="xs" 
                            fontWeight="bold" 
                            mb={2} 
                            ml={4} 
                            color="gray.700"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            {section.title}
                        </Text>
                        <MenuSection
                            title={section.title}
                            icon={section.icon}
                            options={section.options}
                        />
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default MenuDerechoBotones;
