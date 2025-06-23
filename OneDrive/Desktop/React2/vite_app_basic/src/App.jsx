import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("welcome Back");
  });

  useEffect(()=>{
    alert("count has changed");
  },[count])

  return (
    <div>
      <p>
        The count is here : <button onClick={() => setCount()}>{count+1}</button>
      </p>
    </div>
  );
}

export default App;
