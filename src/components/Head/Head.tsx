import { Box, Heading, Text, Flex, Icon } from "@chakra-ui/react"
import { FaWineBottle, FaGlassCheers } from "react-icons/fa"
import { FC } from 'react'

const Head: FC = () => {
    return (
        <Box 
            as="section" 
            py={4} 
            mt="16" 
            position="relative"
            _before={{
                content: '""',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '2px', 
                background: 'linear-gradient(90deg, #CBD5E0, #2D3748, #CBD5E0)',
                borderRadius: 'full'
            }}
        >
            <Flex 
                direction="column" 
                align="center" 
                gap={2} 
            >
                <Flex 
                    gap={3} 
                    align="center" 
                    mb={1} 
                >
                    <Icon 
                        as={FaWineBottle} 
                        w={6} 
                        h={6} 
                        color="gray.600"
                        transform="rotate(-15deg)"
                    />
                    <Heading 
                        textAlign="center"
                        fontSize={"xxx-large"}
                        fontWeight="bold"
                        bgGradient="linear(to-r, gray.700, gray.900)"
                        bgClip="text"
                        letterSpacing="tight"
                    >
                        ¿Qué productos vas a pedir hoy?
                    </Heading>
                    <Icon 
                        as={FaGlassCheers} 
                        w={6} // Reducido de 8
                        h={6} // Reducido de 8
                        color="gray.600"
                        transform="rotate(15deg)"
                    />
                </Flex>
                <Text 
                    color="gray.600" 
                    fontSize={{ base: "xs", md: "sm" }} // Reducidos los tamaños
                    maxW="2xl"
                    textAlign="center"
                    px={3} // Reducido de 4
                >
                    Descubrí nuestra amplia selección de bebidas premium para tu negocio
                </Text>
            </Flex>
        </Box>
    )
}

export default Head
