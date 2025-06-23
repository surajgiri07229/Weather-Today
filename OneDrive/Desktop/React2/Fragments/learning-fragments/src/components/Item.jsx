import styles from "./Item.module.css";

const Item = ({ item, handleBuyButton }) => {
  // Gives each and every detail related to the event
  const eventClick = (event) => {
    console.log(event);

    console.log(`${item} is ordered`);
  };
  //  instead of (props) we can directly write {foodItems} there props is just basically a name
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      {item}{" "}
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
