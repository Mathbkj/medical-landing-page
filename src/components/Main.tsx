import { FC } from "react";
import { FaCouch, FaMoneyBillTrendUp } from "react-icons/fa6";
import care1 from "../assets/care.jpg";
import care2 from "../assets/care2.jpg";
import care3 from "../assets/care3.jpg";
import Accordion from "./global/Accordion";

export const Main: FC = () => {
  return (
    <main className="flex w-screen justify-center items-center flex-col">
      <div className="w-full main-header bg-slate-200 justify-center items-center gap-10">
        <div className="FAQ bg-slate-950  w-full ">
          <h1 className="text-green-400 pt-4 text-center text-2xl font-light">
            FAQ
          </h1>
          <h2 color="" className="text-green-400 opacity-80 text-center">
            Está com dúvida sobre o curso, o tempo de duração ou até mesmo o
            conteúdo? Não se preocupe, consulte nosso FAQ
          </h2>
          <Accordion
            named="Dúvida 1"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosminus quis hic quia. Quasi officiis incidunt accusamus minim exercitationem tempora neque iusto velit, facere ex nulla tenetu praesentium numquam mollitia."
            }
          />
          <Accordion
            named="Dúvida 2"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosminus quis hic quia. Quasi officiis incidunt accusamus minim exercitationem tempora neque iusto velit, facere ex nulla tenetu praesentium numquam mollitia."
            }
          />
          <Accordion
            named="Dúvida 3"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosminus quis hic quia. Quasi officiis incidunt accusamus minim exercitationem tempora neque iusto velit, facere ex nulla tenetu praesentium numquam mollitia."
            }
          />
          <Accordion
            named="Dúvida 4"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosminus quis hic quia. Quasi officiis incidunt accusamus minim exercitationem tempora neque iusto velit, facere ex nulla tenetu praesentium numquam mollitia."
            }
          />
          <Accordion
            named="Dúvida 5"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosminus quis hic quia. Quasi officiis incidunt accusamus minim exercitationem tempora neque iusto velit, facere ex nulla tenetu praesentium numquam mollitia."
            }
          />
        </div>
        <div className="title-div block">
          <h1 className="h-title font-bold text-center text-2xl mt-6">
            Lorem ipsum dolor sit amet.
          </h1>
          <h2 className="h-subtitle font-regular text-center text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            <br />
            provident totam error ea dolore doloribus, possimus atque natus
            <br />
            omnis. Quis?
          </h2>
        </div>

        <div className="flex justify-start items-center flex-row flex-wrap">
          <div className="img-div mx-10 p-4">
            <img
              className=" outline"
              style={{ objectFit: "contain" }}
              width={200}
              height={200}
              src={care1}
              alt="care1.png"
            ></img>
          </div>

          <div className="text-div flex justify-start items-center flex-col gap-3">
            <h1 className="text-slate font-bold text-center">
              Lorem ipsum dolor sit amet.
            </h1>
            <h2 className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              <br />
              minus quis hic quia. Quasi officiis incidunt accusamus minima
              <br />
              exercitationem tempora neque iusto velit, facere ex nulla tenetur
              praesentium numquam mollitia.
            </h2>
          </div>
        </div>
        <div className="flex justify-start items-center flex-row-reverse flex-wrap">
          <div className="img-div mx-10 p-4">
            <img
              className="rounded-md outline"
              style={{ objectFit: "contain" }}
              width={200}
              height={200}
              src={care2}
              alt="care2.png"
            ></img>
          </div>
          <div className="text-div flex items-center flex-col gap-3">
            <h1 className="text-slate font-bold text-center">
              Lorem ipsum dolor sit amet.
            </h1>
            <h2 className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              <br />
              minus quis hic quia. Quasi officiis incidunt accusamus minima
              <br />
              exercitationem tempora neque iusto velit, facere ex nulla tenetur
              praesentium numquam mollitia.
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row flex-wrap">
          <div className="img-div mx-10 p-4">
            <img
              className="rounded-md outline"
              style={{ objectFit: "contain" }}
              width={200}
              height={200}
              src={care3}
              alt="care2.png"
            ></img>
          </div>
          <div className="text-div flex items-center flex-col gap-3">
            <h1 className="text-slate font-bold text-center">
              Lorem ipsum dolor sit amet.
            </h1>
            <h2 className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              <br />
              minus quis hic quia. Quasi officiis incidunt accusamus minima
              <br />
              exercitationem tempora neque iusto velit, facere ex nulla tenetur
              praesentium numquam mollitia.
            </h2>
          </div>
        </div>
      </div>
      <div className="main-content bg-slate-950 p-10 w-full">
        <div className="main-cards gap-5 w-full justify-center items-center flex flex-wrap">
          <div className="card-item w-[300px] bg-slate-900 p-10 flex flex-col gap-y-10">
            <div className="card-header flex flex-col-reverse">
              <h1 className="card-title text-white font-bold text-2xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <div className="card-icon mx-auto my-2">
                <FaCouch size={30} color="white" />
              </div>
            </div>

            <p className="font-regular text-base text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              inventore.
            </p>
          </div>
          <div className="card-item p-10 w-[300px] bg-slate-900 flex flex-col gap-y-10">
            <div className="card-header flex flex-col-reverse">
              <h1 className="card-title text-white font-bold text-2xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <div className="card-icon mx-auto my-3">
                <FaMoneyBillTrendUp size={30} color="white" />
              </div>
            </div>
            <p className="font-regular text-base text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              inventore.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
