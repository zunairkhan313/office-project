// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import ProductCard from '../ProductCards/product_card';

// const CardSliderCarousel = ({ products }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     responsive: [
//       {
//         breakpoint: 1124,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 0
//         }
//       },
//     ]
//   };

//   return (
//     <Slider {...settings}>
//       {products.map((product, index) => (
//         <div key={index}>
//           <div className="flex justify-center items-center">
//             <ProductCard ImgUrl={product.imageUrl} title={product.title} />
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default CardSliderCarousel;



// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ProductCard from "../ProductCards/product_card";

// export default function CardSliderCarousel({ products }) {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 768, min: 0 },
//       items: 1
//     }
//   };
//   return (
//     <>
//       <Carousel responsive={responsive}>
//         {products.map((product, index) => (
//           <div key={index}>
//             <div className="flex justify-center items-center">
//               <ProductCard ImgUrl={product.imageUrl} title={product.title} />
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </>
//   )
// }


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider_image_1 from '../../../Images/Slider-Img-1.jpg';
import slider_image_2 from '../../../Images/Slider-Img-2.jpg';
import slider_image_3 from '../../../Images/Slider-Img-3.jpg';
import slider_image_4 from '../../../Images/Slider-Img-4.jpg';
import slider_image_5 from '../../../Images/Slider-Img-5.jpg';
import slider_image_6 from '../../../Images/Slider-Img-6.jpg';
import slider_image_7 from '../../../Images/Slider-Img-7.jpg';
import slider_image_8 from '../../../Images/Slider-Img-8.jpg';
import slider_image_9 from '../../../Images/Slider-Img-9.jpg';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './cards_slider.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';


function CardSliderCarousel() {
  
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider_image_1} alt="slide_image_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_2} alt="slide_image_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_8} alt="slide_image_3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_4} alt="slide_image_4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_5} alt="slide_image_5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_6} alt="slide_image_6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_7} alt="slide_image_7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_3} alt="slide_image_8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_9} alt="slide_image_9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CardSliderCarousel;