import { AboutStyle } from "./style";
const AboutMe = () => {
  return (
    <div>
      <h1 className={AboutStyle.aboutTitle}>-ABOUT ME-</h1>
      <div className={AboutStyle.abMain}>
        <div>
          <img
            className={AboutStyle.imageOne}
            src="/public/images/image1.png"
            alt=""
          />
        </div>
        <div>
          <div className={AboutStyle.paragraphBox}>
            <p className={AboutStyle.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a feugiat tellus. Vivamus lorem eros, tempus a orci vel, feugiat
              viverra ligula. Ut mauris metus, feugiat vitae suscipit sit amet,
              viverra eu elit. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </p>
          </div>
          <div>
            <h1 className={AboutStyle.stackTitle}>STACKS</h1>
            <div className="w-2/12 bg-white h-[1px] mx-auto" />
          </div>
          <div
            className="flex justify-between items-center 2xl:pt-7 xl:pt-4 lg:pt-4
          md:pt-2 sm:pt-2 pt-1
          "
          >
            <div>
              <img src="/icons/Next.svg" alt="" />
            </div>
            <div>
              <img src="/icons/React.svg" alt="" />
            </div>
            <div>
              <img src="/icons/Tailwind.svg" alt="" />
            </div>
            <div>
              <img src="/icons/FairBase.svg" alt="" />
            </div>
            <div>
              <img src="/icons/Javascript.svg" alt="" />
            </div>
            <div>
              <img src="/icons/Typescript.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
