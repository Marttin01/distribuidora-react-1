import { Center, SimpleGrid } from "@chakra-ui/react"

import  {  useEffect, useState } from "react"
import CardCategorias from "./ProductosCategorias/CardCategorias";
import CardCategoriasProductosMain from "./ProductosCategorias/CardCategoriasProductosMain";

interface Props {
  categoria2: string | null | undefined;
}

function CatalogoCardMain ({categoria2} : Props) {

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
          },
          {
            nombre:"pepsi",
            titulo:"PEPSI",
            descripcion:"Gaseosas marca pepsi",
            imgSrc:"https://bit.ly/kent-c-dodds",
            productos:[
              {
                nombre:"Pepsi 500ml x6",
                precio:1000,
                descripcion:"Pepsi sabor original zero",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsi",
                stock:10
              },
              {
                nombre:"Pepsi 1L x6",
                precio:2000,
                descripcion:"Pepsi sabor original",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsi",
                stock:10
              },
              {
                nombre:"Pepsi 2L x6",
                precio:4000,
                descripcion:"Pepsi sabor original",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsi",
                stock:10
              }
            ]
          },
          {
            nombre:"pepsizero",
            titulo:"PEPSI ZERO",
            descripcion:"Gaseosas marca pepsi zero azucar",
            imgSrc:"https://bit.ly/kent-c-dodds",
            productos:[
              {
                nombre:"Pepsi 500ml zero x6",
                precio:1000,
                descripcion:"Pepsi sabor original zero",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsizero",
                stock:10
              },
              {
                nombre:"Pepsi 1L zero x6",
                precio:2000,
                descripcion:"Pepsi sabor original zero azucar",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsizero",
                stock:10
              },
              {
                nombre:"Pepsi 2L zero x6",
                precio:4000,
                descripcion:"Pepsi sabor original zero",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsizero",
                stock:10
              }
            ]
          },
          {
            nombre:"pepsitwist",
            titulo:"PEPSI TWIST",
            descripcion:"Gaseosas marca pepsi twist",
            imgSrc:"https://bit.ly/kent-c-dodds",
            productos:[
              {
                nombre:"Pepsi 500ml twist x6",
                precio:1000,
                descripcion:"Pepsi sabor original twist",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsitwist",
                stock:10
              },
              {
                nombre:"Pepsi 1L twist x6",
                precio:2000,
                descripcion:"Pepsi sabor original twist",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsitwist",
                stock:10
              },
              {
                nombre:"Pepsi 2L twist x6",
                precio:4000,
                descripcion:"Pepsi sabor original twist",
                imgSrc:"https://bit.ly/prosper-baba",
                categoria:"pepsitwist",
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

   const [categoriaActual, setCategoriaActual] = useState<string | null>(null);
   const [categoriaYsubcategoriaActual, setCategoriaYsubcategoriaActual] = useState<string | null>(null);
   
   
    const handleAvatarClick = (value : boolean, categoria  : string) => {
      if(value) {
        setCategoriaActual(categoria);
        setCategoriaYsubcategoriaActual(null);
      }
    }

    const handleAvatarClick2 = (categoria : string) =>{
      setCategoriaYsubcategoriaActual(categoria);
    }
   
    const handleCloseIconClick = (value : boolean) => {
      if(value){
        setCategoriaActual(null);
        setCategoriaYsubcategoriaActual(null);
      }  
    }

    useEffect(() => {
    if (categoria2) {
      setCategoriaActual(null)
      handleAvatarClick2(categoria2);
    }
    }, [categoria2]);

    return (

        <Center display={"flex"} flexDirection={"column"} >
        <SimpleGrid marginTop={1} boxSize={'auto'} maxWidth={'100%'}spacing={1} alignItems={'center'} templateColumns='repeat(1, 1fr)' justifyContent={"center"}>

          {(!categoriaActual && !categoriaYsubcategoriaActual)  &&(
            <>
               {categorias.map( (categoria,index) => (<CardCategorias key={index} titulo={categoria.titulo} subCategorias={categoria.subCategorias} imgSrc={categoria.imgSrc} nombre={categoria.nombre} onAvatarClick={(value,categoria) => handleAvatarClick(value, categoria)}></CardCategorias>))}
            </>
          )}

          {(categoriaActual && !categoriaYsubcategoriaActual) &&(
            <>
              <CardCategoriasProductosMain onCloseIconClick={handleCloseIconClick} productos={categorias.find(c => c.nombre === categoriaActual)?.productos || categorias.flatMap(c => c.subCategorias).find(s => s.nombre === categoriaActual)?.productos || []}/>
            </>
          )}

          {(!categoriaActual && categoriaYsubcategoriaActual) && (
            <>
              <CardCategoriasProductosMain onCloseIconClick={handleCloseIconClick} productos={(() => {
                const categoriaEncontrada = categorias.find( c => c.nombre === categoriaYsubcategoriaActual)
                if(!categoriaEncontrada) return [];
                const productosCategoria = categoriaEncontrada.productos || []
                const productosSubCategorias = categoriaEncontrada.subCategorias?.flatMap( s => s.productos) || []
                return [...productosCategoria,...productosSubCategorias]
            })()}/>
            </>
          )}

        </SimpleGrid>
        </Center>
    )
}

export default CatalogoCardMain