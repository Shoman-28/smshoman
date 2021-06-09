import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import "./Contact.css";
// import Fade from "react-reveal/Fade";
// import Rotate from "react-reveal/Rotate";
const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_hqfaaec",
      "template_w3t568d",
      toSend,
      "user_6lsa1osMaGbxTn5uJmqTb"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div class="homePage pt-5 pb-5">
      {/* <Rotate top left> */}
        <h1 className="mb-5 pl-5 pt-5">Contact Me</h1>
      {/* </Rotate> */}
      <div className="container">
        <div className="mt-5 pt-5 mb-5">
          <div className="row">
            <div class=" col-md-6 mt-4">
              {/* <Fade left> */}
                <h3>
                  Let's Get in
                  <br />
                  Touch
                </h3>
                <h5 class="">Address</h5>
                <h5 class="">+88 01728165115</h5>
                <h5 class="">Kishoreganj, Dhaka.</h5>
              {/* </Fade> */}
            </div>
            <div className=" col-md-6 contact-from shadow-lg text-center p-4">
              <div className="">
                {/* <Fade right> */}
                  {/*  EmailJS massage*/}
                  <form onSubmit={onSubmit} className="">
                    <input
                      type="text"
                      name="from_name"
                      className="name"
                      {...register("from_name", { required: true })}
                      placeholder="Your Name"
                      value={toSend.from_name}
                      onChange={handleChange}
                    />{" "}
                    <br />
                    {/* <input type='text' name='to_name' placeholder='to name' value={toSend.to_name} onChange={handleChange}/> */}
                    <input
                      name="email"
                      className="email"
                      {...register("reply_to", { required: true })}
                      placeholder="Your Email"
                      value={toSend.reply_to}
                      onChange={handleChange}
                    />{" "}
                    <br />
                    <textarea
                      name="reply_to"
                      className="massage"
                      {...register("message", { required: true })}
                      placeholder="Message"
                      value={toSend.message}
                      onChange={handleChange}
                    />{" "}
                    <br />
                    <br />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <Button
                      type="submit"
                      variant="success"
                      className="submit-button"
                    >
                      Send Message
                    </Button>
                  </form>
                {/* </Fade> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
