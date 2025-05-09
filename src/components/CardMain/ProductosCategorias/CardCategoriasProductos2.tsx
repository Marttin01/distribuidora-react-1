import CardCategoriasProductosAvatar from "./CardCategoriasProductosAvatar";

interface Props {
    onAvatarClick: (value: boolean) => void;
    nombre:string;
    titulo:string;
    imgSrc:string;
}

function CardCategoriasProductos2({nombre,titulo,imgSrc,onAvatarClick}: Props) {

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }

    return (
        <>
        {

            <CardCategoriasProductosAvatar onAvatarClick={handleAvatarClick} key={nombre} imgSrc={imgSrc} name={titulo}/>
        }        
        </>

    )
}

export default CardCategoriasProductos2;