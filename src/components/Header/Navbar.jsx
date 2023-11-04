import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className="logo">
        <img src="/img/logo.png" alt="" />
      </div>
      <ul className="navlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
