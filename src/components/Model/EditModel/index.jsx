import React, { useRef } from "react";
import "./style.scss";
import Model from "../";

const EditModel = ({ isShowEditModel, data, submitEdit }) => {
  const inputRef = useRef();
  const checkRef = useRef();

  const formatNewData = () => {
    const val = inputRef.current.value.trim(),
      valLen = val.length;
    if (valLen === 0) {
      inputRef.current.value = data.content;
      return;
    }

    const newData = {
      id: new Date().getTime(),
      content: val,
      compeleted: checkRef.current.checked,
    };
    submitEdit(newData, data.id);
  };

  return (
    <Model isShowModel={isShowEditModel} modelTitle="编辑事件">
      <p className="topic">时间：{data.id}</p>
      <p className="topic">
        <textarea ref={inputRef} defaultValue={data.content}></textarea>
      </p>
      <p className="topic">
        状态：
        <input
          type="checkbox"
          ref={checkRef}
          defaultChecked={data.compeleted ? "true" : "false"}
        />
      </p>
      <button className="btn btn-primary comfirm-btn" onClick={formatNewData}>
        提交
      </button>
    </Model>
  );
};

export default EditModel;
