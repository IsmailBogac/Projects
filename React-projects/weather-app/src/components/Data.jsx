import dayjs from "dayjs";
import "dayjs/locale/tr";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../App.css";

dayjs.locale("tr");

export default function Data({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`card-container`}>
        <div className={`card bg-${theme}`}>
          <div className="card-header">
            <center>
              <h4>{dayjs(data.date).format("D  MMMM dddd")}</h4>
              <br />
            </center>
            <center>
              <h4>{data.day.condition.text}</h4>
            </center>
            <img src={`${data.day.condition.icon}`} />
          </div>
          <div className="card-body">
            <span className="temps">
              <h4>{data.day.maxtemp_c}</h4>
              <p>/</p>
              <h4>{data.day.mintemp_c}</h4>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
