import {  Avatar, Card, CardBody, CardHeader, Center, Heading, SimpleGrid, WrapItem } from "@chakra-ui/react"

function CatalogoCardMain () {
    return (
        <Center display={"flex"} flexDirection={"column"} >
        <SimpleGrid marginTop={1} boxSize={'auto'} maxWidth={'100%'}spacing={1} alignItems={'center'} templateColumns='repeat(1, 1fr)' justifyContent={"center"}>
          <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
            <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
              <Heading size='lg'> GASEOSAS COLAS</Heading>
              <WrapItem mr={"10"}>
                <Avatar size={'xl'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
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

          <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
            <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
              <Heading size='lg'> GASEOSAS SABORES</Heading>
              <WrapItem mr={"10"}>
                <Avatar size={'xl'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
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

            </CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>

          <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
            <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"10"} flexWrap={"wrap"}>
              <Heading size='lg'>AGUAS</Heading>
              <WrapItem mr={"10"}>
                <Avatar size={'xl'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              </WrapItem>
              <WrapItem mr={"10"}>
                <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
              </WrapItem>
              <WrapItem mr={"10"}>
                <Avatar size={'xl'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
              </WrapItem>

            </CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>

          <Card  mx={"auto"} backgroundColor={'ButtonShadow'} mt={"7"} w={"100%"}>
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

        </SimpleGrid>
        </Center>
    )
}

export default CatalogoCardMain