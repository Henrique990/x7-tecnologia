import linha04 from "../assets/Vector 5.png";
import barra from "../assets/icons/barra-rosa.svg";
import celularBG from "../assets/Grupo de máscara 34.svg";
import notebook from "../assets/notebook.svg";
import x72 from "../assets/icons/Grupo 110.png";
import verificado from "../assets/icons/verificado-rosa.svg";
import estrela04 from "../assets/estrela04.svg";

import LogosSlider from "../logosSlider";

export function Abount() {
  return (
    <>
      <section id="abount" className="w-full relative -top-[12rem] bg-[#F2F2F9]">
        <img
          className="absolute rotate-[-33deg] top-[-251px] left-[-400px] max-md:top-[49rem] max-md:left-[-17rem] max-md:min-w-[67rem] max-md:rotate-[-160deg]"
          src={linha04}
          alt=""
        />
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

        <div className="m-auto flex justify-center items-center mt-20 pb-[12rem] max-md:flex-col">
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

          <div className="ml-32 max-md:ml-0 font-medium max-md:font-semibold mt-20">
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
            className="absolute top-[-35rem] left-[114rem]"
            src={estrela04}
            alt=""
          />
        </div>
      </section>
      <div className="max-md:w-full flex justify-center relative -top-[12rem] h-custom-baner2 text-white text-3xl max-md:text-2xl bg-gradient-to-r from-custom-purple1 to-custom-purple2 ">
        <div className="mt-16">
          <p className="text-center font-light">
            Empresas que confiam na
            <br className="hidden max-md:block" />{" "}
            <span className="font-bold"> X7 Tecnologia</span>
          </p>
          <div className="">
            <LogosSlider />
          </div>
        </div>
      </div>
    </>
  );
}
