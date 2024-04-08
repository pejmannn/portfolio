import { AboutStyle } from "./style";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div>
      <motion.h1
        className={AboutStyle.aboutTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        &#60;ABOUT ME /&#62;
      </motion.h1>
      <div
        className={`w-11/12 md:w-8/12 mx-auto flex gap-14 mt-16 flex-col md:flex-row`}
      >
        <motion.div
          className="flex justify-center"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="w-auto h-60 md:h-96"
            src="/images/image1.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="text-justify md:w-6/12 flex flex-col gap-5"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3}}
        >
          <div>
            <p className={`text-base md:text-lg`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a feugiat tellus. Vivamus lorem eros, tempus a orci vel, feugiat
              viverra ligula. Ut mauris metus, feugiat vitae suscipit sit amet,
              viverra eu elit. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </p>
          </div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            
            <div>
              <h2 className={AboutStyle.stackTitle}>STACKS</h2>

              <div className="w-2/12 bg-white h-[1px] mx-auto" />
            </div>
            <div className="flex justify-between items-center">
              <div className="w-11 h-11">
                <img
                  className={AboutStyle.stackIcons}
                  src="/icons/Next.svg"
                  alt=""
                />
              </div>
              <div className="w-11 h-11">
                <img
                  className={AboutStyle.stackIcons}
                  src="/icons/React.svg"
                  alt=""
                />
              </div>
              <div className="w-11 h-11">
                <img
                  className={AboutStyle.stackIcons}
                  src="/icons/Tailwind.svg"
                  alt=""
                />
              </div>
              <div className="w-11 h-11">
                <img
                  className={AboutStyle.stackIcons}
                  src="/icons/FairBase.svg"
                  alt=""
                />
              </div>
              <div className="w-11 h-11">
                <img
                  className={AboutStyle.stackIcons}
                  src="/icons/Javascript.svg"
                  alt=""
                />
              </div>
              <div className="w-11 h-11">
                <img
                  className={AboutStyle.stackIcons}
                  src="/icons/Typescript.svg"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
