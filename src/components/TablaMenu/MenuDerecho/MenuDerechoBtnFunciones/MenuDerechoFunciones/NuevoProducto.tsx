import { 
    Button, 
    Icon, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    useDisclosure,
    VStack,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
    Box,
    useToast,
    InputGroup,
    InputLeftElement,
    Circle,
    Image,
    Flex,
    Select
} from "@chakra-ui/react";
import { FiShoppingBag, FiDollarSign, FiImage, FiSave } from "react-icons/fi";
import { useRef, useState } from "react";

function NuevoProducto() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState<string>("");
    
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        categoria: "",
        subCategoria: "",
        imgSrc: ""
    });

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setFormData({ ...formData, imgSrc: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // Aquí iría la lógica para guardar el producto
        toast({
            title: "Producto creado",
            description: "El producto se ha creado exitosamente",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
        onClose();
    };

    return (
        <>
            <Button 
                onClick={onOpen} 
                leftIcon={<Icon as={FiShoppingBag}/>} 
                size="sm"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="full"
                _hover={{ bg: 'gray.50' }}
            >
                Nuevo Producto
            </Button>

            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size="xl"
                scrollBehavior="inside"
            >
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)"/>
                <ModalContent 
                    bg="white" 
                    borderRadius="2xl"
                    shadow="xl"
                    maxH="90vh"
                    my="auto"
                >
                    <ModalHeader 
                        borderBottom="1px solid" 
                        borderColor="gray.200"
                        pb={4}
                        position="sticky"
                        top={0}
                        bg="white"
                        zIndex={1}
                        borderTopRadius="2xl"
                    >
                        <Flex align="center" gap={2}>
                            <Icon as={FiShoppingBag} />
                            Crear Nuevo Producto
                        </Flex>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody py={6}>
                        <VStack spacing={5}>
                            {/* Imagen */}
                            <Box 
                                width="100%" 
                                display="flex" 
                                justifyContent="center"
                                mb={4}
                            >
                                <Box position="relative">
                                    <Circle 
                                        size="150px" 
                                        bg="gray.100" 
                                        border="2px dashed" 
                                        borderColor="gray.300"
                                        overflow="hidden"
                                    >
                                        {imagePreview ? (
                                            <Image 
                                                src={imagePreview} 
                                                alt="Preview" 
                                                w="100%" 
                                                h="100%"
                                                objectFit="cover"
                                            />
                                        ) : (
                                            <Icon 
                                                as={FiImage} 
                                                boxSize={8} 
                                                color="gray.400"
                                            />
                                        )}
                                    </Circle>
                                    <Button
                                        size="sm"
                                        position="absolute"
                                        bottom={0}
                                        left="50%"
                                        transform="translateX(-50%)"
                                        borderRadius="full"
                                        onClick={() => fileInputRef.current?.click()}
                                        bg="white"
                                        shadow="md"
                                        leftIcon={<Icon as={FiImage} />}
                                    >
                                        Subir Imagen
                                    </Button>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        display="none"
                                        onChange={handleImageUpload}
                                    />
                                </Box>
                            </Box>

                            {/* Nombre */}
                            <FormControl>
                                <FormLabel fontSize="sm">Nombre del producto</FormLabel>
                                <Input
                                    placeholder="Ej: Coca Cola 500ml x6"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                                    bg="gray.50"
                                    borderRadius="full"
                                />
                            </FormControl>

                            {/* Descripción */}
                            <FormControl>
                                <FormLabel fontSize="sm">Descripción</FormLabel>
                                <Textarea
                                    placeholder="Describe el producto..."
                                    value={formData.descripcion}
                                    onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                                    bg="gray.50"
                                    borderRadius="xl"
                                    resize="none"
                                    rows={4}
                                />
                            </FormControl>

                            {/* Categoría */}
                            <FormControl>
                                <FormLabel fontSize="sm">Categoría</FormLabel>
                                <Select
                                    placeholder="Selecciona una categoría"
                                    value={formData.categoria}
                                    onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                                    bg="gray.50"
                                    borderRadius="full"
                                >
                                    <option value="gaseosas">Gaseosas</option>
                                    <option value="aguas">Aguas</option>
                                    <option value="bebidas">Bebidas Isotónicas</option>
                                </Select>
                            </FormControl>

                            {/* SubCategoría */}
                            <FormControl>
                                <FormLabel fontSize="sm">SubCategoría</FormLabel>
                                <Select
                                    placeholder="Selecciona una subcategoría"
                                    value={formData.subCategoria}
                                    onChange={(e) => setFormData({...formData, subCategoria: e.target.value})}
                                    bg="gray.50"
                                    borderRadius="full"
                                >
                                    <option value="coca-cola">Coca Cola</option>
                                    <option value="sprite">Sprite</option>
                                    <option value="fanta">Fanta</option>
                                </Select>
                            </FormControl>

                            {/* Precio */}
                            <FormControl>
                                <FormLabel fontSize="sm">Precio</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<Icon as={FiDollarSign} color='gray.500' />}
                                    />
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={formData.precio}
                                        onChange={(e) => setFormData({...formData, precio: e.target.value})}
                                        bg="gray.50"
                                        borderRadius="full"
                                    />
                                </InputGroup>
                            </FormControl>

                            {/* Stock */}
                            <FormControl>
                                <FormLabel fontSize="sm">Stock</FormLabel>
                                <NumberInput
                                    min={0}
                                    value={formData.stock}
                                    onChange={(value) => setFormData({...formData, stock: value})}
                                >
                                    <NumberInputField 
                                        bg="gray.50"
                                        borderRadius="full"
                                    />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter 
                        borderTop="1px solid" 
                        borderColor="gray.200"
                        gap={2}
                        position="sticky"
                        bottom={0}
                        bg="white"
                        pt={4}
                        borderBottomRadius="2xl"
                    >
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            borderRadius="full"
                        >
                            Cancelar
                        </Button>
                        <Button
                            bg="black"
                            color="white"
                            onClick={handleSubmit}
                            borderRadius="full"
                            leftIcon={<Icon as={FiSave} />}
                            _hover={{
                                bg: 'gray.800'
                            }}
                        >
                            Crear Producto
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NuevoProducto;
