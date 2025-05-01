import CardMain from "./components/CardMain/CardMain"
import CatalogoCardMain from "./components/CardMain/CatalogoCardMain"
import CarrouselMain from "./components/CarrouselMain/CarrouselMain"
import Head from "./components/Head/Head"
import TablaMenu from "./components/TablaMenu/TablaMenu"



function App(){

  return (    
  <>
    <TablaMenu sesionado={false}></TablaMenu>
    <Head></Head>
    <CarrouselMain></CarrouselMain>
    <CardMain></CardMain>
    <CatalogoCardMain></CatalogoCardMain>
  </>     
  )

}

export default App
