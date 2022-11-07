import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='relative'>
    <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={true} showThumbs={false} showArrows={true} interval={5000} >

        <div><img src="/img/Cr1.jpg" alt="Pics not found"  /></div>
        <div><img src="/img/Cr2.jpg" alt="Imgae not found"  /></div>
        <div><img src="/img/Cr3.jpg" alt="Imgae not found"  /></div>
        <div><img src="/img/Cr4.jpg" alt="Imgae not found"  /></div>
        <div><img src="/img/Cr5.jpg" alt="Imgae not found"  /></div>
        <div><img src="/img/Cr6.jpg" alt="Imgae not found"  /></div>
        <div><img src="/img/Cr7.jpg" alt="Imgae not found"  /></div>
      </Carousel>
    </div>
  )
}

export default Banner
