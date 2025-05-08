import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import CardCategoriasProductos from "./CardCategoriasProductos";

interface Props {
    onAvatarClick: (value: boolean) => void;
    nombre: string;
    titulo: string;
    descripcion: string;
    imgSrc: string;
    productos: 
        {
            nombre: string;
            precio: number;
            descripcion: string;
            imgSrc: string;
            categoria: string;
            stock: number;
        }[]
    ;
}

function CardCategorias(categoria : Props){

    const handleAvatarClick = () => {
        categoria.onAvatarClick(true);
    }
   
    return(

        <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
          <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
            <Heading size='lg'>{categoria.titulo}</Heading>

                {categoria.productos.map( (producto,index) => (<CardCategoriasProductos  onAvatarClick={handleAvatarClick} key={index}producto={producto}></CardCategoriasProductos>))}

          </CardHeader>
          <CardBody>             
          </CardBody>
        </Card>

    )
}

export default CardCategorias;