import CardCategoriasProductosAvatar from "./CardCategoriasProductosAvatar";

interface Props {
    onAvatarClick: (value: boolean) => void;
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

function CardCategoriasProductos({subCategorias, onAvatarClick}: Props) {

    const handleAvatarClick = () => {
        onAvatarClick(true);
    }

    return (
        <>
        {
            // subCategoria.productos.map((p,index) => (<CardCategoriasProductosAvatar key={index} onAvatarClick={handleAvatarClick} producto={p}/>))
            
            // <CardCategoriasProductosAvatar onAvatarClick={handleAvatarClick} imgSrc={"subCategorias"}/>

            subCategorias.map( (s) => (<CardCategoriasProductosAvatar key={s.nombre} onAvatarClick={handleAvatarClick} imgSrc={s.imgSrc}/>))


        }        
        </>


        // <WrapItem mr={"10"}>
        //   <Avatar size={'xl'} name={producto.nombre} src='https://bit.ly/sage-adebayo' onClick={handleAvatarClick} />
        // </WrapItem>
    )
}

export default CardCategoriasProductos;