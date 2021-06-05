import React, { useState, useCallback } from "react";
import "./style.scss";

const TodoItem = ({ item, index, openCheckModel, openEditkModel }) => {
  return (
    <li className="todo-item">
      <div className="check-box">
        <input type="checkbox" checked={item.completed} />
      </div>
      <span
        className="content"
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.content}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => openCheckModel(item.id)}
        >
          查看
        </button>
        <button
          className="btn btn-warning"
          onClick={() => openEditkModel(item.id)}
        >
          编辑
        </button>
        <button className="btn btn-danger">删除</button>
      </div>
    </li>
  );
};

export default TodoItem;
