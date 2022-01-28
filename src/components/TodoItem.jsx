import React from "react";
import { useColorMode } from "../context/ColorContext";

export const TodoItem = ({ text, onComplete, onDelete, completed }) => {
  const { colorMode } = useColorMode();

  return (
    <div className="my-2 todo-item flex">
      <button
        className={`px-2 flex items-center hover:text-sky-300`}
        onClick={onComplete}
      >
        {completed ? (
          <span className="material-icons-round text-xl text-sky-400">
            task_alt
          </span>
        ) : (
          <span className="material-icons-round text-xl text-sky-400">
            radio_button_unchecked
          </span>
        )}
      </button>
      <span
        className={`w-11/12 text-slate-600 flex items-center ${
          completed && "line-through"
        }`}
      >
        {text}
      </span>
      <button
        className="px-2 flex items-center text-sky-200 hover:text-red-500"
        onClick={onDelete}
      >
        <span className="material-icons-round text-xl">close</span>
      </button>
    </div>
  );
};
