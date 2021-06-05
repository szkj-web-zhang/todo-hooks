import React, { useState } from "react";

import "./index.scss";

const AddInput = ({ isShowInput, addItem }) => {
  const [inputValue, setInputValue] = useState("");

  const submitValue = () => {
    if (inputValue.length === 0) {
      return;
    } else {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      {isShowInput && (
        <div className="input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="请输入待办事件"
          />
          <button onClick={submitValue} className="btn btn-primary">
            增加
          </button>
        </div>
      )}
    </>
  );
};

export default AddInput;
