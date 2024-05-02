import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../../Images/Banner1.png"
import Banner2 from "../../../Images/Banner2.jpg"
import Banner3 from "../../../Images/Banner3.jpg"

export default function CarouselPage() {
 
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Banner3} alt="Banner 1" className='img-fluid w-full max-w-full'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner1} alt="Banner 2" className='img-fluid w-full max-w-full'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner2} alt="Banner 3" className='img-fluid w-full max-w-full'/>
      </Carousel.Item>
    </Carousel>
  );
}