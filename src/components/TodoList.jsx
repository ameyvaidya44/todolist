function TodoList({ todos, handleToggleComplete, handleDeleteTodo }) {
    return (
      <div className="main">
        {todos.map((todo, index) => (
          <div key={index} className={`todoItem ${todo.completed ? "completed" : ""}`}>
            <input
              type="radio"
              className="radioBtn"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <p>{todo.text}</p>
            <button className="deleteBtn" onClick={() => handleDeleteTodo(index)}>❌</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default TodoList;
  