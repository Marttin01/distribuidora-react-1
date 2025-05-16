import { 
    Card, 
    CardBody, 
    CardHeader, 
    Heading, 
    Flex, 
    Box, 
    IconButton
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import CardCategoriasProductos from "./CardCategoriasProductos";
import CardCategoriasProductos2 from "./CardCategoriasProductos2";
import { useRef } from "react"; // Eliminamos useEffect porque ya no lo necesitamos

interface Props {
    onAvatarClick: (value: boolean, categoria: string) => void;
    titulo: string;
    imgSrc: string;
    nombre: string;
    subCategorias: {
        nombre: string;
        titulo: string;
        descripcion: string;
        imgSrc: string;
    }[];
}

function CardCategorias({onAvatarClick, titulo, imgSrc, nombre, subCategorias}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleAvatarClick = (value: boolean, categoria: string) => {
        onAvatarClick(value, categoria);
    }

    const handleScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = 300;
            const newScrollPosition = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            
            containerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <Card 
            mx="auto" 
            backgroundColor="ButtonShadow"
            mt="7" 
            w="100%"
            borderRadius="xl"
            shadow="sm"
            pt={6}
        >
            <CardHeader p={4}>
                <Flex 
                    justify="space-between"
                    align="center"
                >
                    <Heading 
                        size="lg" 
                        color="gray.700"
                    >
                        {titulo}
                    </Heading>

                    <Flex 
                        align="center" 
                        position="relative"
                        flex="1"
                        maxW="80%"
                        ml={8}
                    >
                        <IconButton
                            aria-label="Scroll left"
                            icon={<ChevronLeftIcon boxSize={5} />}
                            position="absolute"
                            left={-2}
                            top="50%"
                            transform="translateY(-50%)"
                            zIndex={2}
                            rounded="full"
                            bg="ButtonShadow"
                            color="black"
                            onClick={() => handleScroll('left')}
                            size="sm"
                            _hover={{ bg: 'ButtonShadow', color: 'white' }}
                            boxShadow="none"
                        />

                        <Box
                            ref={containerRef}
                            overflow="hidden"
                            mx={6}
                            bg="ButtonShadow"
                            borderRadius="xl"
                            p={4}
                            w="100%"
                            css={{
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                },
                            }}
                        >
                            <Flex 
                                gap={6} 
                                width="max-content"
                                align="center"
                            >
                                <CardCategoriasProductos2 
                                    onAvatarClick={value => handleAvatarClick(value, nombre)}
                                    nombre={nombre}
                                    imgSrc={imgSrc}
                                />
                                {subCategorias.map((subCategoria, index) => (
                                    <CardCategoriasProductos
                                        key={`${subCategoria.nombre}-${index}`}
                                        onAvatarClick={value => handleAvatarClick(value, subCategoria.nombre)}
                                        nombre={subCategoria.nombre}
                                        imgSrc={subCategoria.imgSrc}
                                    />
                                ))}
                            </Flex>
                        </Box>

                        <IconButton
                            aria-label="Scroll right"
                            icon={<ChevronRightIcon boxSize={5} />}
                            position="absolute"
                            right={-2}
                            top="50%"
                            transform="translateY(-50%)"
                            zIndex={2}
                            rounded="full"
                            bg="ButtonShadow"
                            color="black"
                            onClick={() => handleScroll('right')}
                            size="sm"
                            _hover={{ bg: 'ButtonShadow', color: 'white' }}
                            boxShadow="none"
                        />
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
            </CardBody>
        </Card>
    );
}

export default CardCategorias;
