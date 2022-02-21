import React, { useState } from "react";

import emailjs from "emailjs-com";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "../styles/Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  console.log(process.env.SERVICE_ID)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(error)
        }
      );
    setShow(true)
    setName('')
    setSubject('')
    setMessage('')
    setEmail('')
  };
  return (
    <form className={styles.form} onSubmit={sendEmail}>
      <h1 className={styles.form__title}>Send a message</h1>
      {show ? (
        <div className={styles.form__iconContainer} >
          <CheckCircleIcon className={styles.form__icon} />
          <h6>message was sent successfully</h6>
        </div>
      ) : (
      <h2>{errorMessage}</h2>
        )}
      <div className={styles.form__inputContainer}>
        <label htmlFor=""></label>
        <p className={styles.form__inputName}>Name</p>
        <input
          className={styles.form__input}
          type="text"
          // placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* ######################################################### */}
      <div className={styles.form__holderContainer}>
        <div className={`${styles.form__inputContainer} ${styles.marginRight}`}>
          <label htmlFor="subject"></label>
          <p className={styles.form__inputName}>Subject</p>
          <input
            className={styles.form__input}
            name="subject"
            type="text"
            // placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>


        <div className={styles.form__inputContainer}>
          <label htmlFor="email"></label>
          <p className={styles.form__inputName}>Email</p>
          <input
            className={styles.form__input}
            name="email"
            type="text"
            // placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.form__inputContainer}>
        <label htmlFor="message"></label>
        <p className={styles.form__inputName}>Message</p>
        <textarea
          className={styles.form__input}
          name="message"
          type="text"

          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What can we do for you"
        />
      </div>
      <button type="submit" className={styles.form__btn}>
        Send message
      </button>
    </form>
  );
}

export default Form;
