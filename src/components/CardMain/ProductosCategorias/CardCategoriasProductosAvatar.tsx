import { Avatar, WrapItem } from "@chakra-ui/react";

interface Props {
    onAvatarClick: (value: boolean) => void;
    imgSrc: string;
//     producto: {
//         nombre: string;
//         precio: number;
//         descripcion: string;
//         imgSrc: string;
//         categoria: string;
//         stock: number;
//     };
}

function CardCategoriasProductosAvatar ({imgSrc, onAvatarClick} : Props) {

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }

    return (

        <WrapItem mr={"10"}>
          <Avatar size={'xl'} name={""} src={imgSrc} onClick={handleAvatarClick} />
        </WrapItem>

    )
}

export default CardCategoriasProductosAvatar;