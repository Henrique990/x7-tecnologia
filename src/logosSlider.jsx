import logo from './assets/icons/Grupo 134.png'
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const LogosSlider = () => {
    const logos = [
      { id: 1, src: logo},
      { id: 2, src: logo},
      { id: 3, src: logo},
      { id: 4, src: logo},
      { id: 5, src: logo},
      { id: 6, src: logo},
      { id: 7, src: logo},
      { id: 8, src: logo},
    ];
    const desktopOptions = {
      perPage: 5,
      autoplay: true,
      interval: 2000,
      type: 'loop',
    };
  
    const mobileOptions = {
      perPage: 2,
      autoplay: true,
      interval: 2000,
      type: 'loop',
    };
  
    return (
      <Splide options={window.innerWidth >= 800 ? desktopOptions : mobileOptions}>
        {logos.map((logo) => (
          <SplideSlide className='relative z-50 w-full mt-10 max-md:flex justify-center' key={logo.id}>
            <img src={logo.src} alt={`Logo ${logo.id}`} />
          </SplideSlide>
          
        ))}
      </Splide>
    );
  };
  
  export default LogosSlider;
  