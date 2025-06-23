import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
    name:'Study',
    dueDate:'30/04/2025'
  },
  {
    name:'go to college',
    dueDate:'09/10/2025'
  },
  {
    name:'Lunch',
    dueDate:'10/10/2025'
  },
  {
    name:'Project',
    dueDate:'15/10/2025'
  },
  {
    name:'Sleep',
    dueDate:'19/10/2025'
  }
];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo />
      <TodoItems todoList={todoItems}></TodoItems>
    </center>
  );
}

export default App;
