import { Avatar, Wrap, WrapItem } from "@chakra-ui/react"

interface Props {
  categorias: {
    nombre: string;
    imgSrc: string;
  }[];
}

function CategoriasCardMain ({categorias}: Props) {


    return (
        <Wrap > 
          {categorias.map((categoria,index) => (
            <WrapItem>
              <Avatar size={'xl'} key={index} name={categoria.nombre} src={categoria.imgSrc} />
            </WrapItem>
          ))}
        </Wrap>
    )
}

export default CategoriasCardMain