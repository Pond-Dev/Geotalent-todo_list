import React from "react";
import uuid from "react-uuid";

const Form = ({
  inputText,
  setInputText,
  todoList,
  setTodoList,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  // submit form and add todo list
  const submitTodoHandlers = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        text: inputText,
        completed: false,
      },
    ]);
  };

  // change status todo list
  const StatusHandlers = (e) => {
    setStatus(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="what need to be done ?"
      />
      <button
        onClick={submitTodoHandlers}
        className="todo-button"
        type="submit"
      >
        <h4 className="add-button">Add</h4>
      </button>
      <div className="select">
        <select onChange={StatusHandlers} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
