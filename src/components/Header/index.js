import React from "react";

import "./index.scss";

const Header = ({ setIsShowInput }) => {
  const handleOpenInput = () => {
    setIsShowInput(true);
  };

  return (
    <div className="header">
      <h1>事件待办</h1>
      <span className="icon" onClick={handleOpenInput}>
        &#43;
      </span>
    </div>
  );
};

export default Header;
