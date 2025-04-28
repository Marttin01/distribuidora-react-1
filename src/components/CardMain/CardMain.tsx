import { Card, CardBody, Text } from "@chakra-ui/react"
import CategoriasCardMain from "./CategoriasCardMain"

function CardMain () {
    return (
        <Card backgroundColor={'ButtonShadow'} padding={'15'} align={'initial'} mt={"7"}>
            <CardBody>
                <Text ><h3>Categorias</h3></Text>
                <CategoriasCardMain></CategoriasCardMain>
            </CardBody>
        </Card>
    )
}

export default CardMain