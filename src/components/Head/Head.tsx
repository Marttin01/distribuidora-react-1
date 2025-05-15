import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import { FC } from 'react'

const Head: FC = () => {
    return (
        <Box 
            as="section" 
            mt="16" 
            position="relative"
            overflow="hidden"
        >
            {/* Contenedor principal */}
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
                    {/* Título principal */}
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

                    {/* Subtítulo */}
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
                        >
                            Descubrí nuestra amplia selección de bebidas premium para tu negocio
                        </Text>
                    </Box>
                </Flex>
            </Box>

            {/* Decoración inferior simple */}
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
