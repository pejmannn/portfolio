import { ContactStyle } from "./style";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";

const Contact = () => {
  const form = useRef()
  const validate = values => {
    const errors = {}

    if(!values.user_name){
      errors.user_name = 'Required'
    }else if(values.user_name.length > 0){
      errors.user_name = 'please fill the name'
    }

    if(!values.user_email){
      errors.user_email = 'Required'
    }else if(values.user_email.length < 4){
      errors.user_email = 'must be 5 characters or more'
    }
  

  if(!values.subject){
    errors.subject = 'Required'
  }else if(values.subject.length > 0){
    errors.subject = 'please fill the name'
  }

  if(!values.message){
    errors.message = 'Required'
  }else if(values.message.length > 0){
    errors.message = 'please fill the name'
  }
  return errors
}
  const formik = useFormik({
    initialValues:{
      user_name:'',
      user_email:'',
      subject:'',
      message:''
    },
    onSubmit: value => {
      alert(JSON.stringify(value, null, 2))
      emailjs
      .sendForm('service_31onzql', 'template_9msm2hc', value, {
        publicKey: '0n6P60s_euTh2aSDj',
      })
      .then(
        () => {
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  })



    
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
          ref={form} onSubmit={formik.handleSubmit}
          >
            <input
              className={ContactStyle.input}
              onChange={formik.handleChange}
              value={formik.values.user_name}
              type="text"
              placeholder="Name"
              name="user_name"
            />
          
            <input
              className={ContactStyle.input}
              onChange={formik.handleChange}
              value={formik.values.user_email}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <input
              className={ContactStyle.input}
              onChange={formik.handleChange}
              value={formik.values.subject}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className={ContactStyle.textarea}
              onChange={formik.handleChange}
              value={formik.values.user_message}
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
