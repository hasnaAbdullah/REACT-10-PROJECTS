import React from "react";
import styles from "./ContactForm.module.css";
import { MdMessage, MdMail, MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import Form from "../Form/Form";
function ContactForm() {
  return (
    <section className={styles.form_section}>
      <div className={styles.form_container}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"20px"} />}
          />
          <Button text="VIA CALL" icon={<MdPhone fontSize={"20px"} />} />
        </div>

        <div>
          <Button
            text={"VIA EMAIL FORM"}
            icon={<MdMail fontSize={"20px"} />}
            isOutline={true}
          />
        </div>

        <Form />
      </div>
      <div className="form-banner">
        <img src="../../../public/images/contact-banner.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
