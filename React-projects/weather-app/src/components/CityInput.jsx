import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../App.css"
export default function CityInput({ setCity }) {
  const inputRef = useRef();
  const { theme } = useContext(ThemeContext);

  function handleSubmitForm(e) {
    e.preventDefault();
    setCity(inputRef.current.value);
  }

  return (
    <>
    <div className="form-container">

      <form onSubmit={handleSubmitForm}>
        <input type="text" ref={inputRef} className={` bg-${theme}`} />
        <button type="submit" className={`bg-${theme} pointer`}>Ara</button>
      </form>
    </div>
    </>
  );
}
