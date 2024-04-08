import Button from "../../components/button/index.jsx";
import { HomeStyles } from "./styles.js";
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <article className="flex flex-col gap-6 items-center h-dvh">
      <section>
        <motion.img
          className={HomeStyles.images}
          initial={{y:'-550px'}}
          animate={{y:'-10px'}}
          transition={{duration:0.3, type:'spring', stiffness: 140, }}
          src="/images/pejman.jpg"
          alt="Pejman Avatar"
        />
      </section>

      <section className="text-center">
        <h1
          className={HomeStyles.heroTitle}
        >
          PEJMAN KHANI
        </h1>
        <h3
          className={HomeStyles.subTitle}>
          FRONT-END DEVELOPER
        </h3>
      </section>

      <section className="flex gap-4 flex-col md:flex-row">
        <Button title="Contact 🤙" />
        <Button title="Resume 📥" type="outline" isLink link="/pejmanCV.pdf"  />
      </section>
    </article>
  );
};

export default Home;