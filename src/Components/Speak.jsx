import linha04 from "../assets/Vector 5.png";
import barra from "../assets/icons/barra-rosa.svg";
import logox7 from "../assets/logo-x7.svg";
import qrcode from "../assets/qrcode.svg";
import persona from "../assets/icons/persona.svg";
import mensagem from "../assets/icons/mensagem.svg";
import celular from "../assets/icons/celular.svg";
import conversa from "../assets/icons/conversa.svg";
import whatsapp from "../assets/icons/whatsapp.png";


export function Speak() {
  return (
    <>
      <section id="speak" className="bg-[#1C214A] w-full">
        <img
          className="absolute rotate-[210deg] top-[5282px] left-[-160px] max-md:rotate-[210deg] max-md:top-[5321px] max-md:left-[-161px] max-md:min-w-[1312px]"
          src={linha04}
          alt=""
        />
        <div className="flex justify-center ">
          <img className="mt-[4.71rem] mb-[4.61rem]" src={barra} alt="" />
        </div>

        <div className="flex justify-center text-[#E767FF] uppercase mb-4">
          contato e orçamento
        </div>
        <div className="flex justify-center font-extrabold text-white text-5xl mb-10 max-md:text-3xl max-md:mb-24">
          Fale com a gente
        </div>

        <div className="flex justify-center pb-52 relative">
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

            <div className="relative z-[3] flex justify-center items-center rounded-r-3xl max-md:rounded-3xl w-[49.43rem] h-[44.80rem] max-md:h-[43rem] max-md:w-[23rem] bg-white">
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
                    <div className="flex max-md:flex max-md:mr-56 max-md:mt-2">
                      <img src={persona} alt="" />
                      <label className="font-bold" htmlFor="nome">
                        Nome
                      </label>
                    </div>
                    <input className="bg-white" type="text" name="name" id="" />
                  </div>
                  <div className="flex items-center overflow-hidden max-md:flex-col border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[4.78rem] max-md:w-[20rem] max-md:h-[4rem] max-md:ml-1">
                    <div className="flex max-md:flex max-md:mr-56 max-md:mt-2 ml-8 md:ml-0">
                      <img src={mensagem} alt="" />
                      <label className="font-bold w-20" htmlFor="E-mail">
                        E-mail
                      </label>
                    </div>
                    <input className="bg-white" type="email" />
                  </div>
                  <div className="flex items-center overflow-hidden max-md:flex-col border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[4.78rem] max-md:w-[20rem] max-md:h-[4rem] max-md:ml-1">
                    <div className="flex max-md:flex max-md:mr-56 max-md:mt-2 ml-6 md:ml-0">
                      <img src={celular} alt="" />
                      <label className="font-bold" htmlFor="phone">
                        Telefone
                      </label>
                    </div>
                    <input className="bg-white" type="number" />
                  </div>
                  <div className="flex flex-col max-md:overflow-hidden items-center border-2 border-[#1C214A] rounded-2xl max-md:rounded-3xl w-[39.91rem] h-[8.60rem] max-md:w-[20rem] max-md:ml-1">
                    <div className="flex max-md:flex md:relative md:left-[-89px]">
                      <img src={conversa} alt="" />
                      <label className="font-bold " htmlFor="message">
                        Fale um pouco sobre o que precisa:
                        <span>(opcional)</span>
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
    </>
  );
}
