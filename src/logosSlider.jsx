import logo from './assets/icons/logo-banner.svg'
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const LogosSlider = () => {
    // const logos = [
    //   { id: 1, src: logo},
    //   { id: 2, src: logo},
    //   { id: 3, src: logo},
    //   { id: 4, src: logo},
    //   { id: 5, src: logo},
    //   { id: 6, src: logo},
    //   { id: 7, src: logo},
    //   { id: 8, src: logo},
    // ];
    const desktopOptions = {
      perPage: 5,
      autoplay: true,
      interval: 20000,
      type: 'loop',
    };
  
    const mobileOptions = {
      perPage: 2,
      autoplay: true,
      interval: 20000,
      type: 'loop',
    };
  
    return (
      <Splide className='md:px-20 space-x-0' options={window.innerWidth >= 800 ? desktopOptions : mobileOptions}>
          <SplideSlide className='flex justify-center items-center  '>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center max-md:overflow-hidden'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>
          <SplideSlide className='flex justify-center items-center'>
          <img className='md:w-full md:h-full object-cover mt-10' src={logo} alt='' />
          </SplideSlide>

          
      </Splide>
    );
  };
  
  export default LogosSlider;
  