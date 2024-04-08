import Button from "../../components/button/index.jsx";
import { HomeStyles } from "./styles.js";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <article className="flex flex-col gap-6 items-center h-dvh">
      <section>
        <motion.img
          className={HomeStyles.images}
          initial={{ y: "-40vw" }}
          animate={{ y: 0 }}
          transition={{delay: 0.3, duration: 1, type: "spring"}}
          src="/images/pejman.jpg"
          alt="Pejman Avatar"
        />
      </section>

      <section className="text-center">
        <motion.h1 className={HomeStyles.heroTitle}>PEJMAN KHANI</motion.h1>
        <h3 className={HomeStyles.subTitle}>FRONT-END DEVELOPER</h3>
      </section>

      <motion.section className="flex gap-4 flex-col md:flex-row"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.3, duration:0.6}}
      >
        <Button title="Contact 🤙" />
        <Button title="Resume 📥" type="outline" isLink link="/pejmanCV.pdf" />
      </motion.section>
    </article>
  );
};

export default Home;
