import styles from "./App.module.css";
import React from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import Model from "./components/Model";

function App() {
  return (
    <center>
      <h1>C a l c u l a t o r</h1>
      <div className={styles.calculator}>
        <Model></Model>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
