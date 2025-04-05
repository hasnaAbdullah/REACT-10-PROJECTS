import React from "react";
import styles from "./Input.module.css";
function Input({ labelText, inputText, inputType, isInput }) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={labelText}>{labelText}</label>
      {isInput ? (
        <input id={labelText} type={inputType} placeholder={inputText} />
      ) : (
        <textarea name="" id={labelText} rows="8"></textarea>
      )}
    </div>
  );
}

export default Input;
