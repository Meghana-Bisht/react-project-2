import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { isSecondary, icon, text,...rest } = props;
  console.log(props);
  return (
    <button {...rest} className={isSecondary ? styles.secondary_btn : styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
