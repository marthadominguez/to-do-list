import React from "react";

export const TodoItem = ({ text, onComplete, onDelete }) => {
  return (
    <div className="my-2 todo-item flex">
      <button className="px-2 flex items-center text-sky-100 hover:text-sky-300" onClick={onComplete}>
        <span className="material-icons-round text-xl">radio_button_unchecked</span>
      </button>
      <span className="w-11/12 text-slate-600 flex items-center">{text}</span>
      <button className="px-2 flex items-center text-sky-100 hover:text-red-500" onClick={onDelete}>
        <span className="material-icons-round text-xl">close</span>
      </button>
    </div>
  );
};
