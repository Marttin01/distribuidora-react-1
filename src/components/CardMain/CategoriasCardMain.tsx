import { Avatar, Wrap, WrapItem } from "@chakra-ui/react"

interface Props {
  onAvatarClick: (value: string) => void;
  categorias: {
    nombre: string;
    imgSrc: string;
  }[];
}

function CategoriasCardMain ({categorias, onAvatarClick}: Props) {

    const handleAvatarClick = (categoria : string) =>{
      onAvatarClick(categoria);
    }

    return (
        <Wrap > 
          {categorias.map((categoria,index) => (
            <WrapItem>
              <Avatar size={'xl'} key={index} name={categoria.nombre} src={categoria.imgSrc} onClick={() => handleAvatarClick(categoria.nombre)}/>
            </WrapItem>
          ))}
        </Wrap>
    )
}

export default CategoriasCardMain