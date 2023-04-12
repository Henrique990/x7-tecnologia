import linha04 from "../assets/Vector 5.png";
import barra from "../assets/icons/barra-rosa.svg";
import mysql from "../assets/mysql.svg";
import netcore from "../assets/net-core.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import kibana from "../assets/kibana.svg";
import elasticsearch from "../assets/elasticsearch.svg";
import sql from "../assets/sql-server.svg";
import mongoDB from "../assets/mongo-db.svg";


export function Technology() {
  return (
    <>
      <section className="w-full">
        <img
          className="absolute rotate-[30deg] top-[3566px] left-[1115px] "
          src={linha04}
          alt=""
        />
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
          Veja algumas das ferramentas <br className="hidden max-md:block" />{" "}
          que usamos na X7
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
    </>
  );
}
