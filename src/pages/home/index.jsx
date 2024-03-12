import Button from "../../components/button/index.jsx";
import { HomeStyles } from "./styles.js";

const Home = () => {
  return (
    <article className="flex flex-col gap-6 items-center">
      <div>
        <img
          className={HomeStyles.images}
          src="/public/images/pejman.jpg"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1
          className="2xl:text-4xl font-bold 2xl:mt-5
        xl:text-2xl xl:mt-3
        lg:text-2xl lg:mt-3
        md:text-xl md:mt-2
        sm:text-lg sm:mt-1
        text-md mt-1
        "
        >
          PEJMAN KHANI
        </h1>
        <h3
          className="2xl:text-lg 2xl:mt-1
        xl:text-sm
        lg:text-[0.9rem]
        md:text-[0.7rem]
        sm:text-[0.7rem]
        text-[0.6rem]"
        >
          FRONT-END DEVELOPER
        </h3>
      </div>
      <div
        className="flex gap-4 flex-col md:flex-row
      "
      >
        <Button title="Contact 🤙 "  />
        <Button title="Resume 📥" type="outline" />
       
      </div>
    </article>
  );
};

export default Home;
