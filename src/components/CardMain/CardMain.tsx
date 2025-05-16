import { 
  Card, 
  CardBody, 
  IconButton, 
  Flex, 
  Box,
  Heading
} from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import CategoriasCardMain from "./CategoriasCardMain"
import { useState, useEffect } from "react"

    const categorias = [

      {
        nombre: "gaseosasCola",
        titulo:"GASEOSAS COLAS",
        descripcion:" Gaseosas marca coca cola",
        imgSrc:"https://bit.ly/code-beast",
        productos:[
          {
            nombre:"Coca Cola 500ml x6",
            precio:1000,
            descripcion:"Coca cola sabor original",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"gaseosasCola",
            stock:10
          },
          {
            nombre:"Coca Cola 1L x6",
            precio:2000,
            descripcion:"Coca cola sabor original",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"gaseosasCola",
            stock:10
          },
          {
            nombre:"Coca Cola 2L x6",
            precio:4000,
            descripcion:"Coca cola sabor original",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"gaseosasCola",
            stock:10
          }
        ],
        subCategorias: [
          {
            nombre:"gaseosasColaSinAzucar",
            titulo:"GASEOSAS COLA SIN AZUCAR",
            descripcion:"Gaseosas marca coca cola sin azucar",
            imgSrc:"https://bit.ly/kent-c-dodds",
            productos:[
              {
                nombre:"Coca Cola 500ml sin azucar x6",
                precio:1000,
                descripcion:"Coca cola sabor original sin azucar",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"gaseosasColaSinAzucar",
                stock:10
              },
              {
                nombre:"Coca Cola 1L sin azucar x6",
                precio:2000,
                descripcion:"Coca cola sabor original sin azucar",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"gaseosasColaSinAzucar",
                stock:10
              },
              {
                nombre:"Coca Cola 2L sin azucar x6",
                precio:4000,
                descripcion:"Coca cola sabor original",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"gaseosasColaSinAzucar",
                stock:10
              }
            ]
          },
          {
            nombre:"gaseosasColaZero",
            titulo:"GASEOSAS COLA ZERO",
            descripcion:"Gaseosas marca coca cola zero",
            imgSrc:"https://bit.ly/kent-c-dodds",
            productos:[
              {
                nombre:"Coca Cola 500ml zero x6",
                precio:1000,
                descripcion:"Coca cola sabor original zero",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"gaseosasColaZero",
                stock:10
              },
              {
                nombre:"Coca Cola 1L zero x6",
                precio:2000,
                descripcion:"Coca cola sabor original zero",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"gaseosasColaZero",
                stock:10
              },
              {
                nombre:"Coca Cola 2L zero x6",
                precio:4000,
                descripcion:"Coca cola sabor original",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"gaseosasColaZero",
                stock:10
              }
            ]
          }
        ]
      },



      {
        nombre: "gaseosasSabores",
        titulo:"GASEOSAS SABORES",
        descripcion:" Gaseosas de sabores",
        imgSrc:"https://bit.ly/code-beast",
        productos:[
          {
            nombre:"Aquarius 500ml x6",
            precio:1000,
            descripcion:"Aquarius sabor original",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"gaseosasSabores",
            stock:10
          },
          {
            nombre:"Aquarius 1L x6",
            precio:2000,
            descripcion:"Aquarius sabor original",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"gaseosasSabores",
            stock:10
          },
          {
            nombre:"Aquarius 2L x6",
            precio:4000,
            descripcion:"Aquarius sabor original",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"gaseosasSabores",
            stock:10
          }
        ],
        subCategorias: [
          {
            nombre:"gaseosasSaboresSprite",
            titulo:"GASEOSAS SPRITE",
            descripcion:"Gaseosas marca sprite",
            imgSrc:"https://bit.ly/ryan-florence",
            productos:[
              {
                nombre:"Sprite 500ml x6",
                precio:1000,
                descripcion:"Sprite sabor original sin azucar",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"gaseosasSaboresSprite",
                stock:10
              },
              {
                nombre:"Sprite 1L x6",
                precio:2000,
                descripcion:"Sprite sabor original ",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"gaseosasSaboresSprite",
                stock:10
              },
              {
                nombre:"Sprite 2L x6",
                precio:4000,
                descripcion:"Sprite sabor original ",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"gaseosasSaboresSprite",
                stock:10
              }
            ]
          },
          {
            nombre:"gaseosasSaboresFanta",
            titulo:"GASEOSAS FANTA",
            descripcion:"Gaseosas marca fanta",
            imgSrc:"https://bit.ly/kent-c-dodds",
            productos:[
              {
                nombre:"Fanta 500ml x6",
                precio:1000,
                descripcion:"Fanta sabor original",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"gaseosasSaboresFanta",
                stock:10
              },
              {
                nombre:"Fanta 1L x6",
                precio:2000,
                descripcion:"Fanta sabor original ",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"gaseosasSaboresFanta",
                stock:10
              },
              {
                nombre:"Fanta 2L x6",
                precio:4000,
                descripcion:"Fanta sabor original ",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"gaseosasSaboresFanta",
                stock:10
              }
            ]
          }
        ]
      },



      {
        nombre: "aguas",
        titulo:"AGUAS SABORIZADAS",
        descripcion:" Aguas saborizadas",
        imgSrc:"https://bit.ly/code-beast",
        productos:[
          {
            nombre:"Agua SmartWater 500ml x6",
            precio:1000,
            descripcion:"Agua SmartWater",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"aguas",
            stock:10
          },
          {
            nombre:"Agua SmartWater 1L x6",
            precio:2000,
            descripcion:"Agua SmartWater",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"aguas",
            stock:10
          },
          {
            nombre:"Agua SmartWater 2L x6",
            precio:4000,
            descripcion:"Agua SmartWater",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"aguas",
            stock:10
          }
        ],
        subCategorias: [
          {
            nombre:"aguasConGas",
            titulo:"AGUAS CON GAS",
            descripcion:"Aguas SmartWater con gas",
            imgSrc:"https://bit.ly/ryan-florence",
            productos:[
              {
                nombre:"Agua SmartWater con gas 500ml x6",
                precio:1000,
                descripcion:"Aguas SmartWater con gas",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"aguasConGas",
                stock:10
              },
              {
                nombre:"Agua SmartWater con gas 1L x6",
                precio:2000,
                descripcion:"Aguas SmartWater con gas ",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"aguasConGas",
                stock:10
              },
              {
                nombre:"Agua SmartWater con gas 2L x6",
                precio:4000,
                descripcion:"Aguas SmartWater con gas",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"aguasConGas",
                stock:10
              }
            ]
          }
        ]      
      },



      {
        nombre: "bebidasIsotonicas",
        titulo:"BEBIDAS ISOTONICAS",
        descripcion:" Bebidas isotonicas",
        imgSrc:"https://bit.ly/code-beast",
        productos:[
          {
            nombre:"Monster 500ml x6",
            precio:1000,
            descripcion:"Monster",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"bebidasIsotonicas",
            stock:10
          },
          {
            nombre:"Monster 1L x6",
            precio:2000,
            descripcion:"Monster",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"bebidasIsotonicas",
            stock:10
          },
          {
            nombre:"Monster 2L x6",
            precio:4000,
            descripcion:"Monster",
            imgSrc:"https://bit.ly/code-beast",
            categoria:"bebidasIsotonicas",
            stock:10
          }
        ],
        subCategorias: [
          {
            nombre:"bebidasIsotonicasSinAzucar",
            titulo:"MONSTER SIN AZUCAR",
            descripcion:"Monster sin azucar",
            imgSrc:"https://bit.ly/ryan-florence",
            productos:[
              {
                nombre:"Monster sin azucar 500ml x6",
                precio:1000,
                descripcion:"Monster sin azucar",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"bebidasIsotonicasSinAzucar",
                stock:10
              },
              {
                nombre:"Monster sin azucar 1L x6",
                precio:2000,
                descripcion:"Monster sin azucar ",
                imgSrc:"https://bit.ly/tioluwani-kolawole",
                categoria:"bebidasIsotonicasSinAzucar",
                stock:10
              }
            ]
          }
        ]
      }

   ]

   interface Props {
    onAvatarClick: (value: string) => void;
}

