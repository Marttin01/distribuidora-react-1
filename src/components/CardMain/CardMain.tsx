import { Card, CardBody, Text } from "@chakra-ui/react"
import CategoriasCardMain from "./CategoriasCardMain"

function CardMain () {
    return (
        <Card backgroundColor={'transparent'} padding={'15'} align={'initial'}>
            <CardBody>
                <Text ><h3>Categorias</h3></Text>
                <CategoriasCardMain></CategoriasCardMain>
            </CardBody>
        </Card>
    )
}

export default CardMain