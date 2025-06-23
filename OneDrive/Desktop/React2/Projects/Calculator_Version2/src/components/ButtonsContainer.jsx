import styles from "./ButtonsContainer.module.css";
import React from "react";

const ButtonsContainer = ({onButtonClick}) => {
  const letters = [
    "%",
    "/",
    "C",
    "AC",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "00",
    "="
  ];

  return (
    <div className={styles.buttonsContainer}>
      {letters.map((letter)=> (<button className={styles.button} onClick={onButtonClick}>{letter}</button>))}
    </div>
  );
};

export default ButtonsContainer;
