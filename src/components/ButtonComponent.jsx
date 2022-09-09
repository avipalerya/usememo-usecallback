import React from "react";

const ButtonComponent = ({ handleClick, children }) => {
  console.log("rendering", children);
  return (
    <div>
      <button onClick={handleClick}>Children</button>
    </div>
  );
};
export default React.memo(ButtonComponent);
