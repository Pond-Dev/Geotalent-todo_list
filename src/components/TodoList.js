import React from "react";
import Todo from "./Todo.js";
const TodoList = ({ todoList, setTodoList, filterTodoList }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodoList.map((todo) => (
          <Todo
            todoList={todoList}
            setTodoList={setTodoList}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
