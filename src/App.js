import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodoList, setFilterTodoList] = useState([]);

  useEffect(() => {
    getLocalTodoList();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodoList();
  }, [status, todoList]);

  // check status todo
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodoList(todoList.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodoList(todoList.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodoList(todoList);
        break;
    }
  };

  // save data to local storage and change data type javascript obj to string
  const saveLocalTodoList = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };
  // get data from local storage
  const getLocalTodoList = () => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>Todo List </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
      />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filterTodoList={filterTodoList}
      />
    </div>
  );
}

export default App;
