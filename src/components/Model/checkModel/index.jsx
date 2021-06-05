import React from "react";
import "./style.scss";
import Model from "../";

const CheckModel = ({ isShowCheckModel, data, closeModel }) => {
  return (
    <Model isShowModel={isShowCheckModel} modelTitle="查看事件">
      <p className="topic">时间:{data.id}</p>
      <p className="topic">内容:{data.content}</p>
      <p className="topic">状态:{data.conpleted ? "已完成" : "未完成"}</p>
      <button className="btn btn-primary comfirm-btn" onClick={closeModel}>
        确定
      </button>
    </Model>
  );
};

export default CheckModel;
