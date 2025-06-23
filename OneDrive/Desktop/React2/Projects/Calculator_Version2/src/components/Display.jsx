import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return (
    <div>
      <input className={styles.display} type="text" value={displayValue} readOnly />
    </div>
  );
};

export default Display;
