import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify(newList));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, { text: newTodo, completed: false }];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleToggleComplete(index) {
    const newTodoList = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, i) => i !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleToggleComplete={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
 