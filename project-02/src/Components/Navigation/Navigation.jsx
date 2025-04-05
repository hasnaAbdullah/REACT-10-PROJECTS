import React from "react";
import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <nav className={`container ${styles["navigation"]}`}>
      <div>
        <img src="../../public/images/logo.png" alt="" />
      </div>
      <ul className={styles["nav-links"]}>
        <li className="nav-link">HOME</li>
        <li className="nav-link">ABOUT</li>
        <li className="nav-link">CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navigation;
