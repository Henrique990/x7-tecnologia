import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import data from "./data.json";
import LogosSlider from "./logosSlider";

import x7 from "./assets/x7-tecnologia.svg";
import celular01 from "./assets/celular01.svg";
import estrela from "./assets/estrela.svg";
import estrela2 from "./assets/estrela2.svg";
import notebook from "./assets/notebook.svg";
import outsourcing from "./assets/Grupo 111.png";
import devOps from "./assets/Grupo de máscara 41.png";
import celular02 from "./assets/celular02.svg";
import celular03 from "./assets/celular03.svg";
import iconsCelular from "./assets/icons/mobile-button.png";
import iconEmail from "./assets/icons/envelope.png";
import iconWhatsApp from "./assets/icons/whatsapp.png";
import iconFacebook from "./assets/icons/facebook.png";
import iconTwitter from "./assets/icons/twitter.png";
import iconInstagram from "./assets/icons/instagram.png";
import iconLinkedin from "./assets/icons/linkedin.png";
import estrela03 from "./assets/estrela03.svg";
import barra from "./assets/icons/barra-rosa.svg";
import verificado from "./assets/icons/verificado-rosa.svg";
import fundo from "./assets/fundo-neon.svg";
import estrela04 from "./assets/estrela04.svg";
import linha1 from "./assets/Vector 5.png";
import linha2 from "./assets/icons/Vector 6.svg";
import seta1 from "./assets/Grupo 130.svg";
import seta2 from "./assets/Grupo 131.svg";
import seta3 from "./assets/Grupo 132.svg";
import seta4 from "./assets/Grupo 133.svg";
import bg from "./assets/bg.png";
import bg2 from "./assets/Grupo de máscara 14.png";
import celularBG from "./assets/Grupo de máscara 34.svg";
import x72 from "./assets/icons/Grupo 110.png";
import linha03 from "./assets/Vector 10.png";
import kibana from "./assets/kibana.svg";
import mongoDB from "./assets/mongo-db.svg";
import netcore from "./assets/net-core.svg";
import node from "./assets/node.svg";
import sql from "./assets/sql-server.svg";
import react from "./assets/react.svg";
import elasticsearch from "./assets/elasticsearch.svg";
import mysql from "./assets/mysql.svg";
import logox7 from "./assets/logo-x7.svg";
import qrcode from "./assets/qrcode.svg";
import mensagem from "./assets/icons/mensagem.svg";
import celular from "./assets/icons/celular.svg";
import persona from "./assets/icons/persona.svg";
import conversa from "./assets/icons/conversa.svg";
import estrelax7 from "./assets/estrelax7.svg";
import linha4 from "./assets/Vector 9.png";
import whatsappRoxo from "./assets/whatsapp-roxo.svg";
import bgFixed from "./assets/bg-celular-fixed.svg";
import bg03 from "./assets/bg03.svg";
import whatsapp from "./assets/icons/whatsapp.png";
import estrelax72 from "./assets/estrelax7-2.svg";
import notebookpng from "./assets/Imagem 28.png";
import circulo from "./assets/icons/circulo.svg";

// import { Splide, SplideSlide } from "@splidejs/react-splide";

// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Importe o arquivo CSS da biblioteca Splide

