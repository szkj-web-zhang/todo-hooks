import React from "react";
import "./style.scss";

const Model = ({ isShowModel, modelTitle, children }) => {
  return (
    <>
      {isShowModel && (
        <div className="model">
          <div className="inner">
            <div className="m-header">{modelTitle}</div>
            <div className="content-wrapper">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
