import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, SimpleGrid } from "@chakra-ui/react";
import CardCategoriasProductoMainProducto from "./CardCategoriasProductoMainProducto";
import { useCallback, useRef } from "react";

interface Producto {
    nombre: string;
    precio: number;
    descripcion: string;
    imgSrc: string;
}

interface Props {
    onCloseIconClick: (value: boolean) => void;
    productos: Producto[];
}

function CardCategoriasProductosMain({onCloseIconClick, productos}: Props) {
    const inputRef = useRef<HTMLButtonElement>(null);

    const handleCloseIconClick = useCallback(() => {
        onCloseIconClick(true);
        inputRef.current?.focus();
    }, [onCloseIconClick]);

    return (
        <Box p={4} position="relative" mt={7}>
            <IconButton 
                onClick={handleCloseIconClick}
                aria-label="Cerrar" 
                icon={<CloseIcon />}
                position="absolute" 
                top={1} 
                right={6} 
                size="lg" 
                variant="ghost" 
                ref={inputRef}
            />
            <SimpleGrid 
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing={{ base: 4, lg: 6 }}
                mt={12}
                mx="auto"
                maxW="1200px"
                px={{ base: 4, md: 6 }}
            >
                {productos.map((producto, index) => (
                    <Box 
                        key={`producto-${index}-${producto.nombre}`}
                        w="100%"
                        maxW="300px"
                        mx="auto"
                    >
                        <CardCategoriasProductoMainProducto producto={producto} />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default CardCategoriasProductosMain;
