import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  //if-else method-1

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>; if condition gets satisfy then h3 will print
  // }
  let foodItems = ["Fruits", "Salad", "Dry Fruits", "Milk", "Juices","Ghee"];
  let [textToShow, setTextState] = useState("Food item entered by user : ");
  console.log(`currently value of textState - ${textToShow}`);
  
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  // ternary operator method-2
  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungry.</h3> : null; // ternary operator method-2

  //logical operator method-3
  // let logical_way = foodItems.length === 0 && <h3>I am still hungry.</h3>
  // if both condition satisfied then it will return h3 and if one or neither gets satisfied then it will ignore print upcoming statements

  return (
    <center>
      <Container>
        <h1>Healthy Foods</h1>
        {/* {emptyMessage} */}
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the list of healthy foods that are good for your health and well being.</p>
      </Container>
    </center>
  );
}

export default App;
