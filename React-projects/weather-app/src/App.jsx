import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import ListData from "./components/ListData";
import Graphic from "./components/Graphic";
import CityInput from "./components/CityInput";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  const [daysData, setDaysData] = useState([]);
  const [city, setCity] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);
  const color = theme === "dark" ? "light" : "dark";

  const api_key = "db883a1671d54dbba24162430252602";
  useEffect(() => {
    if (!city) return;
    async function getData() {
      const url = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7`
      );

      const data = await url.json();
      if (data && data.forecast && data.forecast.forecastday) {
        setDaysData(data.forecast.forecastday);
      } else {
        setDaysData([]);
      }
    }
    getData();
  }, [city]);

  return (
    <div className={`app-container ${theme}`}>
      <h1 className="title">
        Welcome to weather app
        </h1>
      <div>
        <CityInput setCity={setCity} />
        <ListData cityDatas={daysData} color={color} />
        {daysData.length === 0 ? (
          "Şehir bilgisi giriniz..."
        ) : (
          <Graphic daysData={daysData} />
        )}
        <ThemeSelector />
      </div>
    </div>
  );
}

export default App;
