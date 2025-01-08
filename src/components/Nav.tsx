import { FC } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { motion} from "motion/react";

export const Nav: FC = () => {
  
  return (
    <nav className="w-screen bg-transparent">
      <motion.ul className="flex justify-center gap-4 items-center p-3 flex-row">
        
        <li className="text-white mr-10 text-2xl">Seu Logo Aqui</li>

        <li>
          <a
            className="text-white transition-all p-2 text-xl hover:bg-white hover:text-black  hover:transition-all "
            href="#"
          >
            Home
          </a>
        </li>
        <li className="flex flex-row">
          <button className="text-black flex transition-all bg-white hover:bg-black hover:text-white hover:transition-all items-center p-2 gap-2 text-xl">
            Comprar
            <FaCartShopping />
          </button>
        </li>
        <li>
          <a
            className="p-2 text-white text-nowrap pr-8 md:text-xl text-base  hover:bg-white hover:text-black  hover:transition-all"
            href="#Trilhas"
          >
            Trilhas Do Curso
          </a>
        </li>
      </motion.ul>
    </nav>
  );
};
