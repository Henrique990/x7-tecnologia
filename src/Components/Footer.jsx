import estrelax72 from "../assets/estrelax7-2.svg";
import estrelax7 from "../assets/estrelax7.svg";
import iconFacebook from "../assets/icons/facebook.png";
import iconInstagram from "../assets/icons/instagram.png";
import iconTwitter from "../assets/icons/twitter.png";
import iconLinkedin from "../assets/icons/linkedin.png";
import iconsCelular from "../assets/icons/mobile-button.png";
import iconEmail from "../assets/icons/envelope.png";
import iconWhatsApp from "../assets/icons/whatsapp.png";


export function Footer() {
  return (
    <>
      <footer className="bg-[#12152E] pt-20 relative z-[4]">
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
    </>
  );
}
