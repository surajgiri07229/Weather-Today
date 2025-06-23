import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {

  return (
    <div>
      this is my normal div
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
    </div>
  );
}

export default App;