function CardMain({onAvatarClick}: Props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleAvatarClick = (categoria: string) => {
        onAvatarClick(categoria);
    }

    const handleScroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('categories-container');
        if (container) {
            const scrollAmount = 200;
            const newPosition = direction === 'left' 
                ? scrollPosition - scrollAmount 
                : scrollPosition + scrollAmount;

            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });

            setScrollPosition(newPosition);
        }
    }

    const checkScrollButtons = () => {
        const container = document.getElementById('categories-container');
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < (container.scrollWidth - container.clientWidth)
            );
        }
    }

    useEffect(() => {
        const container = document.getElementById('categories-container');
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            checkScrollButtons();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScrollButtons);
            }
        };
    }, []);

    return (
        <Card 
            backgroundColor={'ButtonShadow'} 
            p={6}
            mt={7}
            borderRadius="xl"
            boxShadow="sm"
        >
            <CardBody>
                <Heading 
                    size="md" 
                    mb={4}
                    color="gray.700"
                    fontWeight="bold"
                >
                    Categorías
                </Heading>

                <Flex 
                    position="relative" 
                    align="center" 
                    bg="white" 
                    p={4} 
                    borderRadius="xl"
                    boxShadow="sm"
                >
                    {showLeftArrow && (
                        <IconButton
                            aria-label="Scroll left"
                            icon={<ChevronLeftIcon boxSize={6} color="white" />}
                            position="absolute"
                            left={2}
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
                        />
                    )}

                    <Box
                        id="categories-container"
                        overflow="hidden"
                        css={{
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            },
                        }}
                        mx={10}
                        width="100%"
                    >
                        <CategoriasCardMain 
                            onAvatarClick={handleAvatarClick} 
                            categorias={categorias}
                        />
                    </Box>

                    {showRightArrow && (
                        <IconButton
                            aria-label="Scroll right"
                            icon={<ChevronRightIcon boxSize={6} color="white" />}
                            position="absolute"
                            right={2}
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
                        />
                    )}
                </Flex>
            </CardBody>
        </Card>
    )
}

export default CardMain