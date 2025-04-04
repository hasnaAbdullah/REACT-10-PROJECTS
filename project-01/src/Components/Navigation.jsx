import React from "react";
import Menu from "./Menu";
function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src="../public/images/brand_logo.png" alt="logo" />
      </div>
      <Menu />
      <div>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navigation;
