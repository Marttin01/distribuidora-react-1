import Carousel from 'react-bootstrap/Carousel';

function CarrouselMain() {
  return (
    <Carousel  style={{marginTop: '40px'}} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block mx-auto w-100 h-10"
          src='https://img.freepik.com/fotos-premium/cola-fondo-comida-hielo-elemento-diseno-primer-plano-cola-cerveza-burbujas-macro_387864-1782.jpg?uid=R194175925&semt=ais_hybrid'
          alt="First slide"
          height={'20%'}
        
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/cola-fondo-comida-hielo-elemento-diseno-primer-plano-cola-cerveza-burbujas-macro_387864-1782.jpg?uid=R194175925&semt=ais_hybrid"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://img.freepik.com/fotos-premium/cola-fondo-comida-hielo-elemento-diseno-primer-plano-cola-cerveza-burbujas-macro_387864-1782.jpg?uid=R194175925&semt=ais_hybrid"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselMain;