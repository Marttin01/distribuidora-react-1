import CardMain from "./components/CardMain/CardMain"
import CatalogoCardMain from "./components/CardMain/CatalogoCardMain"
import CarrouselMain from "./components/CarrouselMain/CarrouselMain"
import FooterMain from "./components/Footer/FooterMain"
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
    <FooterMain></FooterMain>
  </>     
  )

}

export default App
