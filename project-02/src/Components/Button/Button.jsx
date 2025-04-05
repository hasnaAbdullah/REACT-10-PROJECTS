import React from "react";
import styles from "./Button.module.css";

function Button({ text, icon, isOutline }) {
  return (
    <div>
      <button className={`${styles.btn} ${isOutline && styles.email_btn}`}>
        {/* <icon fontSize={"20px"} /> */}
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