const Slide = () => {

  const arrowstyle = {
    // Defina a cor das setas
    color: '#e81212'
  }

  return (
      
    <div>
    <Splide
      options={{ autoplay: true, interval: 1000000, type: "loop", perPage: 1, arrowStyle:{arrowstyle}
    }}
    >
      <SplideSlide>
        <div className="max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:h-[680px] md:flex md:justify-center md:items-center overflow-hidden bg-custom-blue">
          <div className="max-md:row-start-2 flex justify-center md:w-1/2 font-montserrat text-white">
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
              className="relative inset-0 -top-28 right-10 max-md:hidden"
              src={fundo}
              alt=""
            />
            <img
              className="relative inset-0 -top-20 right-24 max-md:hidden"
              src={estrela04}
              alt=""
            />
            <img className="relative inset-0 " src={linha1} alt="" />
            <img className="relative inset-0 " src={linha2} alt="" />
            <img
              className="relative inset-0 -top-20 right-[285rem]"
              src={linha4}
              alt=""
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide className="h-[38rem]">
        <div className="max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 md:flex md:justify-center md:items-center pb-14 overflow-hidden bg-gradient-to-br from-[#54074C] to-[#110710]">
          <div className="max-md:row-start-2 flex justify-center relative max-md:-top-40 max-md:right-10 -top-16 md:w-1/2 font-montserrat text-white">
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
              className="relative inset-0 right-36 top-20 max-md:ml-14 max-md:-top-10 z-50 h-[31.39rem] max-md:w-80"
              src={notebook}
              alt=""
            />
            <img
              className="relative inset-0 -top-52 right-80"
              src={linha03}
              alt=""
            />
            <img
              className="relative inset-0 -top-36 right-[45rem]"
              src={estrela04}
              alt=""
            />
            <img
              className="relative inset-0 top-48 right-[210rem]"
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

const Slide2 = () => {
  return (
    <Splide options={{ perPage: 1, arrows: "red" }}>
      <div className="flex text-center font-semibold text-[#8E09E3] mt-16 gap-4">
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 1
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 2
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 3
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 4
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 5
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 6
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 7
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
            logo 8
          </div>
        </SplideSlide>
      </div>
    </Splide>
  );
};

function FloatingContainer(props) {
  const [showContainer, setShowContainer] = useState(false);

  function handleClick() {
    setShowContainer(true);
  }

  return (
    <>
      <button className="max-md:text-xs" onClick={handleClick}>
        VER MAIS
      </button>
      {showContainer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-[#0B002B] bg-opacity-90 w-[84.5rem] h-[50.62rem] rounded-3xl p-5 relative max-md:w-[23rem]">
            <button
              className="absolute top-10 right-14 max-md:top-5 max-md:right-10 text-white text-6xl max-md:text-3xl font-light"
              onClick={() => setShowContainer(false)}
            >
              X
            </button>
            <div className="flex max-md:flex-col mt-10 max-md:mt-5 ml-24 max-md:ml-0">
              <div className="md:w-2/3 max-md:w-full text-left space-y-8 max-md:space-y-4">
                <h1 className="text-white text-5xl font-extrabold mb-4 max-md:text-2xl">
                  {props.titulo}
                </h1>
                <p className="text-white text-2xl max-md:text-base mb-4 font-medium">
                  {props.text1}
                </p>
                <p className="text-white text-2xl mb-4 font-light max-md:text-sm">
                  {props.text2}
                </p>
                <div>
                  <button
                    src="#"
                    className="relative z-50 w-[21.25rem] h-[5.75rem] max-md:w-[19rem] max-md:h-[4rem] text-2xl max-md:text-lg font-bold bg-gradient-to-b from-custom-purple1 to-custom-purple2 text-white px-4 py-2 rounded-lg mr-4 mt-5"
                  >
                    FAÇA UM ORÇAMENTO
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 mt-12 max-md:pl-20 overflow-hidden">
                <div className="rounded-3xl ml-20 max-md:ml-0 w-[15rem] h-[31.06rem] bg-gradient-to-b from-[#75319B] to-[#4C0087] hover:bg-purple-950 max-md:rotate-90 max-md:relative max-md:-top-8 max-md:w-[10rem] max-md:h-[18rem]">
                  <img className="" src={bgFixed} alt="Imagem" />
                </div>
                <img
                  className="md:animate-bounce relative -top-80 -right-9 max-md:-top-72 max-md:right-14 w-[18.62rem] h-[15.42rem] max-md:min-w-[15rem]"
                  src={props.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const App = () => (
  <div className="w-full aspect-auto font-montserrat bg-white overflow-hidden text-black">
    {/* 1 */}
    <header className="flex justify-between w-full z-50 h-28 items-center bg-custom-blue fixed top-0 2xl:pl-64 2xl:pr-64  whitespace-nowrap ">
      <div className="flex items-center gap-5 md:gap-2 text-center mr-5 max-md:ml-8">
        <img className="w-10 max-md:w-8 " src={estrela03} alt="" />
        <img className="min-w-[210px] max-w-[260px] max-md:min-w-[9rem] max-md:max-w-[11rem]" src={x7} alt="" />
      </div>

      <nav className="hidden md:block">
        <div className="flex items-center xl:gap-9 md:gap-3 ml-28 md:ml-10 mr-20 md:mr-10 text-white md:text-xl">
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="home" smooth={true} duration={500} className="" href="">
              Home
            </Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className=""
              href=""
            >
              Serviços
            </Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="abount" smooth={true} duration={500} className="" href="">
              Sobre a X7
            </Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="acting" smooth={true} duration={500} className="" href="">
              Atuação
            </Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="speak" smooth={true} duration={500} className="" href="">
              Fale com a gente
            </Link>
          </div>
        </div>
      </nav>

      <button className="ml-5 mr-5 hover:bg-gradient-to-r hover:from-custom-purple2 hover:to-custom-purple1 z-30 rounded-3xl border-[#707070] text-md xl:text-base px-7 py-5 text-white bg-gradient-to-b from-custom-purple1 to-custom-purple2 hidden lg:block">
        PEÇA UM ORÇAMENTO
      </button>
    </header>
    {/* 2 */}
    <section id="home" className="w-full h-custom-section1 pt-28">
      <Slide />

      {/* <div>
            <img src={celular01} alt="" />
            <p className="">nossos serviços</p>
            <p className="text-2xl">
              Desenvolvimento <br /> de
              <span> Aplicativo</span>
            </p>
            <button className="">fale com a gente</button>
          </div> */}
    </section>
    {/* 3 */}
    <section id="services">
      <div className="flex items-center justify-center mt-20 mb-11">
        <img src={barra} alt="" />
      </div>
      <p className="max-md:text-base flex items-center justify-center text-xl uppercase text-[#0C5ADB]">
        o que fazemos
      </p>
      <p className="max-md:text-2xl max-md:text flex items-center justify-center text-6xl mb-28 max-md:mb-7 text-black">
        Conheça nossos<span className="font-bold ml-5"> serviços</span>
        <a className="max-md:hidden" href="">
          <img
            className="fixed z-50 bottom-7 right-7 hover:animate-bounce"
            src={whatsappRoxo}
            alt=""
          />
        </a>
      </p>
      <div className="flex justify-center gap-1 mb-32 max-md:grid max-md:grid-cols-2 max-md:place-items-center max-md:mx-7 max-md:gap-4">
        <article className="max-md:w-[159px] max-md:h-[212px] w-custom-article h-custom-article border-2 border-[#7403CB] rounded-t-3xl overflow-hidden rounded-b-3xl">
          <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] max-md:h-[133px]">
            <img
              className="w-full h-full object-contain"
              src={notebook}
              alt=""
            />
          </div>
          <div className="p-4 ml-3 max-md:p-0">
            <h4 className="text-3xl max-md:text-base text-[#D909AE] font-semibold mb-2 max-md:mb-0">
              Sistema Sob Medida
            </h4>
            <p className="max-md:hidden">
              Sistemas sob medida lhes permite ter
              <span>
                soluções personalizadas para suas necessidades específicas de
                negócios.
              </span>
            </p>
            <div className="flex space-x-3 mt-28 max-md:mt-0 max-md:w-[120.06px] max-md:h-[15.04px] text-lg text-[#9899A7]">
              <div className="flex space-x-3 max-md:space-x-1">
                <img
                  className="w-6 h-6 max-md:w-4 max-md:h-4"
                  src={seta1}
                  alt=""
                />
                <FloatingContainer
                  titulo={data.map((data) => data.titulo1)}
                  text1={data.map((data) => data.texto1)}
                  text2={data.map((data) => data["texto1-1"])}
                  image={notebook}
                />
              </div>
            </div>
          </div>
        </article>

        <article className="max-md:w-[159px] max-md:h-[212px] w-custom-article h-custom-article border-2 border-[#C009E3] rounded-t-3xl overflow-hidden rounded-b-3xl">
          <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] max-md:h-[133px]">
            <img
              className="w-full h-full object-contain"
              src={celular01}
              alt=""
            />
          </div>
          <div className="ml-7 mt-9 max-md:mt-2 max-md:ml-3">
            <h4 className="mb-5 max-md:mb-3 text-3xl max-md:text-xl font-semibold text-[#C009E3]">
              Aplicativos
            </h4>
            <p className="max-md:hidden">
              O desenvolvimento de aplicativos oferece soluções personalizadas
              para as necessidades exclusivas de seus clientes,{" "}
              <span>
                criando aplicativos de alta qualidade para uma variedade e
                plataformas.
              </span>
            </p>
            <div className="flex space-x-3 mt-[4.3rem] max-md:mt-0 text-base text-[#9899A7]">
              <button className="flex space-x-3 max-md:space-x-1">
                <img className="max-md:w-4 max-md:h-4" src={seta2} alt="" />
                <FloatingContainer
                  titulo={data.map((data) => data.titulo2)}
                  text1={data.map((data) => data.texto2)}
                  text2={data.map((data) => data["texto2-2"])}
                  image={celular01}
                />
              </button>
            </div>
          </div>
        </article>

        <article className="max-md:w-[159px] max-md:h-[212px] w-custom-article h-custom-article border-2 border-[#7403CB] rounded-t-3xl rounded-b-3xl">
          <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] max-md:h-[133px] overflow-hidden rounded-t-3xl">
            <img src={outsourcing} alt="" />
          </div>
          <div className="ml-7 mt-9 max-md:ml-3 max-md:mt-2">
            <h4 className="mb-5 max-md:mb-0 text-3xl max-md:text-xl font-semibold text-[#7403CB]">
              Outsourcing
            </h4>
            <p className="max-md:hidden">
              As empresas devem utilizar o <br /> serviço de outsourcing de{" "}
              <br /> tecnologia porque isso lhes <br /> permite acessar
              especialistas <br /> em diversas áreas de <br /> tecnologia,
              reduzir custos e <br /> manter o foco em suas atividades
              principais e <br /> estratégicas.
            </p>
            <div className="flex space-x-3 mt-5 max-md:mt-3 text-base text-[#9899A7]">
              <button className="flex space-x-3 max-md:space-x-1 " href="">
                <img className="max-md:w-4 max-md:h-4" src={seta3} alt="" />
                <FloatingContainer
                  titulo={data.map((data) => data.titulo3)}
                  text1={data.map((data) => data.texto3)}
                  text2={data.map((data) => data["texto3-3"])}
                  image={outsourcing}
                />
              </button>
            </div>
          </div>
        </article>

        <article className="max-md:w-[159px] max-md:h-[212px] w-custom-article h-custom-article border-2 border-[#0D09D9] rounded-t-3xl rounded-b-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] max-md:h-[133px] overflow-hidden">
            <img className="" src={devOps} alt="" />
          </div>
          <div className="ml-7 mt-9 max-md:ml-3 max-md:mt-2">
            <h4 className="mb-5 max-md:mb-3 text-3xl max-md:text-xl font-semibold text-[#0D09D9]">
              DevOps
            </h4>
            <p className="max-md:hidden">
              Com o DevOps, as empresas podem reduzir o tempo de lançamento no
              mercado, melhorar a qualidade do software e reduzir custos
              operacionais.
            </p>
            <div className="mt-[5.7rem] max-md:mt-0 text-base text-[#9899A7]">
              <button className="flex space-x-3 max-md:space-x-1 " href="">
                <img className="max-md:w-4 max-md:h-4" src={seta4} alt="" />
                <FloatingContainer
                  titulo={data.map((data) => data.titulo4)}
                  text1={data.map((data) => data.texto4)}
                  text2={data.map((data) => data["texto4-4"])}
                  image={devOps}
                />
              </button>
            </div>
          </div>
        </article>
      </div>

      <div className="w-full flex justify-center relative z-10 rounded-3xl">
        <div className="w-[75.75rem] h-[16rem] max-md:w-[330px] max-md:h-[326px] bg-black overflow-hidden rounded-3xl">
          <div className="relative">
            <img
              className="absolute object-cover max-md:hidden"
              src={bg}
              alt=""
            />
            <img
              className="hidden max-md:block absolute"
              src={celular02}
              alt=""
            />
            <img className="absolute max-md:hidden" src={bg2} alt="" />
            <img className="hidden max-md:block absolute " src={bg03} alt="" />
          </div>
          <div className="flex relative text-white mt-[4.31rem] ml-[4.31rem]">
            <div className="text-4xl">
              <p className="text-[#F951FF] text-xl">X7 TECINOLOGIA</p>
              <p>Temos uma solução pra você.</p>
              <p className="font-bold">Fale com a gente!</p>
            </div>
            <div className="">
              <button className="uppercase text-xl font-bold w-[19.68rem] h-[5.31rem] ml-[13rem] mt-4 border rounded-lg bg-gradient-to-r from-[#C009E3] to-[#4909E3]">
                faça um orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4 */}
    <section id="abount" className="relative -top-[12rem] bg-[#F2F2F9]">
      <div className="flex items-center justify-center mt-20 mb-11">
        <img className="mt-48" src={barra} alt="" />
      </div>
      <p className="flex items-center justify-center text-xl max-md:text-base text-[#6C09E3]">
        X7 TECNOLOGIA
      </p>
      <p className="flex items-center justify-center text-6xl max-md:text-4xl max-md:text-black">
        Sobre<span className="ml-3 font-bold">nós</span>
      </p>

      <p className="flex items-center justify-center font-medium text-black mx-4 text-center text-3xl max-md:text-lg mt-10">
        Fundada há mais de 15 anos, a X7 Tecnologia é um empresa de tecnologia{" "}
        <br />
        que tem se destacado no mercado graças à sua experiência e inovação.
      </p>

      <p
        id="acting"
        className="flex items-center justify-center font-light text-black text-center text-2xl max-md:text-lg mt-4 max-md:mt-8"
      >
        Desde sua fundação, a empresa tem se dedicado ao desenvolvimento de
        <br />
        soluções tecnológicas que atendam ás necessidades de seus clientes.
      </p>

      <div className="flex justify-center mt-20 pb-[12rem] max-md:flex-col">
        <div className=" w-custom-c-n h-custom-c-n max-md:w-[338.13px] max-md:h-[390.5px] max-md:mx-7 bg-custom-c-n border rounded-3xl">
          <img className="max-md:w-[270px] " src={celularBG} alt="" />
          <img
            className="relative bottom-96 -right-10 max-md:w-[314.26px] max-md:h-[260.28px] max-md:bottom-[220px]"
            src={notebook}
            alt=""
          />
          <img
            className="relative -top-[55rem] -right-64 max-md:-top-[35rem] max-md:-right-48 max-md:w-24 "
            src={x72}
            alt=""
          />
        </div>

        <div className="ml-32 max-md:ml-16 font-medium max-md:font-semibold mt-20">
          <div className="ml-4 font-normal max-md:font-bold text-5xl max-md:text-3xl text-black ">
            Atuação
          </div>
          <div className="mt-14 items-center text-2xl max-md:text-xl space-y-3 text-black">
            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Gestão de Projetos</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Migrações</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Integrações</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Gestão Cloud</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Gestão de Redes</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Data Science</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Hunting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute -top-[43rem] -right-[35rem]"
          src={linha03}
          alt=""
        />
      </div>
    </section>
    {/* 5 */}
    <div className="max-md:w-full flex justify-center relative -top-[12rem] h-custom-baner2 text-white text-3xl max-md:text-2xl bg-gradient-to-r from-custom-purple1 to-custom-purple2 ">
      <div className="mt-16">
        <p className="text-center font-light">
          Empresas que confiam na
          <br className="hidden max-md:block" />{" "}
          <span className="font-bold"> X7 Tecnologia</span>
        </p>
        <div className="container mx-auto">
          <LogosSlider />
        </div>
      </div>
    </div>
    {/* 6 */}
    <section>
      <div className="flex justify-center text-center relative -top-16 max-md:-top-30">
        <img src={barra} alt="" />
      </div>
      <p className="flex justify-center text-center text-[#6C09E3] font-normal text-xl max-md:text-md">
        X7 TECNOLOGIA
      </p>
      <p className="flex justify-center text-center font-extrabold text-6xl max-md:text-3xl mb-5">
        Tecnologia
      </p>

      <p className="flex justify-center text-center font-light text-2xl max-md:text-lg mb-20">
        Veja algumas das ferramentas <br className="hidden max-md:block" /> que
        usamos na X7
      </p>

      <div className="flex justify-center mb-[12.83rem] max-md:mb-[7rem]">
        <div className="max-md:hidden grid grid-cols-5 grid-rows-2 gap-6">
          <div className="flex justify-center items-center relative top-24 w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl row-start-1 row-end-3 col-start-1 col-end-2">
            <img src={mysql} alt="" />
          </div>
          <div className="flex justify-center items-center w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl">
            <img src={netcore} alt="" />
          </div>
          <div className="flex justify-center items-center w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl">
            <img src={react} alt="" />
          </div>
          <div className="flex justify-center items-center w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl">
            <img src={node} alt="" />
          </div>
          <div className="flex justify-center items-center w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl">
            <img src={kibana} alt="" />
          </div>
          <div className="flex justify-center items-center w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl">
            <img src={elasticsearch} alt="" />
          </div>
          <div className="flex justify-center items-center w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl">
            <img src={sql} alt="" />
          </div>
          <div className="flex justify-center items-center relative top-24 w-[12.31rem] h-[9.49rem] bg-[#ECE9F7] rounded-3xl row-start-1 col-end-6">
            <img src={mongoDB} alt="" />
          </div>
        </div>
        {/* Using hidden */}
        <div className="hidden max-md:block ">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={mysql} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={netcore} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={react} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={node} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={kibana} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={elasticsearch} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={sql} alt="" />
            </div>
            <div className="flex justify-center items-center w-[10.24rem] h-[7.9rem] bg-[#ECE9F7] rounded-3xl">
              <img src={mongoDB} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 7 */}
    <section id="speak" className="bg-[#1C214A]">
      <div className="flex justify-center ">
        <img className="mt-[4.71rem] mb-[4.61rem]" src={barra} alt="" />
      </div>

      <div className="flex justify-center text-[#E767FF] uppercase mb-4">
        contato e orçamento
      </div>
      <div className="flex justify-center font-extrabold text-white text-5xl mb-10 max-md:text-3xl max-md:mb-24">
        Fale com a gente
      </div>

      <div className="flex justify-center pb-52">
        <div className="flex justify-center">
          <div className="max-md:hidden flex justify-center items-center rounded-l-3xl bg-gradient-to-b from-custom-purple1 to-custom-purple2 w-[20.93rem] h-[44.75rem]">
            <div>
              <div className="flex justify-center items-center ml-4 w-[13.78rem] h-[19.88rem] bg-white rounded-3xl">
                <div className="text-center">
                  <div className="flex justify-center relative -top-14">
                    <img className="text-center" src={logox7} alt="" />
                  </div>
                  <p className="relative -top-8 font-semibold text-xl">
                    X7 Tecnologia
                  </p>
                  <p className="relative -top-6 font-light text-[#929292] text-xs">
                    Contato WhatsApp
                  </p>
                  <img className="relative -top-2" src={qrcode} alt="" />
                </div>
              </div>
              <p className="mt-12 font-bold text-white text-center">
                Se preferir aponte a câmera <br /> pra o QRCode e falae com a{" "}
                <br /> gente por WhatsApp
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center rounded-r-3xl max-md:rounded-3xl w-[49.43rem] h-[44.80rem] max-md:h-[43rem] max-md:w-[23rem] bg-white">
            <div>
              <p className="text-[#1C214A] text-2xl max-md:flex justify-center max-md:text-sm max-md:mt-20">
                Preencha seus dados e{" "}
                <span className="font-bold">receba um contato:</span>
              </p>

              <form
                className="space-y-3 max-md:flex max-md:flex-col max-sm:pl-5 max-md:justify-center max-md:text-sm max-md:mt-8"
                action=""
              >
                <div className="flex items-center overflow-hidden max-md:flex-col border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[4.78rem] max-md:w-[20rem] max-md:h-[4rem] max-md:ml-1">
                  <div className="max-md:flex max-md:mr-56 max-md:mt-2">
                    <img src={persona} alt="" />
                    <label className="font-bold" htmlFor="nome">
                      Nome
                    </label>
                  </div>
                  <input className="bg-white" type="text" name="name" id="" />
                </div>
                <div className="flex items-center overflow-hidden max-md:flex-col border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[4.78rem] max-md:w-[20rem] max-md:h-[4rem] max-md:ml-1">
                  <div className="max-md:flex max-md:mr-56 max-md:mt-2 ml-8">
                    <img src={mensagem} alt="" />
                    <label className="font-bold w-20" htmlFor="E-mail">
                      E-mail
                    </label>
                  </div>
                  <input className="bg-white" type="email" />
                </div>
                <div className="flex items-center overflow-hidden max-md:flex-col border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[4.78rem] max-md:w-[20rem] max-md:h-[4rem] max-md:ml-1">
                  <div className="max-md:flex max-md:mr-56 max-md:mt-2 ml-6">
                    <img src={celular} alt="" />
                    <label className="font-bold" htmlFor="phone">
                      Telefone
                    </label>
                  </div>
                  <input className="bg-white" type="number" />
                </div>
                <div className="flex flex-col max-md:overflow-hidden items-center border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[8.60rem] max-md:w-[20rem] max-md:ml-1">
                  <div className="max-md:flex">
                    <img src={conversa} alt="" />
                    <label className="font-bold" htmlFor="message">
                      Fale um pouco sobre o que precisa:<span>(opcional)</span>
                    </label>
                  </div>
                  <input
                    className="bg-white h-[5.3rem] max-md:h-[5.7rem]"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </form>

              <button className="flex justify-center items-center mt-7 w-[39.91rem] h-[5.66rem] max-md:w-72 max-md:h-14 max-md:text-xl max-md:ml-10 bg-gradient-to-r from-custom-purple1 to-custom-purple2 text-white text-3xl uppercase font-semibold rounded-2xl max-md:mb-9">
                entre em contato
              </button>
              <div className="md:hidden max-md:flex justify-center items-center w-[23rem] h-[10rem] rounded-b-3xl bg-gradient-to-r from-custom-purple1 to-custom-purple2">
                <div className="mr-6">
                  <img className="w-10" src={whatsapp} alt="" />
                </div>
                <div>
                  <p className="text-white text-xl mb-3">
                    ou se preferir conversa <br /> com a gente por
                  </p>
                  <a className="text-[#5d1869]" href="">
                    CLIQUE AQUI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 8 */}
    <footer className="bg-[#12152E] pt-20">
      <div className="flex justify-center max-md:flex-col gap-20 max-md:gap-5 pb-9">
        <div>
          <div className="md:hidden flex justify-center">
            <img src={estrelax72} alt="" />
          </div>
          <div className="mb-6 max-md:hidden">
            <img src={estrelax7} alt="" />
          </div>
          <p className="font-extralight text-xl text-[#908CB8] mb-7 max-md:hidden">
            Somos dedicados ao desenvolvimento de <br />
            soluções tecnológicas que atendam às <br />
            necessidades de seus clientes.{" "}
          </p>
          <div className="flex gap-6 max-md:hidden">
            <img src={iconFacebook} alt="" />
            <img src={iconInstagram} alt="" />
            <img src={iconTwitter} alt="" />
            <img src={iconLinkedin} alt="" />
          </div>
        </div>

        <div className="text-[#908CB8] max-md:hidden">
          <p className="font-bold text-xl text-white mt-6 mb-6">Atuação</p>

          <div className="space-y-4">
            <div>
              <a href="">Aplicativos Híbridos</a>
            </div>
            <div>
              <a href="">Gestão de Projetos</a>
            </div>
            <div>
              <a href="">DevOps</a>
            </div>
            <div>
              <a href="">Integrações</a>
            </div>
            <div>
              <a href="">Migração de Dados</a>
            </div>
          </div>
        </div>

        <nav className="text-[#908CB8] max-md:ml-14">
          <p className="font-bold text-xl text-white mt-6 mb-6">Menu</p>
          <div className="space-y-4">
            <div>
              <a href="#">Home</a>
            </div>
            <div>
              <a href="">Serviços</a>
            </div>
            <div>
              <a href="">Sobre a X7</a>
            </div>
            <div>
              <a href="">Atuação</a>
            </div>
            <div>
              <a href="">Fale com a gente</a>
            </div>
          </div>
          {/* <a href="#">Home</a>
          <a href="">Serviços</a>
          <a href="">Sobre a X7</a>
          <a href="">Atuação</a>
          <a href="">Fale com a gente</a> */}
        </nav>

        <div className="max-md:ml-14">
          <p className="font-bold text-xl text-white mt-6 mb-6">Contato</p>

          <div className="space-y-4  text-[#908CB8]">
            <div className="flex gap-4">
              <img src={iconsCelular} alt="" />
              <p>+55 (XX) XXXXX-XXXX</p>
            </div>
            <div className="flex gap-4">
              <img src={iconEmail} alt="" />
              <p>contato@x7tecnologia.com</p>
            </div>
            <div className="flex gap-4">
              <img src={iconWhatsApp} alt="" />
              <p>+55 (XX) XXXXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center gap-5 border-t-2 pt-6 pb-8">
        <img src={iconFacebook} alt="" />
        <img src={iconInstagram} alt="" />
        <img src={iconTwitter} alt="" />
        <img src={iconLinkedin} alt="" />
      </div>
      <div className="flex justify-center items-center border-t-2 border-[#E9E9E9]">
        <p className="pt-11 pb-11 text-[#A5A8C9] text-xl max-md:text-xs max-md:pt-5 max-md:pb-5">
          2023 Copyright X7 Tecnologia Todos os direitos reservados
        </p>
      </div>
    </footer>
  </div>
);

export default App;
