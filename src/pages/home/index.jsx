const Home = () => {
  return (
    <article className="flex flex-col items-center">
      <div>
        <img
          className="2xl:w-[303px] 2xl:h-[303px] rounded-full 2xl:mt-32
          xl:w-[203px] xl:h-[203px] xl:mt-16
          lg:w-[203px] lg:h-[203px] lg:mt-16
          md:w-[170px] md:h-[170px] md:mt-16
          sm:w-[160px] sm:h-[160px] sm:mt-16
          w-[170px] h-[170px] mt-20
          "
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
        className="2xl:mt-4
      xl:mt-4
      lg:mt-4
      md:mt-3
      sm:mt-3
      mt-4
      "
      >
        <button
          className="border 2xl:px-8 2xl:py-1 rounded-full 2xl:mr-3 focus:bg-white focus:text-black
        xl:px-5 xl:mr-3 xl:text-sm
        lg:px-5 lg:mr-2 lg:text-sm
        md:px-4 md:mr-2 md:text-sm
        sm:px-4 sm:mr-1 sm:text-[0.8rem]
        px-4 py-[1px] mr-1 text-[0.7rem]
        "
        >
          Contact
        </button>
        <button className="border 2xl:px-8 2xl:py-1 rounded-full 2xl:ml-3 focus:bg-white focus:text-black
        xl:px-5 xl:ml-3 xl:text-sm
        lg:px-5 lg:ml-2 lg:text-sm
        md:px-4 md:ml-2 md:text-sm
        sm:px-4 sm:ml-1 sm:text-[0.8rem]
        px-4 py-[1px] ml-1 text-[0.7rem]
        ">
          Resume
        </button>
      </div>
    </article>
  );
};

export default Home;
