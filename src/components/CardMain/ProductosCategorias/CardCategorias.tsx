import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import CardCategoriasProductos from "./CardCategoriasProductos";

interface Props {
    onAvatarClick: (value: boolean) => void;
    titulo: string;
    imgSrc:string;
    nombre:string;
    // productos: {
    //     nombre:string;
    //     precio:number;
    //     descripcion:string;
    //     imgSrc:string;
    //     categoria:string;
    //     stock:number;
    // }[];
    subCategorias: {
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
            }[];
    }[];
}

function CardCategorias({onAvatarClick, titulo, imgSrc, nombre, subCategorias} : Props){

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }
   
    return(

        <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
          <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
            <Heading size='lg'>{titulo}</Heading>

                {/* <CardCategoriasProductos onAvatarClick={handleAvatarClick} key={nombre} /> */}

                {subCategorias.map( (s) => (<CardCategoriasProductos  onAvatarClick={handleAvatarClick} key={s.nombre} subCategorias={subCategorias} ></CardCategoriasProductos>))}



          </CardHeader>
          <CardBody>             
          </CardBody>
        </Card>

    )
}

export default CardCategorias;