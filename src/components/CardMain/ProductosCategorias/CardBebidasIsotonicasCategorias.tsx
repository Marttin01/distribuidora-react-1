import { Avatar, Card, CardBody, CardHeader, Heading, WrapItem } from "@chakra-ui/react";

function CardBebidasIsotonicasCategorias() {
  return (
        <Card mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
            <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
              <Heading size='lg'>BEBIDAS ISOTONICAS</Heading>
              <WrapItem mr={"6"}>
                <Avatar size={'xl'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              </WrapItem>
              <WrapItem mr={"6"}>
                <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
              </WrapItem>
              <WrapItem mr={"6"}>
                <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
              </WrapItem>
              <WrapItem mr={"6"}>
                <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
              </WrapItem>
              <WrapItem mr={"6"}>
                <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
              </WrapItem>

            </CardHeader>
            <CardBody>
              
            </CardBody>
        </Card>
    );
}

export default CardBebidasIsotonicasCategorias;