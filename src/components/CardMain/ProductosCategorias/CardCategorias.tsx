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
import { useState, useEffect } from "react";

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
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleAvatarClick = (value: boolean, categoria: string) => {
        console.log(" clickeada pasando por CardCategorias: ", categoria);
        onAvatarClick(value, categoria);
    }

    const handleScroll = (direction: 'left' | 'right') => {
        const container = document.getElementById(`scroll-container-${nombre}`);
        if (container) {
            const scrollAmount = 200;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    const checkScrollButtons = () => {
        const container = document.getElementById(`scroll-container-${nombre}`);
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < (container.scrollWidth - container.clientWidth)
            );
        }
    }

    useEffect(() => {
        const container = document.getElementById(`scroll-container-${nombre}`);
        if (container) {
            checkScrollButtons();
            container.addEventListener('scroll', checkScrollButtons);
            setShowRightArrow(container.scrollWidth > container.clientWidth);
        }

        return () => {
            const container = document.getElementById(`scroll-container-${nombre}`);
            if (container) {
                container.removeEventListener('scroll', checkScrollButtons);
            }
        };
    }, [nombre]);

    return (
        <Card 
            mx="auto" 
            backgroundColor="ButtonShadow" 
            mt="7" 
            w="100%"
            borderRadius="xl"
            shadow="sm"
        >
            <CardHeader p={6}>
                <Flex 
                    direction="column" 
                    gap={4}
                >
                    <Heading 
                        size="lg" 
                        color="gray.700"
                    >
                        {titulo}
                    </Heading>
                    
                    <Flex 
                        position="relative" 
                        align="center"
                        bg="white"
                        p={4}
                        borderRadius="xl"
                        shadow="sm"
                    >
                        {showLeftArrow && (
                            <IconButton
                                aria-label="Scroll left"
                                icon={<ChevronLeftIcon boxSize={6} color="white" />}
                                position="absolute"
                                left={-4}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                rounded="full"
                                bg="black"
                                shadow="lg"
                                onClick={() => handleScroll('left')}
                                _hover={{
                                    bg: 'gray.800'
                                }}
                                size="md"
                                minW="40px"
                                h="40px"
                            />
                        )}

                        <Box
                            id={`scroll-container-${nombre}`}
                            overflow="hidden"
                            css={{
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                },
                            }}
                            mx={8}
                            width="100%"
                        >
                            <Flex 
                                gap={6} 
                                width="max-content"
                                px={2}
                            >
                                <CardCategoriasProductos2 
                                    onAvatarClick={value => handleAvatarClick(value, nombre)} 
                                    key={nombre} 
                                    nombre={nombre} 
                                    imgSrc={imgSrc}
                                />

                                {subCategorias.map(s => (
                                    <CardCategoriasProductos
                                        onAvatarClick={value => handleAvatarClick(value, s.nombre)}
                                        key={s.nombre}
                                        nombre={s.nombre}
                                        imgSrc={s.imgSrc}
                                    />
                                ))}
                            </Flex>
                        </Box>

                        {showRightArrow && (
                            <IconButton
                                aria-label="Scroll right"
                                icon={<ChevronRightIcon boxSize={6} color="white" />}
                                position="absolute"
                                right={-4}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                rounded="full"
                                bg="black"
                                shadow="lg"
                                onClick={() => handleScroll('right')}
                                _hover={{
                                    bg: 'gray.800'
                                }}
                                size="md"
                                minW="40px"
                                h="40px"
                            />
                        )}
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
            </CardBody>
        </Card>
    );
}

export default CardCategorias;
