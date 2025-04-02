import { Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react"

function CatalogoCardMain () {
    return (
        <Center>
        <SimpleGrid marginTop={1} boxSize={'auto'} maxWidth={'100%'}spacing={5} alignContent={'center'} templateColumns='repeat(2, 1fr)'>
          <Card>
            <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        </Center>
    )
}

export default CatalogoCardMain