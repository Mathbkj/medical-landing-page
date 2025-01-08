import { FC } from "react";
import {
  FaUser,
  FaCartPlus,
  FaCircleInfo,
  FaHouseMedical,
} from "react-icons/fa6";
import header from "../assets/header-img.png";
import {
  FirstSVG,
  SecondSVG,
  ThirdSVG,
  FourthSVG,
  BeforeLast,
  Last,
} from "./global/SVG";

export const Header: FC = () => {
  return (
    <header className="min-w-screen my-2 justify-center items-center">
      <section className="bg-white flex justify-center items-center flex-row">
        <div className="flex-1 mx-10">
          <h1 className="font-bold text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            laudantium!
          </h1>
          <br />
          <h2 className="text-xl text-center text-pretty text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur incidunt corrupti nemo pariatur cupiditate? Illo
            deserunt dolores quo repudiandae harum.
          </h2>
          <br />
          <button className="text-white bg-blue-500 animate-bounce rounded-full shadow-2xl shadow-blue-300 block transition-all m-auto hover:scale-125  hover:transition-all p-4">
            Adquira o curso
          </button>
        </div>
        <div className="flex-1">
          <img style={{objectFit:"cover"}} src={header} alt="Here" width={400} height={400}></img>
        </div>
      </section>
      <section>
        <h1 className="text-slate-50 mt-5 font-bold text-2xl text-center">
          Como Funciona?
        </h1>
        <h2 className="text-slate-50 font-medium text-xl text-center text-pretty mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero
          <br />
          quas beatae sapiente neque! Ullam impedit exercitationem recusandae
          <br />
          ratione ex!
        </h2>
        <div className="flex gap-4 flex-row justify-center items-center flex-wrap">
          <div className="header-item flex my-2 flex-col-reverse items-center">
            <h2 className="text-base text-center font-medium text-white">
              Crie Um Perfil
              <br /> no Hotmart
            </h2>
            <FaUser color="white" size={20} />
            <h1 className="text-black bg-slate-50 rounded-full px-2 my-4">1</h1>
          </div>
          <div className="header-item flex my-2 flex-col-reverse items-center">
            <h2 className="text-base ht text-center font-medium text-white">
              Vá para a<br /> página de compra
            </h2>
            <FaCartPlus color="white" size={20} />
            <h1 className="text-black bg-slate-50 rounded-full px-2 my-4">2</h1>
          </div>
          <div className="header-item flex my-2 flex-col-reverse items-center">
            <h2 className="text-base ht text-center font-medium text-white">
              Insira suas informações
              <br />
              de Pagamento
            </h2>
            <FaCircleInfo color="white" size={20} />
            <h1 className="text-black bg-slate-50 rounded-full px-2 my-4">3</h1>
          </div>
          <div className="header-item flex mx-3 my-2 flex-col-reverse items-center">
            <h2 className="text-xl text-center font-medium text-white">
              Pronto!
              <br /> Agora é só aproveitar
            </h2>
            <FaHouseMedical color="white" size={20} />
            <h1 className="text-black bg-slate-50 rounded-full px-5 my-2">4</h1>
          </div>
        </div>
      </section>
      <section className="w-full header-footer">
        <div className="hf-h">
          <h1 className="text-white text-center font-bold mt-4 text-2xl">
            Seu Aprendizado
          </h1>
        </div>
        <div className="hf-m place-self-center p-3">
          <div className="hf-grid grid gap-5 grid-cols-3 grid-rows-2 my-8">
            <div className="hf-card place-content-center place-items-center outline-dotted outline-white">
              <div className="card-title flex flex-col">
                <div className="card-icon mx-auto my-3">
                  <FirstSVG />
                </div>

                <h1 className="text-slate-50 font-bold text-center p-5">
                  Lorem ipsum dolor sit amet.
                </h1>
              </div>
              <div className="card-content text-slate-50 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                ullam? Ipsam similique molestiae officiis aperiam cupiditate hic
                enim debitis amet ad non nam, sapiente nemo quis placeat minus
                recusandae quam.
              </div>
            </div>
            <div className="hf-card place-content-center place-items-center outline-dotted outline-white">
              <div className="card-title flex flex-col">
                <div className="card-icon mx-auto my-3">
                  <SecondSVG />
                </div>

                <h1 className="text-slate-50 font-bold text-center p-5">
                  Lorem ipsum dolor sit amet.
                </h1>
              </div>
              <div className="card-content text-slate-50 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                ullam? Ipsam similique molestiae officiis aperiam cupiditate hic
                enim debitis amet ad non nam, sapiente nemo quis placeat minus
                recusandae quam.
              </div>
            </div>
            <div className="hf-card  place-content-center place-items-center outline-dotted outline-white">
              <div className="card-title flex flex-col">
                <div className="card-icon mx-auto my-3">
                  <ThirdSVG />
                </div>

                <h1 className="text-slate-50 font-bold text-center p-5">
                  Lorem ipsum dolor sit amet.
                </h1>
              </div>
              <div className="card-content text-slate-50 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                ullam? Ipsam similique molestiae officiis aperiam cupiditate hic
                enim debitis amet ad non nam, sapiente nemo quis placeat minus
                recusandae quam.
              </div>
            </div>
            <div className="hf-card place-content-center place-items-center outline-dotted outline-white">
              <div className="card-title flex flex-col">
                <div className="card-icon mx-auto my-3">
                  <FourthSVG />
                </div>

                <h1 className="text-slate-50 font-bold text-center p-5">
                  Lorem ipsum dolor sit amet.
                </h1>
              </div>
              <div className="card-content text-slate-50 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                ullam? Ipsam similique molestiae officiis aperiam cupiditate hic
                enim debitis amet ad non nam, sapiente nemo quis placeat minus
                recusandae quam.
              </div>
            </div>
            <div className="hf-card place-content-center place-items-center outline-dotted outline-white">
              <div className="card-title flex flex-col">
                <div className="card-icon mx-auto my-3">
                  <BeforeLast />
                </div>

                <h1 className="text-slate-50 font-bold text-center p-5">
                  Lorem ipsum dolor sit amet.
                </h1>
              </div>
              <div className="card-content text-slate-50 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                ullam? Ipsam similique molestiae officiis aperiam cupiditate hic
                enim debitis amet ad non nam, sapiente nemo quis placeat minus
                recusandae quam.
              </div>
            </div>
            <div className="hf-card place-content-center place-items-center outline-dotted outline-white">
              <div className="card-title flex flex-col">
                <div className="card-icon mx-auto my-3">
                  <Last />
                </div>

                <h1 className="text-slate-50 font-bold text-center p-5">
                  Lorem ipsum dolor sit amet.
                </h1>
              </div>
              <div className="card-content text-slate-50 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                ullam? Ipsam similique molestiae officiis aperiam cupiditate hic
                enim debitis amet ad non nam, sapiente nemo quis placeat minus
                recusandae quam.
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
