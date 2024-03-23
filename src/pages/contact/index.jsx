import { ContactStyle } from "./style";
const Contact = () => {
  return (
    <div>
      <h1
        className={ContactStyle.contactTitle}
      >
        -CONTACT ME-
      </h1>
      <div
        className={ContactStyle.ctMain}
      >
        <div>
          <img
            src="/public/images/image2.png"
            className={ContactStyle.imageTwo}
            alt=""
          />
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <input
              className={ContactStyle.input}
              type="text"
              placeholder="Name"
            />
            <input
              className={ContactStyle.input}
              type="email"
              placeholder="Email"
            />
            <input
              className={ContactStyle.input}
              type="text"
              placeholder="Subject"
            />
            <textarea
              className={ContactStyle.textarea}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <button
              className="text-center bg-white text-black 2xl:w-28 2xl:py-1 2xl:px-3 rounded-full
            xl:w-24 lg:w-24 text-sm md:w-20 md:text-sm sm:w-20 sm:text-sm"
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
