import React from "react";

const Todo = ({ text, todo, todoList, setTodoList }) => {
  // delete to do from to do list
  const deleteHandlers = () => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  };

  // change complete to do list from false to true
  const completeHandlers = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <button onClick={completeHandlers} className="complete-btn">
        <h6>complete</h6>
      </button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandlers} className="trash-btn">
        <h6>delete</h6>
      </button>
    </div>
  );
};

export default Todo;
