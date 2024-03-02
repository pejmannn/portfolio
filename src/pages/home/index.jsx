const Home = () => {
  return (
    <article className="flex flex-col items-center">
      <div>
        <img
          className="2xl:w-[303px] 2xl:h-[303px] 2xl:rounded-full 2xl:mt-32"
          src="/public/images/pejman.jpg"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="2xl:text-4xl font-bold 2xl:mt-5">PEJMAN KHANI</h1>
        <h3 className="2xl:text-lg 2xl:mt-1">FRONT-END DEVELOPER</h3>
      </div>
      <div className="2xl:mt-4">
        <button className="2xl:border 2xl:px-8 2xl:py-1 rounded-full 2xl:mr-3 focus:bg-white focus:text-black">
          Contact
        </button>
        <button className="2xl:border 2xl:px-8 2xl:py-1 rounded-full 2xl:ml-3 focus:bg-white focus:text-black">
          Resume
        </button>
      </div>
    </article>
  );
};

export default Home;
