const Contact = () => {
  return (
    <div>
      <h1 className="text-center 2xl:text-2xl 2xl:pt-32 font-bold">
        -CONTACT ME-
      </h1>
      <div className="flex justify-center 2xl:pt-10 2xl:gap-9">
        <div>
          <img
            src="/public/images/image2.png"
            className="2xl:w-[450px] 2xl:h-[450px]"
            alt=""
          />
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <input
              className="text-white bg-inherit border border-white 2xl:p-1 2xl:pl-3  2xl:rounded-[4px]"
              type="text"
              placeholder="Name"
            />
            <input
              className="text-white bg-inherit border border-white 2xl:p-1 2xl:pl-3 2xl:rounded-[4px]"
              type="email"
              placeholder="Email"
            />
            <input
              className="text-white bg-inherit border border-white 2xl:p-1 2xl:pl-3 2xl:rounded-[4px]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="text-white bg-inherit border border-white 2xl:p-1 2xl:pl-3 2xl:rounded-[4px]"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."

            ></textarea>
            <button className="text-center bg-white text-black 2xl:w-28 2xl:py-1 2xl:px-3 rounded-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
