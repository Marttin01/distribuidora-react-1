import { Avatar, WrapItem } from "@chakra-ui/react";

interface Props {
    onAvatarClick: (value: boolean) => void;
    producto: {
        nombre: string;
        precio: number;
        descripcion: string;
        imgSrc: string;
        categoria: string;
        stock: number;
    };
}

function CardCategoriasProductosAvatar ({producto,onAvatarClick} : Props) {

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }

    return (

        <WrapItem mr={"10"}>
          <Avatar size={'xl'} name={producto.nombre} src={producto.imgSrc} onClick={handleAvatarClick} />
        </WrapItem>

    )
}

export default CardCategoriasProductosAvatar;