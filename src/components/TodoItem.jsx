import React from "react";

export const TodoItem = ({text, onComplete}) => {
  return (
    <div className="my-4">
      <button className="mx-4" onClick={onComplete}>check</button>
      <span >{text}</span>
      <button className="mx-4" >delete</button>
    </div>
  );
};
