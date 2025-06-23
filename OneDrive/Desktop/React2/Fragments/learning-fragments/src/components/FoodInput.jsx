import styles from "./FoodInput.module.css";

function FoodInput({handleOnchange}) {

  return <input type="text" placeholder="    Suggest some food" className={styles.input} onChange={handleOnchange}/>
}

export default FoodInput;
