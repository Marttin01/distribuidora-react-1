import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import { FC, useEffect, useState } from 'react'

const Head: FC = () => {
    const fullText = "Descubrí nuestra amplia selección de bebidas premium para tu negocio";
    const [displayText, setDisplayText] = useState("");
    const [showDots, setShowDots] = useState(false);

    useEffect(() => {
        setDisplayText(""); // Reset del texto
        let timeouts: number[] = []; // Cambiado el tipo
        
        // Escribimos el texto caracter por caracter
        [...fullText].forEach((char, index) => {
            const timeout = setTimeout(() => {
                setDisplayText(text => text + char);
                if (index === fullText.length - 1) {
                    setShowDots(true);
                }
            }, 50 * index);
            
            timeouts.push(timeout);
        });

        // Limpieza de timeouts
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
            setDisplayText("");
            setShowDots(false);
        };
    }, []);

    return (
        <Box 
            as="section" 
            mt="16" 
            position="relative"
            overflow="hidden"
        >
            {/* El resto del código sigue igual */}
            <Box
                w="100%"
                bg="ButtonShadow"
                py={10}
                position="relative"
            >
                <Flex 
                    direction="column" 
                    align="center" 
                    gap={6}
                    position="relative"
                    zIndex={1}
                >
                    <Box
                        maxW="1200px"
                        w="100%"
                        px={4}
                        position="relative"
                    >
                        <Heading 
                            textAlign="center"
                            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                            fontWeight="bold"
                            color="black"
                            letterSpacing="wide"
                            textTransform="uppercase"
                            py={3}
                            position="relative"
                            _after={{
                                content: '""',
                                position: "absolute",
                                bottom: "0",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "80px",
                                height: "3px",
                                bg: "black",
                                borderRadius: "full"
                            }}
                        >
                            ¿QUÉ PRODUCTOS VAS A PEDIR HOY?
                        </Heading>
                    </Box>

                    <Box
                        bg="white"
                        py={3}
                        px={8}
                        borderRadius="full"
                        boxShadow="md"
                        maxW="max-content"
                        mx="auto"
                        transition="all 0.3s ease"
                        _hover={{
                            boxShadow: "lg",
                            transform: "translateY(-2px)"
                        }}
                    >
                        <Text 
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="medium"
                            color="gray.700"
                            textAlign="center"
                            letterSpacing="tight"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {displayText}
                            {showDots && (
                                <Text
                                    as="span"
                                    ml={1}
                                    sx={{
                                        animation: 'blink 1.5s infinite',
                                        '@keyframes blink': {
                                            '0%': { opacity: 0 },
                                            '50%': { opacity: 1 },
                                            '100%': { opacity: 0 }
                                        }
                                    }}
                                >
                                    ...
                                </Text>
                            )}
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Box
                width="100%"
                height="1px"
                bg="gray.200"
                mt={6}
            />
        </Box>
    )
}

export default Head
