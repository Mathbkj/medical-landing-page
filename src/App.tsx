import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Nav />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Header />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 3 } }}
      >
        <Main />
      </motion.div>
    </>
  );
}

export default App;
