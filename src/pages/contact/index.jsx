import { ContactStyle } from "./style";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import './contact.css'

const Contact = () => {
  const form = useRef();
  const validate = (values) => {
    const errors = {};

    if (!values.user_name) {
      errors.user_name = "please fill the name";
    } else if (values.user_name.length > 0) {
      errors.user_name = "Required";
    }

    if (!values.user_email) {
      errors.user_email = "please fill the name";
    } else if (values.user_email.length < 4) {
      errors.user_email = "Required";
    }

    if (!values.subject) {
      errors.subject = "please fill the name";
    } else if (values.subject.length > 0) {
      errors.subject = "Required";
    }

    if (!values.message) {
      errors.message = "please fill the name";
    } else if (values.message.length > 0) {
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
      alert(JSON.stringify(value, null, 2));
      emailjs
        .sendForm("service_31onzql", "template_9msm2hc", value, {
          publicKey: "0n6P60s_euTh2aSDj",
        })
        .then(
          () => {},
          (error) => {
            console.log("FAILED...", error.text);
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
            className={ContactStyle.imageTwo}
            alt=""
          />
        </div>
        <div>
          <form
            className="flex flex-col gap-4"
            ref={form}
            onSubmit={formik.handleSubmit}
          >
            {/* {formik.touched.user_name && formik.errors.user_name ? (
              <div className="errors"></div>
            ) : null} */}
            <input
              className={`${ContactStyle.input} ${formik.touched.user_name && formik.errors.user_name && ContactStyle.border}`}
              onChange={formik.handleChange}
              value={formik.values.user_name}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            {/* {formik.touched.user_email && formik.errors.user_email ? (
              <div className="errors"></div>
            ) : null} */}
            <input
              className={`${ContactStyle.input} ${formik.touched.user_email && formik.errors.user_email && ContactStyle.border}`}
              onChange={formik.handleChange}
              value={formik.values.user_email}
              onBlur={formik.handleBlur}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            {/* {formik.touched.subject && formik.errors.subject ? (
              <div className="errors"></div>
            ) : null} */}
            <input
              className={`${ContactStyle.input} ${formik.touched.subject && formik.errors.subject && ContactStyle.border}`}
              onChange={formik.handleChange}
              value={formik.values.subject}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            {/* {formik.touched.message && formik.errors.message ? (
              <div className="errors"></div>
            ) : null} */}
            <textarea
              className={`${ContactStyle.textarea} ${formik.touched.message && formik.errors.message && ContactStyle.border}`}
              onChange={formik.handleChange}
              value={formik.values.user_message}
              onBlur={formik.handleBlur}
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>

            <button
              type="submit"
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
