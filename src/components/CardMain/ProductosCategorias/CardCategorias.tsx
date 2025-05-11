import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import CardCategoriasProductos from "./CardCategoriasProductos";
import CardCategoriasProductos2 from "./CardCategoriasProductos2";


interface Props {
    onAvatarClick: (value: boolean, categoria : string) => void;
    titulo: string;
    imgSrc:string;
    nombre:string;
    subCategorias: {
        nombre: string;
        titulo: string;
        descripcion: string;
        imgSrc: string;
    }[];
}

function CardCategorias ({onAvatarClick ,titulo, imgSrc, nombre, subCategorias} : Props)  {

    const handleAvatarClick = (value : boolean, categoria : string) => {
        console.log(" clickeada pasando por CardCategorias: ", categoria);
        onAvatarClick(value, categoria);
    }
   
    return(

        <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
          <CardHeader tabIndex={-1} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
            <Heading size='lg'>{titulo}</Heading>

                <CardCategoriasProductos2 onAvatarClick={value => handleAvatarClick(value,nombre)} key={nombre} nombre={nombre} imgSrc={imgSrc}/>
 
                {subCategorias.map( s => (<CardCategoriasProductos  onAvatarClick={value => handleAvatarClick(value,s.nombre)} key={s.nombre} nombre={s.nombre} imgSrc={s.imgSrc} ></CardCategoriasProductos>))}

          </CardHeader>
          <CardBody>             
          </CardBody>
        </Card>

    );
}

export default CardCategorias;