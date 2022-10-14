import React from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import react, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_97lndgn",
      "template_3y94yrh",
      form.current,
      "R9Ya00fRzb9a4_F54"
    );
    e.target
      .reset()

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Cinatct Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className="contact-icon" />
            <h4>Email</h4>
            <h5>sunilreddy.chinthaparti@gmail.com</h5>
            <a href="mailto:sunilreddy.chinthaparti@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact__option">
            <GrInstagram className="contact-icon" />
            <h4>Instagram</h4>
            <h5> i_sunil_reddy</h5>
            <a href="https://www.instagram.com/i_sunil_reddy/" target="_blank">
              DM in insta
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+918555095589"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Sweet Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
