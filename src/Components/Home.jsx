import React from "react";

import celular01 from "../assets/celular01.svg";
import fundo from "../assets/fundo-neon.svg";
import estrela04 from "../assets/estrela04.svg";
import notebook from "../assets/notebook.svg";
import linha1 from "../assets/Vector 5.png";
import linha2 from "../assets/icons/Vector 6.png";
import linha03 from "../assets/Vector 10.png";
import linha4 from "../assets/Vector 9.png";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Importe o arquivo CSS da biblioteca Splide

const Slide = () => {
  const arrowstyle = {
    // Defina a cor das setas
    color: "#e81212",
  };

  return (
    <div>
      <Splide
        options={{
          autoplay: true,
          interval: 1000000,
          type: "loop",
          perPage: 1,
          arrowStyle: { arrowstyle },
        }}
      >
        <SplideSlide className="w-full relative overflow-hidden z-50">
          <div className="max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:h-[680px] md:flex md:justify-center md:items-center overflow-hidden bg-custom-blue">
            <div className="max-md:row-start-2 flex justify-center md:w-1/2 font-montserrat text-white z-40">
              <div className="ml-0 md:ml-72">
                <p className="max-md:text-xs uppercase mb-3">nossos serviços</p>
                <p className="text-4xl md:text-7xl mb-14">
                  Desenvolvimento <br /> de
                  <span className="font-bold"> Aplicativos</span>
                </p>
                <div className="max-md:border max-md:rounded-md max-md:w-[17.3rem]">
                  <button className="relative z-50 max-md:flex max-md:justify-center max-md:items-center md:border hover:border-1 md:hover:bg-[#6D1BAC] max-md:bg-violet-800 pt-7 pb-7 pl-9 pr-9 uppercase max-md:border-none border-[#E8BCFF] rounded-3xl max-md:rounded-md max-md:m-2 max-md:w-64 max-md:h-14">
                    fale com a gente
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex">
              <img
                className="relative inset-0 -top-12 max-md:top-0 max-md:left-40 -right-20 z-30 w-[42.78rem] max-md:h-[368.68px]"
                src={celular01}
                alt=""
              />
              <img
                className="max-md:invisible relative inset-0 -top-28 -left-28 "
                src={fundo}
                alt=""
              />
              <img
                className="max-md:hidden relative inset-0 -top-20 -left-24 "
                src={estrela04}
                alt=""
              />
              <img
                className="absolute opacity-20 inset-0 top-[0rem] left-[7rem] md:invisible "
                src={estrela04}
                alt=""
              />
              <img
                className="absolute inset-0 left-[-280px] top-[-343px] max-md:left-[-227px] max-md:top-[-212px] max-md:min-w-[70rem] rotate-[-40deg] max-md:rotate-[-40deg]"
                src={linha1}
                alt=""
              />
              <img
                className="absolute fill-blue-600 max-md:invisible inset-0 top-[466px] left-28 -rotate-6"
                src={linha2}
                alt=""
              />
              <img
                className="relative inset-0 -top-20 right-[285rem]"
                src={linha4}
                alt=""
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="w-full relative h-[39rem] max-md:h-[42.5rem]  bg-gradient-to-br from-[#54074C] to-[#110710]">
          <div className="max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 md:flex md:justify-center md:items-center pb-14">
            <div className="max-md:row-start-2 flex justify-center relative max-md:top-24 max-md:right-5 top-32 md:w-1/2 font-montserrat text-white">
              <div className="ml-48 max-md:ml-0">
                <p className="max-md:text-xs uppercase mb-3">nossos serviços</p>
                <p className="text-4xl md:text-7xl mb-14">
                  Sistemas sob <br />
                  <span className="font-bold"> medida</span>
                </p>
                <div className="max-md:border max-md:rounded-md">
                  <button className="relative z-50 max-md:flex max-md:justify-center max-md:items-center hover:border-1 md:hover:bg-[#6D1BAC] max-md:bg-violet-800 pt-7 pb-7 pl-9 pr-9 uppercase border border-[#E8BCFF] max-md:border-none rounded-3xl max-md:rounded-md max-md:m-2 max-md:w-64 max-md:h-14">
                    fale com a gente
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex">
              <img
                className="absolute inset-0 left-[750px] top-20 max-md:left-12 max-md:ml-14 max-md:-top-14 z-50 h-[31.39rem] max-md:w-80"
                src={notebook}
                alt=""
              />
              <img
                className=" absolute inset-0 -top-96 left-[1100px] max-md:left-5 max-md:-top-[470px] max-md:rotate-45 max-md:min-w-[1236px]"
                src={linha03}
                alt=""
              />
              <img
                className="absolute max-md:hidden inset-0 -top-10 left-[113rem]"
                src={estrela04}
                alt=""
              />
              <img
                className="absolute max-md:invisible inset-0 top-[410px] -left-[500px]"
                src={linha2}
                alt=""
              />
              {/* <img
              className="absolute flex justify-center -bottom-2 right-2"
              src={circulo}
              alt=""
            /> */}
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export function Home() {
  return (
      <section id="home" className="w-full h-custom-section1 pt-28">
        <Slide />
      </section>
  );
}
