import TodoItem from "./TodoItem";

const TodoItems = ({todoList}) => {
  return (
    <div className="items-container">
      {todoList.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;