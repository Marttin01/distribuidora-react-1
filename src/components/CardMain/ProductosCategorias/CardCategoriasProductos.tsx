import CardCategoriasProductosAvatar from "./CardCategoriasProductosAvatar";

interface Props {
    onAvatarClick: (value: boolean) => void;
    subCategoria: {
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
    };
}

function CardCategoriasProductos({subCategoria, onAvatarClick}: Props) {

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }

    return (
        <>
        {
            subCategoria.productos.map((p,index) => (<CardCategoriasProductosAvatar key={index} onAvatarClick={handleAvatarClick} producto={p}/>))
        }        
        </>


        // <WrapItem mr={"10"}>
        //   <Avatar size={'xl'} name={producto.nombre} src='https://bit.ly/sage-adebayo' onClick={handleAvatarClick} />
        // </WrapItem>
    )
}

export default CardCategoriasProductos;