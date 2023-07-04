import Carousel from 'react-bootstrap/Carousel';
import slideUno from "../images/slide-1.jpg";
import slideDos from "../images/slide-2.jpg";
import slideTres from "../images/slide-3.jpg";

import styles from '../hojas_css/carousel.module.css';

const CarouselHome = () => {
  return (
    <Carousel className={styles.carouselContainer}>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={slideUno}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={slideDos}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slideTres}
        alt="Third slide"
      />
    </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;