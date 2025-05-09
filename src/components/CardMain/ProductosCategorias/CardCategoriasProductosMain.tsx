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
          /** ACA ES DONDE SE MUESTRAN LOS PRODUCTOS DE LAS SUBCATEGORIAS Y CATEGORIAS **/

function CardCategoriasProductosMain({onCloseIconClick, productos} : Props) {

    const handleCloseIconClick = () => {
        onCloseIconClick(true);
    }

    return (
        <Box p={4} position="relative" mt={7}>
              <IconButton onClick={handleCloseIconClick}
                aria-label="Cerrar" icon={<CloseIcon onClick={handleCloseIconClick} />}  position="absolute" top={1} right={6} size="lg" variant="ghost" 
              />
              <SimpleGrid columns={[productos.length]} spacing={4} mt={12}>

        
                {productos.map((producto, index) => (
                  <CardCategoriasProductoMainProducto key={index} producto={producto} />
                ))}
                
        
              </SimpleGrid>
        </Box>
    )
}

export default CardCategoriasProductosMain;