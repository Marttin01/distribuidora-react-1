import { Avatar, Card, CardBody, CardHeader, Heading, WrapItem } from "@chakra-ui/react";

interface Props{
  onAvatarClick : (value : boolean) => void;
}

function CardGaseosasColaCategorias({onAvatarClick} : Props) {

  const handleAvatarClick = () => {
    onAvatarClick(true);
  }

  return (
            <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
              <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
                <Heading size='lg'> GASEOSAS COLAS</Heading>
                <WrapItem mr={"10"}>
                  <Avatar onClick={handleAvatarClick} size={'xl'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </WrapItem>
                <WrapItem mr={"10"}>
                  <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </WrapItem>
                <WrapItem mr={"10"}>
                  <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </WrapItem>
                <WrapItem mr={"10"}> 
                  <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </WrapItem>
                <WrapItem>
                  <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </WrapItem>
              </CardHeader>
              <CardBody>             
              </CardBody>
            </Card>
        );
}

export default CardGaseosasColaCategorias;