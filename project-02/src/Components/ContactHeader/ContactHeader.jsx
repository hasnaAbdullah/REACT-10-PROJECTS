import React from "react";
import styles from "./ContactHeader.module.css";
function ContactHeader() {
  return (
    <div className={`container contact-description`}>
      <h1 className={styles["title"]}>CONTACT US</h1>
      <p className={styles["description"]}>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </div>
  );
}

export default ContactHeader;
