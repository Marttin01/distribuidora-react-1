import { Avatar, Wrap, WrapItem } from "@chakra-ui/react"

function CategoriasCardMain () {
    return (
        <Wrap > 
          <WrapItem>
            <Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </WrapItem>
          <WrapItem>
            <Avatar size={'xl'} name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
          </WrapItem>
          <WrapItem>
            <Avatar size={'xl'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          </WrapItem>
          <WrapItem>
            <Avatar size={'xl'} name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          </WrapItem>
          <WrapItem>
            <Avatar size={'xl'} name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          </WrapItem>
          <WrapItem>
            <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </WrapItem>
          <WrapItem>
            <Avatar size={'xl'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          </WrapItem>
        </Wrap>
    )
}

export default CategoriasCardMain