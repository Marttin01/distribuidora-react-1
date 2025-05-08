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