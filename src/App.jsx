import React from "react";
import { useState } from 'react';
import { Link } from 'react-scroll'
import data from "./data.json"

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
import verificado from "./assets/icons/verificado-rosa.svg"
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
import x72 from "./assets/Grupo 134.svg";
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

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Slide = () => {
  return (
    <Splide options={{ perPage: 1  }}>
      <SplideSlide>
      <div className="flex justify-center items-center overflow-hidden bg-custom-blue">
            <div className="flex justify-center  w-1/2 font-montserrat text-white">
              <div className="ml-72">
                <p className="uppercase mb-3">nossos serviços</p>
                <p className="text-7xl mb-14">
                  Desenvolvimento <br /> de
                  <span className="font-bold"> Aplicativos</span>
                </p>
                  <button className="relative z-50 hover:border-0 hover:bg-[#6D1BAC] pt-7 pb-7 pl-9 pr-9 uppercase border border-[#E8BCFF] rounded-3xl">fale com a gente</button>
              </div>
            </div>
            <div className="w-1/2 flex">
              <img className="relative -right-20 z-50 h-[32.78rem]" src={celular01} alt="" />
              <img className="relative -top-28 right-10" src={fundo} alt="" />
              <img className="relative -top-20 right-24" src={estrela04} alt="" />
              <img className="" src={linha1} alt="" />
              <img className="" src={linha2} alt="" />
              <img className="relative -top-20 right-[285rem]" src={linha4} alt="" />

            </div>
        </div>
      </SplideSlide>
      <SplideSlide className="h-[38rem]">
      <div className="flex justify-center items-center pb-14 overflow-hidden bg-gradient-to-br from-[#54074C] to-[#110710]">
            <div className="flex justify-center relative -top-10 w-1/2 font-montserrat text-white">
              <div className="ml-48">
                <p className="uppercase mb-3">nossos serviços</p>
                <p className="text-7xl mb-14">
                  Sistemas sob <br />
                  <span className="font-bold"> medida</span>
                </p>
                  <button className="relative z-50 hover:border-0 hover:bg-[#6D1BAC] pt-7 pb-7 pl-9 pr-9 uppercase border border-[#E8BCFF] rounded-3xl">fale com a gente</button>
              </div>
            </div>
            <div className="w-1/2 flex">
              <img className="relative right-36 top-20 z-50 h-[31.39rem]" src={notebook} alt="" />
              <img className="relative -top-52 right-80" src={linha03} alt="" />
              <img className="relative -top-36 right-[45rem]" src={estrela04} alt="" />
              <img className="relative top-48 right-[210rem]" src={linha2} alt="" />
            </div>
        </div>
      </SplideSlide>
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
        <button onClick={handleClick}>VER MAIS</button>
      {showContainer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#0B002B] bg-opacity-80 w-[84.5rem] h-[44.62rem] rounded-3xl p-8 relative">
            <button
              className="absolute top-10 right-14 text-white text-6xl font-light"
              onClick={() => setShowContainer(false)}
            >
              X
            </button>
            <div className="flex mt-20 ml-24">
              <div className="w-2/3 text-left space-y-8">
                <h1 className="text-white text-5xl font-extrabold mb-4 ">{props.titulo}</h1>
                <p className="text-white text-2xl mb-4 font-medium">
                  {props.text1}
                </p>
                <p className="text-white text-2xl mb-4 font-light">
                {props.text2}
                </p>
                <div>
                  <button src="#" className="relative z-50 w-[21.25rem] h-[5.75rem] text-2xl font-bold bg-gradient-to-b from-custom-purple1 to-custom-purple2 text-white px-4 py-2 rounded-lg mr-4">
                    FAÇA UM ORÇAMENTO
                  </button>

                </div>
              </div>
              <div className="w-1/3">
                <div className="rounded-3xl ml-20 w-[15rem] h-[31.06rem] bg-gradient-to-b from-[#75319B] to-[#4C0087] hover:bg-purple-950">
                  <img className="" src={bgFixed} alt="Imagem" />
                </div>
                <img className="animate-bounce relative -top-80 -right-9 w-[18.62rem] h-[15.42rem]" src={props.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const App = () => (
    <div className="w-full aspect-auto font-montserrat bg-white overflow-hidden">
      {/* 1 */}
      <header className="flex w-full z-50 h-28 justify-center items-center bg-custom-blue fixed top-0 pl-64 pr-80 whitespace-nowrap ">
        <div className="flex items-center gap-5 h-auto text-center">
          <img className="w-10" src={estrela03} alt="" />
          <img className="min-w-[19rem]" src={x7} alt="" />
        </div>

        <nav className="flex items-center gap-9 ml-32 mr-20 text-white text-xl">
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="home" smooth={true} duration={500} 
              className="hover:animate-bounce" href="">Home</Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="services" smooth={true} duration={500} className="hover:animate-bounce" href="">Serviços</Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="abount" smooth={true} duration={500} className="hover:animate-bounce" href="">Sobre a X7</Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="acting" smooth={true} duration={500} className="hover:animate-bounce" href="">Atuação</Link>
          </div>
          <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
            <Link to="speak" smooth={true} duration={500} className="hover:animate-bounce" href="">Fale com a gente</Link>
          </div>
        </nav>

        <button className="hover:bg-gradient-to-r hover:from-custom-purple2 hover:to-custom-purple1 z-30 rounded-3xl border-[#707070] text-base pt-5 pb-5 pl-7 pr-7 text-white bg-gradient-to-b from-custom-purple1 to-custom-purple2">
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
        <p className="flex items-center justify-center text-xl uppercase text-[#0C5ADB]">o que fazemos</p>
        <p className="flex items-center justify-center text-6xl mb-28">
          Conheça nossos<span className="font-bold ml-5"> serviços</span>
          <a href=""><img className="relative -right-[30rem] hover:animate-bounce" src={whatsappRoxo} alt="" /></a>
        </p>
        <div className="flex justify-center gap-1 mb-32">
          
          <article className="w-custom-article h-custom-article border-2 border-[#7403CB] rounded-t-3xl overflow-hidden rounded-b-3xl">
            <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] ">
              <img
                className="w-full h-full object-contain"
                src={notebook}
                alt=""
              />
            </div>
            <div className="p-4 ml-3">
              <h4 className="text-3xl text-[#D909AE] font-semibold mb-2">Sistema Sob Medida</h4>
              <p>Sistemas sob medida lhes permite ter <span>soluções personalizadas para suas necessidades específicas de negócios.</span></p>
              <div className="flex space-x-3 mt-28 text-lg text-[#9899A7]">
                <div className="flex space-x-3">
                  <img className="w-6 h-6" src={seta1} alt="" />
                  <FloatingContainer 
                    titulo = {data.map( data => data.titulo1)}
                    text1 = {data.map( data => data.texto1)}
                    text2 = {data.map( data => data["texto1-1"])}  
                    image = {notebook}
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="w-custom-article h-custom-article border-2 border-[#C009E3] rounded-t-3xl overflow-hidden rounded-b-3xl">
           <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] ">
              <img className="w-full h-full object-contain"src={celular01} alt="" />
           </div>
           <div className="ml-7 mt-9">
              <h4 className="mb-5 text-3xl font-semibold text-[#C009E3]">Aplicativos</h4>
              <p>O desenvolvimento de aplicativos oferece soluções personalizadas para as necessidades exclusivas de seus clientes, <span>criando aplicativos de alta qualidade para uma variedade e plataformas.</span></p>
            <div className="flex space-x-3 mt-[4.3rem] text-base text-[#9899A7]">
            <button className="flex space-x-3">
              <img src={seta2} alt="" />
              <FloatingContainer 
                titulo = {data.map( data => data.titulo2)}
                text1 = {data.map( data => data.texto2)}
                text2 = {data.map( data => data["texto2-2"])}
                image = {celular01}
              />
            </button>
            </div>
           </div>
          </article>

          <article className="w-custom-article h-custom-article border-2 border-[#7403CB] rounded-t-3xl rounded-b-3xl">
            <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] overflow-hidden rounded-t-3xl">
              <img src={outsourcing} alt="" />
            </div>
            <div className="ml-7 mt-9">
            <h4 className="mb-5 text-3xl font-semibold text-[#7403CB]">Outsourcing</h4>
            <p>As empresas devem utilizar o <br /> serviço de outsourcing de <br /> tecnologia porque isso lhes <br /> permite acessar especialistas <br /> em diversas áreas de <br /> tecnologia, reduzir custos e <br /> manter o foco em suas atividades principais e <br /> estratégicas.</p>
            <div className="flex space-x-3 mt-5 text-base text-[#9899A7]">
            <button className="flex space-x-3 " href="">
              <img src={seta3} alt="" />
              <FloatingContainer 
                titulo = {data.map( data => data.titulo3)}
                text1 = {data.map( data => data.texto3)}
                text2 = {data.map( data => data["texto3-3"])}
                image = {outsourcing}
              />
            </button>
            </div>
            </div>
          </article>

          <article className="w-custom-article h-custom-article border-2 border-[#0D09D9] rounded-t-3xl rounded-b-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-custom-article1 to-custom-article2 h-[15.43rem] overflow-hidden">
              <img className="" src={devOps} alt="" />
            </div>
            <div className="ml-7 mt-9">
            <h4 className="mb-5 text-3xl font-semibold text-[#0D09D9]">DevOps</h4>
            <p>Com o DevOps, as empresas podem reduzir o tempo de lançamento no mercado, melhorar a qualidade do software e reduzir custos operacionais.</p>
            <div className="mt-[5.7rem] text-base text-[#9899A7]">
              <button className="flex space-x-3 " href="">
                <img src={seta4} alt="" />
                <FloatingContainer 
                  titulo = {data.map( data => data.titulo4)}
                  text1 = {data.map( data => data.texto4)}
                  text2 = {data.map( data => data["texto4-4"])}
                  image = {devOps}
              />
              </button>
            </div>
            </div>
          </article>
        </div>

        <div className="w-full flex justify-center relative z-10 rounded-3xl">
        <div className="w-[75.75rem] h-[16rem] bg-black overflow-hidden rounded-3xl">
          <div className="relative">
            <img className="absolute object-cover" src={bg} alt="" />
            <img className="absolute" src={bg2} alt="" />
          </div>
          <div className="flex relative text-white mt-[4.31rem] ml-[4.31rem]">
            <div className="text-4xl">
              <p className="text-[#F951FF] text-xl">X7 TECINOLOGIA</p>
              <p>Temos uma solução pra você.</p>
              <p className="font-bold">Fale com a gente!</p>
            </div>
            <div className="">
              <button className="uppercase text-xl font-bold w-[19.68rem] h-[5.31rem] ml-[13rem] mt-4 border rounded-lg bg-gradient-to-r from-[#C009E3] to-[#4909E3]">faça um orçamento</button>
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
        <p className="flex items-center justify-center text-xl text-[#6C09E3]">X7 TECNOLOGIA</p>
        <p className="flex items-center justify-center text-6xl">
          Sobre<span className="ml-3 font-bold">nós</span>
        </p>

        <p className="flex items-center justify-center font-medium text-3xl mt-10">
          Fundada há mais de 15 anos, a X7 Tecnologia é um empresa de tecnologia <br />
          que tem se destacado no mercado graças à sua experiência e inovação.
        </p>

        <p className="flex items-center justify-center font-light text-2xl mt-4">
          Desde sua fundação, a empresa tem se dedicado ao desenvolvimento de <br />
          soluções tecnológicas que atendam ás necessidades de seus clientes.
        </p>

        <div className="flex justify-center mt-20 pb-[12rem]">
        <div className=" w-custom-c-n h-custom-c-n bg-custom-c-n border rounded-3xl">
          <img src={celularBG} alt="" />
          <img className="relative bottom-96 -right-10" src={notebook} alt="" />
          <img className="relative -top-[55rem] -right-64 " src={x72} alt="" />
        </div>


        <div className="ml-32 font-medium mt-20">
          <div className="ml-6 text-4xl">Atuação</div>
          <div className="mt-14 items-center text-2xl space-y-3">
            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3">Gestão de Projetos</p>
            </div>

            <div className="flex items-center">
              <img src={verificado} alt="" />
              <p className="ml-3" >Migrações</p>
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
          <img className="absolute -top-[43rem] -right-[35rem]" src={linha03} alt="" />
        </div>

      </section>
      {/* 5 */}
      <div className="flex justify-center relative -top-[12rem] h-custom-baner2 text-white text-3xl bg-gradient-to-r from-custom-purple1 to-custom-purple2 ">
        <div className="mt-16">
          <p className="text-center font-light">Empresas que confiam na <span className="font-bold"> X7 Tecnologia</span></p>
          <div className="flex text-center font-semibold text-[#8E09E3] mt-16 gap-3">
            <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">logo 1</div>
            <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">logo 2</div>
            <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">logo 3</div>
            <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">logo 4</div>
            <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">logo 5</div>
          </div>          
        </div> 
      </div>
      {/* 6 */}
      <section id="acting">
        <div className="flex justify-center text-center relative -top-16">
          <img src={barra} alt="" />
        </div>
        <p className="flex justify-center text-center text-[#6C09E3] font-normal text-xl">X7 TECNOLOGIA</p>
        <p className="flex justify-center text-center font-extrabold text-6xl mb-5">Tecnologia</p>

        <p className="flex justify-center text-center font-light text-2xl mb-20">Veja algumas das ferramentas que usamos na X7</p>

        <div className="flex justify-center mb-[12.83rem]">
          <div className="grid grid-cols-5 grid-rows-2 gap-6">
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
        </div>
      </section>
      {/* 7 */}
      <section id="speak" className="bg-[#1C214A]">
        <div className="flex justify-center ">
          <img className="mt-[4.71rem] mb-[4.61rem]" src={barra} alt="" />
        </div>

        <div className="flex justify-center text-[#E767FF] uppercase mb-4">contato e orçamento</div>
        <div className="flex justify-center font-extrabold text-white text-5xl">Fale com a gente</div>

        <div className="flex justify-center pb-52">
          <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-l-3xl bg-gradient-to-b from-custom-purple1 to-custom-purple2 w-[20.93rem] h-[44.75rem]">
              <div>
                <div className="flex justify-center items-center ml-4 w-[13.78rem] h-[19.88rem] bg-white rounded-3xl">
                  <div className="text-center">
                    <div className="flex justify-center relative -top-14">
                      <img className="text-center" src={logox7} alt="" />
                    </div>
                    <p className="relative -top-8 font-semibold text-xl">X7 Tecnologia</p>
                    <p className="relative -top-6 font-light text-[#929292] text-xs">Contato WhatsApp</p>   
                    <img className="relative -top-2" src={qrcode} alt="" />       
                  </div>
                </div>
                <p className="mt-12 font-bold text-white text-center">Se preferir aponte a câmera <br /> pra o QRCode e falae com a <br /> gente por WhatsApp</p>
              </div>
            </div>

            <div className="flex justify-center items-center rounded-r-3xl w-[49.43rem] h-[44.80rem] bg-white">
              <div>
                <p className="text-[#1C214A] text-2xl">
                  Preencha seus dados e <span className="font-bold">receba um contato:</span>
                </p>

                <form className="space-y-3" action="">
                  <div className="flex items-center border-2 border-[#1C214A] rounded-2xl w-[39.91rem] h-[4.78rem]">
                    <img src={persona} alt="" />
                    <label className="font-bold" htmlFor="nome">Nome</label>
                    <input type="text" name="name" id="" />
                  </div>
                  <div className="flex items-center border-2 border-[#1C214A] rounded-2xl w-[39.91rem] h-[4.78rem]">
                    <img src={mensagem} alt="" />
                    <label className="font-bold" htmlFor="E-main">E-mail</label>
                    <input type="email" />
                  </div>
                  <div className="flex items-center border-2 border-[#1C214A] rounded-2xl w-[39.91rem] h-[4.78rem]">
                    <img src={celular} alt="" />
                    <label className="font-bold" htmlFor="phone">Telefone</label>
                    <input type="number" />
                  </div>
                  <div className="flex items-center border-2 border-[#1C214A] rounded-2xl w-[39.91rem] h-[8.60rem]">
                    <img src={conversa} alt="" />
                    <label className="font-bold" htmlFor="message">
                      Fale um pouco sobre o que precisa:<span>(opcional)</span>
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                </form>

                <button className="mt-7 w-[39.91rem] h-[5.66rem] bg-gradient-to-r from-custom-purple1 to-custom-purple2 text-white text-3xl uppercase font-semibold rounded-3xl">entre em contato</button>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* 8 */}
      <footer className="bg-[#12152E] pt-20">
        <div className="flex justify-center gap-20 pb-9">
          <div>
            <div className="mb-6">
              <img src={estrelax7} alt="" />
            </div>
            <p className="font-extralight text-xl text-[#908CB8] mb-7">Somos dedicados ao desenvolvimento de <br />
            soluções tecnológicas que atendam às <br />
            necessidades de seus clientes. </p>
            <div className="flex gap-6">
              <img src={iconFacebook} alt="" />
              <img src={iconInstagram} alt="" />
              <img src={iconTwitter} alt="" />
              <img src={iconLinkedin} alt="" />
            </div>
          </div>

          <div className="text-[#908CB8]">
            <p className="font-bold text-xl text-white mt-6 mb-6">Atuação</p>

            <div className="space-y-4">
              <div><a href="">Aplicativos Híbridos</a></div>
              <div><a href="">Gestão de Projetos</a></div>
              <div><a href="">DevOps</a></div>
              <div><a href="">Integrações</a></div>
              <div><a href="">Migração de Dados</a></div>
            </div>
          </div>

          <nav className="text-[#908CB8]">
            <p className="font-bold text-xl text-white mt-6 mb-6">Menu</p>
            <div className="space-y-4">
              <div><a href="#">Home</a></div>
              <div><a href="">Serviços</a></div>
              <div><a href="">Sobre a X7</a></div>
              <div><a href="">Atuação</a></div>
              <div><a href="">Fale com a gente</a></div>
            </div>
            <a href="#">Home</a>
            <a href="">Serviços</a> 
            <a href="">Sobre a X7</a>
            <a href="">Atuação</a>
            <a href="">Fale com a gente</a>
          </nav>

          <div>
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
        <div className="flex justify-center items-center border-t-2 border-[#E9E9E9]">
          <p className="pt-11 pb-11 text-[#A5A8C9] text-xl">2023 Copyright X7 Tecnologia Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );

  export default App