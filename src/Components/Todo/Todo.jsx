import React, { useContext, useState } from "react";
import { contextApi } from "../Context/UseContext";
import "./Todo.css";
import { RxCross1 } from "react-icons/rx";

export default function Todo() {
  const [inputText, setInputText] = useState("");
  const { todo, addTodo, handleCompleted, handleRemove, completedTodoCount } =
    useContext(contextApi);
  const [emptyMessage, setEmptyMessage] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
    setEmptyMessage(false);
  };

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      addTodo({ title: inputText, completed: false });
      setInputText("");
    } else {
      setEmptyMessage(true);
    }
  };

  return (
    <>
      <div className="background-image">
        <div className="todo-container">
          <header className="header">
            <h1>TODO</h1>
          </header>
          <div className="todo-input-container">
            <input
              className="todo-input"
              type="text"
              placeholder={emptyMessage ?"Please Add Todo *": "Add Todo *"}
              value={inputText}
              onChange={handleChange}
            />
            <button className="todo-button" onClick={handleAdd}>
              Add
            </button>
          </div>

          <ul>
            {todo.map((el, index) => (
              <li key={index} className="todo-item fade-in">
                <input
                  className="todo-checkbox"
                  type="checkbox"
                  checked={el.completed}
                  onChange={() => handleCompleted(index)}
                />
                <span
                  className={el.completed ? "completed-task" : ""}
                  style={{
                    textDecoration: el.completed ? "line-through" : "none",
                  }}
                >
                  {el.title}
                </span>
                <span
                  className="todo-remove-button"
                  onClick={() => handleRemove(index)}
                >
                  <RxCross1 />
                </span>
              </li>
            ))}
          </ul>

          <div className="count_div">
            <p>Total : {todo.length}</p>
            <p>Completed : {completedTodoCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}
