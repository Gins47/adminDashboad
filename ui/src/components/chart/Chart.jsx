import React from "react";
import "./Chart.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
function Chart({ title, data, dataKeyX, dataKeyY }) {
  return (
    <div className="Chart">
      <h1 className="ChartTitle">{title}</h1>
      <div className="ChartView">
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey={dataKeyX} />
            <Line type="monotone" dataKey={dataKeyY} stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
