import { CloseIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid, Card, CardBody, Avatar, Text, Button, IconButton } from '@chakra-ui/react';

interface Props {
  onCloseIconClick: (value : boolean) => void;
}

const CardGaseosasColaMain = ({onCloseIconClick} : Props) => {

    const handleCloseIconClick = () => {
        onCloseIconClick(true);
    }

  return (
    <Box p={4} position="relative" mt={7}>
      <IconButton onClick={handleCloseIconClick}
        aria-label="Cerrar" icon={<CloseIcon onClick={handleCloseIconClick} />}  position="absolute" top={2} right={2} size="sm" variant="ghost" 
      />
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>

        <Card borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor={"lightgrey"}>
          <CardBody p={4} display="flex" flexDirection="column" alignItems="center">
            <Avatar size={'xl'} src={"https://bit.ly/sage-adebayo"} />
            <Text fontSize="lg" fontWeight="bold" mt={2} textAlign="center">
              Coca Cola 1L x6
            </Text>
            <Button bg="#F7F7F7" color="#333" mt={2} width="full">
              Agregar al carrito
            </Button>
          </CardBody>
        </Card>

        <Card borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor={"lightgrey"}>
          <CardBody p={4} display="flex" flexDirection="column" alignItems="center">
            <Avatar size={'xl'} src={"https://bit.ly/sage-adebayo"} />
            <Text fontSize="lg" fontWeight="bold" mt={2} textAlign="center">
              Coca Cola 2L x6
            </Text>
            <Button bg="#F7F7F7" color="#333" mt={2} width="full">
              Agregar al carrito
            </Button>
          </CardBody>
        </Card>

        <Card borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor={"lightgrey"}>
          <CardBody p={4} display="flex" flexDirection="column" alignItems="center">
            <Avatar size={'xl'} src={"https://bit.ly/sage-adebayo"} />
            <Text fontSize="lg" fontWeight="bold" mt={2} textAlign="center">
              Coca Cola 500ml x6
            </Text>
            <Button bg="#F7F7F7" color="#333" mt={2} width="full">
              Agregar al carrito
            </Button>
          </CardBody>
        </Card>

      </SimpleGrid>
    </Box>
  );
};

export default CardGaseosasColaMain;