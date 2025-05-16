import { Avatar, Wrap, WrapItem } from "@chakra-ui/react"

interface Props {
  onAvatarClick: (value: string) => void;
  categorias: {
    nombre: string;
    imgSrc: string;
  }[];
}

function CategoriasCardMain ({categorias, onAvatarClick}: Props) {
    const handleAvatarClick = (categoria : string) => {
      onAvatarClick(categoria);
    }

    return (
        <Wrap 
            spacing={6} 
            justify="flex-start"
            display="flex"
            flexWrap="nowrap"
            width="max-content"
            py={2}
        > 
          {categorias.map((categoria, index) => (
            <WrapItem key={index}>
              <Avatar 
                size={'xl'} 
                name={categoria.nombre} 
                src={categoria.imgSrc} 
                onClick={() => handleAvatarClick(categoria.nombre)}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                    transform: 'scale(1.05)'
                }}
              />
            </WrapItem>
          ))}
        </Wrap>
    )
}

export default CategoriasCardMain
