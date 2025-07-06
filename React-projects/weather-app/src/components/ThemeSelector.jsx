import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from 'react-bootstrap-icons';


export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={`selector-button pointer bg-${theme}`}
      onClick={() =>
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
      }
    >
      {
        theme === "dark" ? (<Sun size={24}/>) : <Moon size={24}/>
      }
    </button>
  );
}
