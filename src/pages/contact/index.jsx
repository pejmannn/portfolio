import { ContactStyle } from "./style";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_31onzql', 'template_9msm2hc', form.current, {
        publicKey: '0n6P60s_euTh2aSDj',
      })
      .then(
        () => {
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
          <form className="flex flex-col gap-4"
          ref={form} onSubmit={sendEmail}
          >
            <input
              className={ContactStyle.input}
              type="text"
              placeholder="Name"
              name="user_name"
            />
          
            <input
              className={ContactStyle.input}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <input
              className={ContactStyle.input}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className={ContactStyle.textarea}
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <button type="submit"
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
