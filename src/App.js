import React, { useState, useCallback, useEffect } from "react";
import "./App.scss";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import TodoItem from "./components/TodoItem/index.jsx";
import CheckModel from "./components/Model/checkModel";
import EditModel from "./components/Model/EditModel";

const App = () => {
  const [isShowInput, setIsShowInput] = useState(false);

  const [todoList, setTodoList] = useState([]);

  const [isShowCheckModel, setIsShowCheckModel] = useState(false);

  const [currentData, setCurrentData] = useState({});

  const [isShowEditModel, setIsShowEditModel] = useState(false);

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData" || "[]"));
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);

  const addItem = useCallback((inputValue) => {
    const todoItem = {
      id: new Date().getTime(),
      content: inputValue,
      compeleted: false,
    };
    setTodoList((todoList) => [todoItem, ...todoList]);
    setIsShowInput(false);
  }, []);

  const openCheckModel = useCallback(
    (id) => {
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setIsShowCheckModel(true);
    },
    [todoList]
  );

  return (
    <div className="App">
      <CheckModel
        isShowCheckModel={isShowCheckModel}
        closeModel={() => setIsShowCheckModel(false)}
        data={currentData}
      />
      <EditModel isShowEditModel={isShowEditModel} data={currentData} />
      <MyHeader setIsShowInput={() => setIsShowInput(!isShowInput)} />
      <AddInput isShowInput={isShowInput} addItem={addItem} />
      <ul className="todo-list">
        {todoList.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              openCheckModel={openCheckModel}
              openEditkModel={openEditkModel}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
