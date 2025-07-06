import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

dayjs.locale("tr");

export default function Graphic({ daysData }) {
  const { theme } = useContext(ThemeContext);

  const graphData = daysData.map((item) => ({
    date: dayjs(item.date).format("D MMM"),
    max: item.day.maxtemp_c,
    min: item.day.mintemp_c,
  }));
  console.log(graphData);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "300px",
        margin: "20px auto",
        borderRadius: "30px"
      }}
    >
      <ResponsiveContainer  width="100%" height="100%">
        <AreaChart
          data={graphData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorMax" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e74c3c" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e74c3c" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3498db" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3498db" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="max"
            stroke="#e74c3c"
            fillOpacity={1}
            fill="url(#colorMax)"
          />
          <Area
            type="monotone"
            dataKey="min"
            stroke="#3498db"
            fillOpacity={1}
            fill="url(#colorMin)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
