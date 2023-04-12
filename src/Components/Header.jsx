import React from "react";
import { useState } from "react";

import { Link } from "react-scroll";

import x7 from "../assets/x7-tecnologia.svg";
import estrela03 from "../assets/estrela03.svg";

import menu from "../assets/icons/menu.svg";


function Menu() {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <div>
        <button className="md:hidden mx-5" onClick={() => setHidden(!hidden)}>
          <img id="" className="w-8" src={menu} alt="" />
        </button>
      </div>
      <div className={hidden ? 'hidden' : ''}>
        <div className="w-full z-50 top-24 left-0 bg-black opacity-80 fixed">
          <div className="flex flex-col mx-5 my-5 text-white space-y-3 font-bold">
            <Link to="home" className="hover:bg-slate-500 rounded-lg" href="">Home</Link>
            <Link to="services" className="hover:bg-slate-500 rounded-lg" href="">Serviços</Link>
            <Link to="abount" className="hover:bg-slate-500 rounded-lg" href="">Sobre a X7</Link>
            <Link to="acting" className="hover:bg-slate-500 rounded-lg" href="">Atuação</Link>
            <Link to="speak" className="hover:bg-slate-500 rounded-lg" href="">Fale com a gente</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Header() {
  return (
      <header className="w-screen flex justify-between h-28 items-center bg-custom-blue fixed z-[4] top-0 2xl:pl-64 2xl:pr-64">
        <div className="flex items-center gap-5 md:gap-2 text-center mr-5 max-md:ml-8">
          <img className="w-10 max-md:w-8 " src={estrela03} alt="" />
          <img
            className="min-w-[210px] max-w-[260px] max-md:min-w-[9rem] max-md:max-w-[11rem]"
            src={x7}
            alt=""
          />
        </div>

        <nav className="max-md:hidden">
          <div className="flex items-center xl:gap-9 md:gap-3 ml-28 md:ml-10 mr-20 md:mr-10 text-white md:text-xs lg:text-sm">
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
              <Link
                to="abount"
                smooth={true}
                duration={500}
                className=""
                href=""
              >
                Sobre a X7
              </Link>
            </div>
            <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
              <Link
                to="acting"
                smooth={true}
                duration={500}
                className=""
                href=""
              >
                Atuação
              </Link>
            </div>
            <div className="flex items-center h-16 hover:border-b-2 hover:text-[#A580FF] hover:border-[#A580FF]">
              <Link
                to="speak"
                smooth={true}
                duration={500}
                className=""
                href=""
              >
                Fale com a gente
              </Link>
            </div>
          </div>
        </nav>

        <Menu />

        <button className="max-lg:hidden ml-5 mr-5 hover:bg-gradient-to-r hover:from-custom-purple2 hover:to-custom-purple1 rounded-3xl border-[#707070] text-md xl:text-base px-7 py-5 text-white bg-gradient-to-b from-custom-purple1 to-custom-purple2">
          PEÇA UM ORÇAMENTO
        </button>
      </header>
  );
}
