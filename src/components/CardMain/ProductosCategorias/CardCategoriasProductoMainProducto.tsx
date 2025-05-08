import { Avatar, Button, Card, CardBody, Text } from "@chakra-ui/react"

interface Props {
    producto: {
        nombre: string;
        precio: number;
        descripcion: string;
        imgSrc: string;
    }
}

function CardCategoriasProductoMainProducto({producto} : Props) {

    return (
        <Card borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor={"lightgrey"}>
        <CardBody p={4} display="flex" flexDirection="column" alignItems="center">
          <Avatar size={'xl'} src={producto.imgSrc} />
          <Text fontSize="lg" fontWeight="bold" mt={2} textAlign="center">
            {producto.nombre}
          </Text>
          <Button bg="#F7F7F7" color="#333" mt={2} width="full">
            Agregar al carrito
          </Button>
        </CardBody>
      </Card>
    )
}

export default CardCategoriasProductoMainProducto