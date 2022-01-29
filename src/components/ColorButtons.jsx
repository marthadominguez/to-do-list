import React from "react";
import { useColorMode } from "../context/ColorContext";
import useLocalStorage from "../customHooks/useLocalStorage";

export const ColorButtons = () => {
  const { setColorMode } = useColorMode();
  const { guardarItem: guardarColor } = useLocalStorage(
    "COLORS_V1",
    []
  );

  const cambiarColor = (colorNuevo) => {
    guardarColor([colorNuevo]);
    setColorMode(colorNuevo);
  };

  return (
    <div className="absolute top-0 w-auto mt-4 flex ">
      <button
        type="button"
        className="bg-emerald-300 button-color ml-5"
        onClick={() => cambiarColor("emerald")}
      ></button>
      <button
        type="button"
        className="bg-purple-300 button-color ml-2"
        onClick={() => cambiarColor("purple")}
      ></button>
      <button
        type="button"
        className="bg-sky-300 button-color ml-2"
        onClick={() => cambiarColor("sky")}
      ></button>
    </div>
  );
};
