import { ContactStyle } from "./style";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const validate = (values) => {
    const errors = {};

    if (values.user_name.length <= 0) {
      errors.user_name = "Required";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
      errors.user_email = "Required";
    }

    if (values.subject.length <= 0) {
      errors.subject = "Required";
    }

    if (values.message.length <= 0) {
      errors.message = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (value) => {
      emailjs
        .sendForm("service_31onzql", "template_9msm2hc", value, {
          publicKey: "0n6P60s_euTh2aSDj",
        })
        .then(
          () => {
            toast.success("Successful", {
              style: { color: "black", backgroundColor: "black" },
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed", {
              style: { color: "black", backgroundColor: "black" },
            });
          }
        );
    },
  });

  return (
    <div>
      <h1 className={ContactStyle.contactTitle}>&#60;CONTACT ME /&#62;</h1>
      <div className={ContactStyle.ctMain}>
        <div>
          <img
            src="/images/image2.png"
            className={`${ContactStyle.imageTwo}`}
            alt=""
          />
        </div>

        <div>
          <form
            className="flex flex-col gap-4"
            ref={form}
            onSubmit={formik.handleSubmit}
          >
            <div className="">
              <input
                className={`${ContactStyle.input} ${
                  formik.errors.user_name ? ContactStyle.error : ""
                } `}
                onChange={formik.handleChange}
                value={formik.values.user_name}
                type="text"
                placeholder="Name"
                name="user_name"
              />
            </div>
            <div className="">
              <input
                className={`${ContactStyle.input} ${
                  formik.errors.user_email ? ContactStyle.error : ""
                } `}
                onChange={formik.handleChange}
                value={formik.values.user_email}
                type="text"
                placeholder="Email"
                name="user_email"
              />
            </div>
            <div className="">
              <input
                className={`${ContactStyle.input} ${
                  formik.errors.subject ? ContactStyle.error : ""
                } `}
                onChange={formik.handleChange}
                value={formik.values.subject}
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </div>

            <div>
              <textarea
                className={`${ContactStyle.textarea} ${
                  formik.errors.message ? ContactStyle.error : ""
                }`}
                onChange={formik.handleChange}
                value={formik.values.message}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="errors"></div>
              ) : null}
            </div>

            <div>
              <button
                onClick={formik.handleSubmit}
                type="submit"
                className="text-center bg-white text-black 2xl:w-28 2xl:py-1 2xl:px-3 rounded-full
            xl:w-24 lg:w-24 text-sm md:w-20 md:text-sm sm:w-20 sm:text-sm w-20 p-1 mb-3"
              >
                Send
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
