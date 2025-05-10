import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, SimpleGrid } from "@chakra-ui/react";
import CardCategoriasProductoMainProducto from "./CardCategoriasProductoMainProducto";
import { useRef } from "react";

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

  const inputRef = useRef<HTMLButtonElement>(null);

    const handleCloseIconClick = () => {
        onCloseIconClick(true);
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <Box p={4} position="relative" mt={7}>
              <IconButton onClick={handleCloseIconClick}
                aria-label="Cerrar" icon={<CloseIcon onClick={handleCloseIconClick} />}position="absolute" top={1} right={6} size="lg" variant="ghost" ref={inputRef}/>
              <SimpleGrid columns={[productos.length]} spacing={4} mt={12}>

        
                {productos.map((producto, index) => (
                  <CardCategoriasProductoMainProducto key={index} producto={producto} />
                ))}
                
        
              </SimpleGrid>
        </Box>
    )
}

export default CardCategoriasProductosMain;