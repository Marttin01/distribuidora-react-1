import { Box } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
}

function CarrouselMain() {
  const slides: CarouselSlide[] = [
    {
      image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1920&auto=format",  // Nueva imagen de bebidas variadas
      title: "Distribuidor Oficial de Bebidas",
      description: "La mayor variedad de bebidas para tu negocio"
    },
    {
      image: "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?q=80&w=1920&auto=format",
      title: "Entregas en 24hs",
      description: "Servicio rápido y eficiente para todo el país"
    },
    {
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format",  // Nueva imagen de almacén de bebidas
      title: "Las Mejores Marcas",
      description: "Trabajamos con las marcas líderes del mercado"
    }
  ];

  return (
    <>
      <style>
        {`
          .custom-carousel .carousel-control-prev-icon,
          .custom-carousel .carousel-control-next-icon {
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            padding: 20px;
          }

          .custom-carousel .carousel-control-prev,
          .custom-carousel .carousel-control-next {
            width: 5%;
            opacity: 0.8;
          }

          .custom-carousel .carousel-control-prev:hover,
          .custom-carousel .carousel-control-next:hover {
            opacity: 1;
          }

          .custom-carousel .carousel-control-prev-icon,
          .custom-carousel .carousel-control-next-icon {
            width: 40px;
            height: 40px;
            background-size: 100%, 100%;
          }
        `}
      </style>
      <Box 
        mt="65px"
        position="relative"
        width="100%"
        height="500px"
        overflow="hidden"
        className="custom-carousel"
      >
        <Carousel 
          fade
          interval={5000}
          prevIcon={<span style={{ color: 'white', fontSize: '2rem' }}>&lsaquo;</span>}
          nextIcon={<span style={{ color: 'white', fontSize: '2rem' }}>&rsaquo;</span>}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div style={{
                width: '100%',
                height: '500px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    filter: 'brightness(0.7)'
                  }}
                />
                <Carousel.Caption style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  padding: '20px',
                  maxWidth: '600px',
                  margin: '0 auto',
                  bottom: '50%',
                  transform: 'translateY(50%)'
                }}>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#FFFFFF',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {slide.title}
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#E2E8F0',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}>
                    {slide.description}
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default CarrouselMain;
