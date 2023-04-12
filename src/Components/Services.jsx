import React from "react";
import { useState } from "react";

import data from "../data.json";

import barra from "../assets/icons/barra-rosa.svg";
import whatsappRoxo from "../assets/whatsapp-roxo.svg";
import notebook from "../assets/notebook.svg";
import celular02 from "../assets/celular02.svg";
import seta1 from "../assets/Grupo 130.svg";
import seta2 from "../assets/Grupo 131.svg";
import seta3 from "../assets/Grupo 132.svg";
import seta4 from "../assets/Grupo 133.svg";
import celular01 from "../assets/celular01.svg";
import outsourcing from "../assets/Grupo 111.png";
import devOps from "../assets/Grupo de máscara 41.png";
import bg from "../assets/bg.png";
import bg2 from "../assets/Grupo de máscara 14.png";
import bg03 from "../assets/bg03.svg";
import bgFixed from "../assets/bg-celular-fixed.svg";

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
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[6000]">
          <div className=" bg-[#0B002B] bg-opacity-90 w-[84.5rem] h-[50.62rem] rounded-3xl p-5 max-md:w-[23rem]">
            <button
              className="relative top-10 right-[-35.5rem] max-md:top-5 max-md:right-[-8.5rem] text-white text-6xl max-md:text-3xl font-light"
              onClick={() => setShowContainer(false)}
            >
              X
            </button>
            <div className="flex max-md:flex-col mt-10 max-md:mt-5 ml-24 max-md:ml-0 relative">
              <div className="md:w-2/3 max-md:w-full text-left space-y-8 max-md:space-y-4">
                <h1 className="text-white text-5xl font-extrabold mb-4 max-md:text-2xl">
                  {props.titulo}
                </h1>
                <p className="text-white text-2xl max-md:text-base mb-4 font-medium">
                  {props.text1}
                </p>
                <p className="text-white text-2xl mb-4 fAont-light max-md:text-sm">
                  {props.text2}
                </p>
                <div>
                  <button
                    src="#"
                    className="relative w-[21.25rem] h-[5.75rem] max-md:w-[19rem] max-md:h-[4rem] text-2xl max-md:text-lg font-bold bg-gradient-to-b from-custom-purple1 to-custom-purple2 text-white px-4 py-2 rounded-lg mr-4 mt-5"
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

export function Services() {
  return (
    <>
      <section id="services" className="w-full">
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
              className="fixed z-20 bottom-7 right-7 hover:animate-bounce"
              src={whatsappRoxo}
              alt=""
            />
          </a>
        </p>
        <div className="relative flex justify-center gap-1 mb-32 max-md:grid max-md:grid-cols-2 max-md:place-items-center max-md:mx-7 max-md:gap-4">
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
              <div className="flex z-10 space-x-3 mt-28 max-md:mt-0 max-md:w-[120.06px] max-md:h-[15.04px] text-lg text-[#9899A7]">
                <button className="flex space-x-3 max-md:space-x-1 z-10">
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
                </button>
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

        <div className="max-md:hidden flex justify-center items-center relative z-[3] overflow-hidden rounded-3xl">
          <div className="w-[75.75rem] h-[16rem] max-md:w-[330px] max-md:h-[326px] bg-black overflow-hidden rounded-[1.7rem]">
            <div className="md:relative">
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
              <img
                className="hidden max-md:block absolute w-[65.38rem]"
                src={bg03}
                alt=""
              />
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

        <div className="md:hidden flex justify-center items-center relative z-[3] bg-[#12152E] mx-7 h-96 rounded-3xl overflow-hidden">
          <div className="text-white flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center relative top-[-20px] space-y-1">
              <p className="text-[#F951FF] z-[6]">X7 TECNOLOGIA</p>
              <p className="font-bold text-3xl z-[6]">Fale coma a gente</p>
              <p className="font-semibold text-xl z-[6]">
                Temos uma solução para você.
              </p>
            </div>
            <div className="flex justify-center items-center rounded-lg mt-14 w-56 h-16 bg-gradient-to-b from-custom-purple1 to-custom-purple2 z-[6]">
              <button className="z-[6]">PEÇA UM ORÇAMENTO</button>
            </div>
          </div>
          <div className="">
            <img
              className="absolute left-[-190px] top-[-156px] min-w-[74rem] "
              src={bg03}
              alt=""
            />
            <img
              className="absolute left-0 top-[55px] rounded-3xl opacity-60"
              src={celular02}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
