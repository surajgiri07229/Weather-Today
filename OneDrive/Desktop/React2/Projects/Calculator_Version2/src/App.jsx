import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import Model from "./components/Model";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("35");
  return (
    <center>
      <h1>C a l c u l a t o r</h1>
      <div className={styles.calculator}>
        <Model></Model>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={()=> console.log("button clicked") 
        }></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
