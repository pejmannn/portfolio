import { AboutStyle } from "./style";
const AboutMe = () => {
  return (
    <div>
      <h1 className={AboutStyle.aboutTitle}>&#60;ABOUT ME /&#62; </h1>
      <div
        className={`w-11/12 md:w-8/12 mx-auto flex gap-14 mt-16 flex-col md:flex-row`}
      >
        <div className="flex justify-center">
          <img className="w-auto h-60 md:h-96" src="/images/image1.png" alt="" />
        </div>
        <div className="text-justify md:w-6/12 flex flex-col gap-5">
          <div>
            <p className={`text-base md:text-sm`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a feugiat tellus. Vivamus lorem eros, tempus a orci vel, feugiat
              viverra ligula. Ut mauris metus, feugiat vitae suscipit sit amet,
              viverra eu elit. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </p>
          </div>

          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
