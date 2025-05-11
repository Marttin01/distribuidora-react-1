import { Avatar, WrapItem } from "@chakra-ui/react";


interface Props {
    onAvatarClick: (value: boolean) => void;
    nombre:string;
    imgSrc:string;
}

function CardCategoriasProductos2({nombre,imgSrc,onAvatarClick}: Props) {

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }

    return (
        <>
        {
            <WrapItem mr={"10"}>
                <Avatar size={'xl'} name={nombre} src={imgSrc} onClick={handleAvatarClick} />
            </WrapItem>    
        }        
        </>

    )
}

export default CardCategoriasProductos2;