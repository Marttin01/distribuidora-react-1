import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Button,} from '@chakra-ui/react'

function MisPedidosMenuPerfilBoton () {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
      <Button onClick={onOpen}>Mis Pedidos</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus totam non saepe omnis maiores, eaque deleniti id obcaecati atque blanditiis rem corporis natus dolor et eligendi commodi dolore quasi?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>


    )

}

export default  MisPedidosMenuPerfilBoton