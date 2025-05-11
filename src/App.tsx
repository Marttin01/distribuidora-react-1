import { useEffect, useState } from "react"
import CardMain from "./components/CardMain/CardMain"
import CatalogoCardMain from "./components/CardMain/CatalogoCardMain"
import CarrouselMain from "./components/CarrouselMain/CarrouselMain"
import FooterMain from "./components/Footer/FooterMain"
import Head from "./components/Head/Head"
import TablaMenu from "./components/TablaMenu/TablaMenu"



function App(){

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  
  

  const handleAvatarClick= (categoria : string) => {
    setCategoriaSeleccionada(categoria);
  }

  useEffect(() => {
    setCategoriaSeleccionada(null)
  }, [categoriaSeleccionada]);

  return (    
  <>
    <TablaMenu sesionado={false}></TablaMenu>
    <Head></Head>
    <CarrouselMain></CarrouselMain>
    <CardMain onAvatarClick={value => handleAvatarClick(value)}></CardMain>
    <CatalogoCardMain categoria2={categoriaSeleccionada}></CatalogoCardMain>
    <FooterMain></FooterMain>
  </>     
  )

}

export default App
