import { Center, SimpleGrid } from "@chakra-ui/react"

import { useState } from "react"
import CardCategorias from "./ProductosCategorias/CardCategorias";
import CardCategoriasProductosMain from "./ProductosCategorias/CardCategoriasProductosMain";

function CatalogoCardMain () {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

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
        ]
      }
    ]

    const handleAvatarClick = (value : boolean, categoria : string) => {
      if(value) {
        setCategoriaSeleccionada(categoria);
      }
    }

    const handleCloseIconClick = (value : boolean) => {
      if(value){
        setCategoriaSeleccionada(null);
      }
    }

    return (
        <Center display={"flex"} flexDirection={"column"} >
        <SimpleGrid marginTop={1} boxSize={'auto'} maxWidth={'100%'}spacing={1} alignItems={'center'} templateColumns='repeat(1, 1fr)' justifyContent={"center"}>

          {categoriaSeleccionada === null && (
            <>
              {/* <CardGaseosasColaCategorias onAvatarClick={(value) => handleAvatarClick(value,  "gaseosasCola")}></CardGaseosasColaCategorias>
              <CardGaseosasSabores></CardGaseosasSabores>
              <CardAguasCategorias></CardAguasCategorias>
              <CardBebidasIsotonicasCategorias></CardBebidasIsotonicasCategorias> */}
               {categorias.map( (categoria,index) => (<CardCategorias key={index} nombre={categoria.nombre} titulo={categoria.titulo} descripcion={categoria.descripcion} imgSrc={categoria.imgSrc} productos={categoria.productos} onAvatarClick={value => handleAvatarClick(value, categoria.nombre)}></CardCategorias>))}

            </>
          )}

          {categoriaSeleccionada &&(
            <>
              <CardCategoriasProductosMain onCloseIconClick={handleCloseIconClick} productos={categorias.find(c => c.nombre === categoriaSeleccionada)?.productos || []}/>
            </>
          )}

        </SimpleGrid>
        </Center>
    )
}

export default CatalogoCardMain