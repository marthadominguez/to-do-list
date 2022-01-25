import React from "react";

export const TodoItem = ({text}) => {
  return (
    <div>
      <span>{text}</span>
      <input type="text" />
      <button>+</button>
    </div>
  );
};
