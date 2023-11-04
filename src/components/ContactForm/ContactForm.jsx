import React from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import { BiMessageDetail } from "react-icons/bi";
import Button from "../Button/Button";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
  const onViaClickCall = () => {
    console.log("You want to call to contact us.");
  };
  const onViaClickChat = () => {
    console.log("You want to chat to contact us.");
  };
  const onViaClickEmail = () => {
    console.log("You want to email to contact us.");
  };
  // const initialState1 = {
  //   name: "",
  // };
  // const initialState2 = {
  //   email: "",
  // };
  // const initialState3 = {
  //   text: "",
  // };

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [text, setText] = useState(" ");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    console.log({
      name,
      email,
      text,
    });
  };
  

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaClickChat}
            text="VIA SUPPORT CHAT"
            icon={<BiMessageDetail fontSize="1.2rem" />}
          ></Button>
          <Button
            onClick={onViaClickCall}
            text="VIA CALL"
            icon={<IoCall fontSize="1.2rem" />}
          ></Button>
        </div>
        <div className={styles.bottom_btn}>
          <Button
            onClick={onViaClickEmail}
            isSecondary={true} //prop for making secondary button different
            text="VIA EMAIL FORM"
            icon={<MdOutlineEmail fontSize="1.2rem" />}
          ></Button>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">EMAIL</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">TEXT</label>
            <textarea name="text" cols="30" rows="10"></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT"></Button>
          </div>
          <div>
            {"Name: " +
              name +
              " " +
              "Email: " +
              email +
              " " +
              "Message: " +
              text}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/img/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
