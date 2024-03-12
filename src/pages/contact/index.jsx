const Contact = () => {
  return (
    <div>
      <h1
        className="text-center 2xl:text-2xl 2xl:pt-32 font-bold
      xl:text-xl xl:pt-16
      lg:text-xl lg:pt-16
      md:text-lg md:pt-16
      sm:text-md sm:pt-16
      text-md pt-16"
      >
        -CONTACT ME-
      </h1>
      <div
        className="flex 2xl:flex-row 2xl:justify-center 2xl:pt-10 2xl:gap-9
      xl:pt-6 xl:gap-7 xl:flex-row xl:justify-center
      lg:pt-10 lg:gap-7 lg:flex-row lg:justify-center
      md:pt-10 md:gap-7 md:flex-row md:justify-center
      sm:pt-10 sm:gap-5 sm:flex-row sm:justify-center
      pt-3 flex-col item-center "
      >
        <div>
          <img
            src="/public/images/image2.png"
            className="2xl:w-[450px] 2xl:h-[450px]
            xl:w-[350px] xl:h-[350px]
            lg:w-[300px] lg:h-[300px]
            md:w-[250px] md:h-[250px]
            sm:w-[250px] sm:h-[250px]
            w-[200px] h-[200px]"
            alt=""
          />
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <input
              className="text-white bg-inherit border border-[#D1D1D1] 2xl:py-1 2xl:p-1 2xl:pl-3  2xl:rounded-[4px]
              xl:pl-2  xl:rounded-[2px] xl:text-sm xl:py-1
              lg:pl-2  lg:rounded-[2px] lg:text-sm lg:py-1
              md:pl-2  md:rounded-[2px] md:text-[0.8rem] md:py-[3px]
              sm:pl-2  sm:rounded-[2px] sm:text-[0.8rem] sm:py-[3px]
              "
              type="text"
              placeholder="Name"
            />
            <input
              className="text-white bg-inherit border border-[#D1D1D1] 2xl:py-1 2xl:p-1 2xl:pl-3 2xl:rounded-[4px]
              xl:pl-2  xl:rounded-[2px] xl:text-sm xl:py-1
              lg:pl-2  lg:rounded-[2px] lg:text-sm lg:py-1
              md:pl-2  md:rounded-[2px] md:text-[0.8rem] md:py-[3px]
              sm:pl-2  sm:rounded-[2px] sm:text-[0.8rem] sm:py-[3px]"
              type="email"
              placeholder="Email"
            />
            <input
              className="text-white bg-inherit border border-[#D1D1D1] 2xl:py-1 2xl:p-1 2xl:pl-3 2xl:rounded-[4px]
              xl:pl-2  xl:rounded-[2px] xl:text-sm xl:py-1
              lg:pl-2  lg:rounded-[2px] lg:text-sm lg:py-1
              md:pl-2  md:rounded-[2px] md:text-[0.8rem] md:py-[3px]
              sm:pl-2  sm:rounded-[2px] sm:text-[0.8rem] sm:py-[3px]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="text-white bg-inherit border border-[#D1D1D1] 2xl:h-60 2xl:py-1 2xl:p-1 2xl:pl-3 2xl:rounded-[4px] resize-none
              xl:pl-2  xl:rounded-[2px] xl:h-44 xl:text-sm xl:py-1
              lg:pl-2  lg:rounded-[2px] lg:h-28 lg:text-sm lg:py-1
              md:pl-2  md:rounded-[2px] md:h-20 md:text-sm md:py-1
              sm:pl-2  sm:rounded-[2px] sm:h-20 sm:text-sm sm:py-1"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <button
              className="text-center bg-white text-black 2xl:w-28 2xl:py-1 2xl:px-3 rounded-full
            xl:w-24
            lg:w-24 text-sm
            md:w-20 md:text-sm
            sm:w-20 sm:text-sm"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
