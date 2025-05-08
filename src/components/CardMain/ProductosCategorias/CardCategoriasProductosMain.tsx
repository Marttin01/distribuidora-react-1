import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, SimpleGrid } from "@chakra-ui/react";
import CardCategoriasProductoMainProducto from "./CardCategoriasProductoMainProducto";

interface Props {
    onCloseIconClick: (value: boolean) => void;
    productos: {
        nombre: string;
        precio: number;
        descripcion: string;
        imgSrc: string;
    }[];
}

function CardCategoriasProductosMain({onCloseIconClick, productos} : Props) {

    const handleCloseIconClick = () => {
        onCloseIconClick(true);
    }

    return (
        <Box p={4} position="relative" mt={7}>
              <IconButton onClick={handleCloseIconClick}
                aria-label="Cerrar" icon={<CloseIcon onClick={handleCloseIconClick} />}  position="absolute" top={2} right={2} size="sm" variant="ghost" 
              />
              <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        
                {productos.map((producto, index) => (
                  <CardCategoriasProductoMainProducto key={index} producto={producto} />
                ))}
        
              </SimpleGrid>
        </Box>
    )
}

export default CardCategoriasProductosMain;