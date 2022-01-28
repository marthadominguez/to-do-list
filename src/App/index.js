import React, { useState } from "react";
import { ColorContext } from "../context/ColorContext";
import { AppUI } from './AppUI';
import useLocalStorage from "../customHooks/useLocalStorage";

function App() {
  const { item: color } = useLocalStorage("COLORS_V1", ["sky"]);
  const [colorMode, setColorMode] = useState(color[0]);

  return (
    <ColorContext.Provider value={{ colorMode, setColorMode }}>
      <AppUI></AppUI>
    </ColorContext.Provider>
  )
}

export default App;
